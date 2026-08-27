import { supabase } from './supabase';

const publicArticleFields = `
  id, title, slug, excerpt, body, hero_image, caption, category, tags, status,
  published_at, updated_at, byline, reading_time, featured_flag, breaking_flag,
  editors_pick_flag, view_count, related_article_ids, created_at
`;

const adminArticleFields = `
  ${publicArticleFields}, created_by, updated_by
`;

const MEDIA_BUCKET = 'media';
const MAX_MEDIA_FILE_SIZE = 10 * 1024 * 1024;

const requireData = ({ data, error }) => {
  if (error) throw error;
  return data;
};

const validateImageFile = (file) => {
  if (!(file instanceof File) || !file.type.startsWith('image/')) {
    throw new Error('Choose a valid image file.');
  }
  if (file.size > MAX_MEDIA_FILE_SIZE) {
    throw new Error('Image files must be 10 MB or smaller.');
  }
};

const getFileExtension = (file) => {
  const fromName = file.name.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '');
  return fromName || file.type.split('/').pop()?.replace(/[^a-z0-9]/g, '') || 'image';
};

const assertHttpsUrl = (value) => {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') throw new Error();
    return url.toString();
  } catch {
    throw new Error('Supabase Storage did not return a valid HTTPS public URL.');
  }
};

const toArticlePayload = (article) => ({
  title: article.title.trim(),
  slug: article.slug.trim(),
  excerpt: article.excerpt || '',
  body: article.body || '',
  hero_image: article.hero_image || null,
  caption: article.caption || '',
  category: article.category,
  tags: article.tags || [],
  status: article.status,
  published_at: article.status === 'published' ? article.published_at || new Date().toISOString() : null,
  byline: article.byline || '',
  reading_time: article.reading_time || '4 min read',
  featured_flag: Boolean(article.featured_flag),
  breaking_flag: Boolean(article.breaking_flag),
  editors_pick_flag: Boolean(article.editors_pick_flag),
});

export const newsService = {
  async getCategories() {
    return requireData(await supabase.from('categories').select('*').order('name'));
  },

  async createCategory(category) {
    return requireData(
      await supabase
        .from('categories')
        .insert({ name: category.name.trim(), slug: category.slug.trim(), icon: category.icon?.trim() || 'Home' })
        .select()
        .single()
    );
  },

  async updateCategory(id, category) {
    return requireData(
      await supabase
        .from('categories')
        .update({ name: category.name.trim(), slug: category.slug.trim(), icon: category.icon?.trim() || 'Home' })
        .eq('id', id)
        .select()
        .single()
    );
  },

  async deleteCategory(id) {
    return requireData(await supabase.from('categories').delete().eq('id', id));
  },

  async getPublicArticles() {
    return requireData(
      await supabase.from('articles').select(publicArticleFields).order('published_at', { ascending: false })
    );
  },

  async getPublicArticleById(id) {
    return requireData(
      await supabase.from('articles').select(publicArticleFields).eq('id', id).maybeSingle()
    );
  },

  async searchPublicArticles(query) {
    const term = query.trim();
    if (!term) return [];
    return requireData(
      await supabase
        .from('articles')
        .select(publicArticleFields)
        .or(`title.ilike.%${term}%,excerpt.ilike.%${term}%,category.ilike.%${term}%`)
        .order('published_at', { ascending: false })
    );
  },

  async getAutocompleteSuggestions(query) {
    const term = query.trim();
    if (term.length < 2) return [];
    const [articles, categories] = await Promise.all([
      this.searchPublicArticles(term),
      this.getCategories(),
    ]);
    const categoryMatches = categories
      .filter((category) => category.name.toLowerCase().includes(term.toLowerCase()))
      .map((category) => ({ type: 'category', text: `Section: ${category.name}`, slug: category.slug, id: category.id }));
    const articleMatches = articles.map((article) => ({ type: 'article', text: article.title, slug: article.slug, id: article.id }));
    return [...articleMatches, ...categoryMatches].slice(0, 6);
  },

  async getAdminArticles() {
    return requireData(
      await supabase.from('articles').select(adminArticleFields).order('updated_at', { ascending: false })
    );
  },

  async getAdminArticleById(id) {
    return requireData(
      await supabase.from('articles').select(adminArticleFields).eq('id', id).single()
    );
  },

  async saveArticle(article) {
    const payload = toArticlePayload(article);
    if (article.id) {
      return requireData(
        await supabase.from('articles').update(payload).eq('id', article.id).select(adminArticleFields).single()
      );
    }
    return requireData(await supabase.from('articles').insert(payload).select(adminArticleFields).single());
  },

  async deleteArticle(id) {
    return requireData(await supabase.from('articles').delete().eq('id', id));
  },

  async getMediaAssets() {
    return requireData(await supabase.from('media').select('*').order('created_at', { ascending: false }));
  },

  async uploadMediaAsset({ file, name, category = 'general' }) {
    validateImageFile(file);

    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) {
      throw new Error('Your session has expired. Please sign in again before uploading media.');
    }

    const storagePath = `${authData.user.id}/${crypto.randomUUID()}.${getFileExtension(file)}`;
    const bucket = supabase.storage.from(MEDIA_BUCKET);
    const { data: uploadData, error: uploadError } = await bucket.upload(storagePath, file, {
      cacheControl: '3600',
      contentType: file.type,
      upsert: false,
    });

    if (uploadError) throw uploadError;

    const uploadedPath = uploadData.path;
    const removeUploadedFile = async () => {
      const { error } = await bucket.remove([uploadedPath]);
      if (error) console.error('Failed to remove orphaned media upload.', error);
    };

    try {
      const { data: publicUrlData } = bucket.getPublicUrl(uploadedPath);
      const publicUrl = assertHttpsUrl(publicUrlData?.publicUrl);
      return requireData(
        await supabase
          .from('media')
          .insert({ name: name.trim() || file.name, url: publicUrl, category })
          .select()
          .single()
      );
    } catch (error) {
      await removeUploadedFile();
      throw error;
    }
  },
};
