create type public.app_role as enum ('admin', 'editor', 'reader');
create type public.article_status as enum ('draft', 'published');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role public.app_role not null default 'reader',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  icon text not null default 'Home',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint categories_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
);

insert into public.categories (name, slug, icon) values
  ('Home', 'home', 'Home'),
  ('World', 'world', 'Globe'),
  ('National', 'national', 'Flag'),
  ('Business', 'business', 'Briefcase'),
  ('Technology', 'technology', 'Cpu'),
  ('Entertainment', 'entertainment', 'Film'),
  ('Sports', 'sports', 'Trophy'),
  ('Science', 'science', 'Atom'),
  ('Health', 'health', 'HeartPulse'),
  ('Opinion', 'opinion', 'MessageSquare')
on conflict (slug) do nothing;

create table public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(trim(title)) > 0),
  slug text not null unique,
  excerpt text not null default '',
  body text not null default '',
  hero_image text,
  caption text not null default '',
  category text not null references public.categories(slug),
  tags text[] not null default '{}',
  status public.article_status not null default 'draft',
  published_at timestamptz,
  byline text not null default '',
  reading_time text not null default '4 min read',
  featured_flag boolean not null default false,
  breaking_flag boolean not null default false,
  editors_pick_flag boolean not null default false,
  view_count bigint not null default 0 check (view_count >= 0),
  related_article_ids uuid[] not null default '{}',
  created_by uuid not null references auth.users(id),
  updated_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint articles_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  constraint published_articles_have_date check (status = 'draft' or published_at is not null)
);

create index articles_public_feed_idx
  on public.articles (category, published_at desc)
  where status = 'published';

create table public.media (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) > 0),
  url text not null check (url ~ '^https://'),
  category text not null default 'general',
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email)
  values (new.id, coalesce(new.email, ''))
  on conflict (id) do update set email = excluded.email, updated_at = now();
  return new;
end;
$$;

create or replace function public.set_article_audit_fields()
returns trigger language plpgsql set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    new.created_by = auth.uid();
  else
    new.created_by = old.created_by;
  end if;
  new.updated_by = auth.uid();
  new.updated_at = now();
  if new.status = 'published' and new.published_at is null then
    new.published_at = now();
  end if;
  return new;
end;
$$;

create or replace function public.set_media_audit_fields()
returns trigger language plpgsql set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    new.created_by = auth.uid();
  else
    new.created_by = old.created_by;
  end if;
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.has_role(allowed_roles public.app_role[])
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = any(allowed_roles)
  );
$$;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select public.has_role(array['admin']::public.app_role[]);
$$;

revoke all on function public.has_role(public.app_role[]) from public;
revoke all on function public.is_admin() from public;
grant execute on function public.has_role(public.app_role[]) to authenticated;
grant execute on function public.is_admin() to authenticated;

create trigger on_auth_user_created
  after insert on auth.users for each row execute procedure public.handle_new_user();
create trigger profiles_set_updated_at
  before update on public.profiles for each row execute procedure public.set_updated_at();
create trigger categories_set_updated_at
  before update on public.categories for each row execute procedure public.set_updated_at();
create trigger articles_set_audit_fields
  before insert or update on public.articles for each row execute procedure public.set_article_audit_fields();
create trigger media_set_audit_fields
  before insert or update on public.media for each row execute procedure public.set_media_audit_fields();

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.articles enable row level security;
alter table public.media enable row level security;

create policy "Users can read their own profile"
  on public.profiles for select to authenticated using (id = auth.uid());
create policy "Categories are publicly readable"
  on public.categories for select using (true);
create policy "Administrators manage categories"
  on public.categories for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Published articles are publicly readable"
  on public.articles for select using (status = 'published' and published_at <= now());
create policy "Staff can read all articles"
  on public.articles for select to authenticated
  using (public.has_role(array['admin', 'editor']::public.app_role[]));
create policy "Staff can create articles"
  on public.articles for insert to authenticated
  with check (public.has_role(array['admin', 'editor']::public.app_role[]));
create policy "Administrators or article owners can update articles"
  on public.articles for update to authenticated
  using (public.is_admin() or (public.has_role(array['editor']::public.app_role[]) and created_by = auth.uid()))
  with check (public.is_admin() or (public.has_role(array['editor']::public.app_role[]) and created_by = auth.uid()));
create policy "Administrators can delete articles"
  on public.articles for delete to authenticated using (public.is_admin());
create policy "Media is publicly readable"
  on public.media for select using (true);
create policy "Staff can create media"
  on public.media for insert to authenticated
  with check (public.has_role(array['admin', 'editor']::public.app_role[]));
create policy "Administrators or media owners can update media"
  on public.media for update to authenticated
  using (public.is_admin() or (public.has_role(array['editor']::public.app_role[]) and created_by = auth.uid()))
  with check (public.is_admin() or (public.has_role(array['editor']::public.app_role[]) and created_by = auth.uid()));
create policy "Administrators can delete media"
  on public.media for delete to authenticated using (public.is_admin());
