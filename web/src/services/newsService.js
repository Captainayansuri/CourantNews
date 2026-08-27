import { supabase } from './supabase';

const publicArticleFields = `
  id, title, slug, excerpt, body, hero_image, caption, category, tags, status,
  published_at, updated_at, byline, reading_time, featured_flag, breaking_flag,
  editors_pick_flag, view_count, related_article_ids, created_at
`;

const requireData = ({ data, error }) => {
  if (error) throw error;
  return data;
};

export const newsService = {
  async getCategories() {
    return requireData(await supabase.from('categories').select('*').order('name'));
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
};
