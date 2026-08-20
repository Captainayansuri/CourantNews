import { createClient } from '@supabase/supabase-js';

const getSupabaseProjectUrl = (value) => {
  const url = new URL(value);

  if (url.protocol !== 'https:') {
    throw new Error('VITE_SUPABASE_URL must use HTTPS.');
  }

  // Supabase clients require the project origin. They add service paths such as
  // /rest/v1 themselves, so discard any accidental path/query/hash component.
  return url.origin;
};

const supabaseUrl = getSupabaseProjectUrl(import.meta.env.VITE_SUPABASE_URL);
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);
