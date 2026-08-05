import { INITIAL_ARTICLES, INITIAL_CATEGORIES, INITIAL_MEDIA_ASSETS } from './seedData';

const ARTICLES_KEY = 'gn_articles_v1';
const CATEGORIES_KEY = 'gn_categories_v1';
const MEDIA_KEY = 'gn_media_v1';
const AUTH_KEY = 'gn_admin_auth_v1';

export const storageService = {
  // Initialize default data if empty
  init() {
    if (!localStorage.getItem(ARTICLES_KEY)) {
      localStorage.setItem(ARTICLES_KEY, JSON.stringify(INITIAL_ARTICLES));
    }
    if (!localStorage.getItem(CATEGORIES_KEY)) {
      localStorage.setItem(CATEGORIES_KEY, JSON.stringify(INITIAL_CATEGORIES));
    }
    if (!localStorage.getItem(MEDIA_KEY)) {
      localStorage.setItem(MEDIA_KEY, JSON.stringify(INITIAL_MEDIA_ASSETS));
    }
  },

  // Articles API
  getArticles(includeDrafts = false) {
    this.init();
    try {
      const articles = JSON.parse(localStorage.getItem(ARTICLES_KEY) || '[]');
      if (includeDrafts) return articles;
      return articles.filter(a => a.status === 'published');
    } catch (e) {
      console.error('Failed to parse articles', e);
      return [];
    }
  },

  getArticleById(id) {
    const articles = this.getArticles(true);
    return articles.find(a => a.id === id) || null;
  },

  getArticleBySlug(slug) {
    const articles = this.getArticles(true);
    return articles.find(a => a.slug === slug) || null;
  },

  getArticlesByCategory(categorySlug, includeDrafts = false) {
    const articles = this.getArticles(includeDrafts);
    if (!categorySlug || categorySlug === 'home' || categorySlug === 'all') {
      return articles;
    }
    return articles.filter(a => a.category.toLowerCase() === categorySlug.toLowerCase());
  },

  searchArticles(query, includeDrafts = false) {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    const articles = this.getArticles(includeDrafts);
    
    return articles.filter(a => {
      const titleMatch = a.title.toLowerCase().includes(q);
      const excerptMatch = a.excerpt.toLowerCase().includes(q);
      const bodyMatch = a.body.toLowerCase().includes(q);
      const categoryMatch = a.category.toLowerCase().includes(q);
      const tagMatch = a.tags && a.tags.some(t => t.toLowerCase().includes(q));
      
      return titleMatch || excerptMatch || bodyMatch || categoryMatch || tagMatch;
    });
  },

  getAutocompleteSuggestions(query) {
    if (!query || query.trim().length < 2) return [];
    const q = query.toLowerCase().trim();
    const articles = this.getArticles(false);
    const results = [];

    // Title matches
    articles.forEach(a => {
      if (a.title.toLowerCase().includes(q)) {
        results.push({ type: 'article', text: a.title, slug: a.slug, id: a.id });
      }
    });

    // Category matches
    const categories = this.getCategories();
    categories.forEach(c => {
      if (c.name.toLowerCase().includes(q)) {
        results.push({ type: 'category', text: `Section: ${c.name}`, slug: c.slug, id: c.id });
      }
    });

    return results.slice(0, 6);
  },

  saveArticle(article) {
    this.init();
    const articles = JSON.parse(localStorage.getItem(ARTICLES_KEY) || '[]');
    const now = new Date().toISOString();

    if (article.id) {
      // Update existing
      const index = articles.findIndex(a => a.id === article.id);
      if (index !== -1) {
        articles[index] = {
          ...articles[index],
          ...article,
          updated_at: now
        };
      } else {
        articles.unshift({ ...article, updated_at: now });
      }
    } else {
      // Create new
      const newArticle = {
        ...article,
        id: 'art-' + Date.now(),
        slug: article.slug || this.generateSlug(article.title),
        published_at: article.published_at || now,
        updated_at: now,
        view_count: 0
      };
      articles.unshift(newArticle);
    }

    localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
    return true;
  },

  deleteArticle(id) {
    this.init();
    const articles = JSON.parse(localStorage.getItem(ARTICLES_KEY) || '[]');
    const filtered = articles.filter(a => a.id !== id);
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(filtered));
    return true;
  },

  incrementViewCount(id) {
    this.init();
    const articles = JSON.parse(localStorage.getItem(ARTICLES_KEY) || '[]');
    const index = articles.findIndex(a => a.id === id);
    if (index !== -1) {
      articles[index].view_count = (articles[index].view_count || 0) + 1;
      localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
    }
  },

  // Categories API
  getCategories() {
    this.init();
    return JSON.parse(localStorage.getItem(CATEGORIES_KEY) || '[]');
  },

  // Media Library API
  getMediaAssets() {
    this.init();
    return JSON.parse(localStorage.getItem(MEDIA_KEY) || '[]');
  },

  saveMediaAsset(asset) {
    this.init();
    const assets = this.getMediaAssets();
    const newAsset = {
      id: 'm-' + Date.now(),
      name: asset.name || 'Uploaded Media',
      url: asset.url,
      category: asset.category || 'general'
    };
    assets.unshift(newAsset);
    localStorage.setItem(MEDIA_KEY, JSON.stringify(assets));
    return newAsset;
  },

  deleteMediaAsset(id) {
    this.init();
    const assets = this.getMediaAssets();
    const filtered = assets.filter(m => m.id !== id);
    localStorage.setItem(MEDIA_KEY, JSON.stringify(filtered));
  },

  // Auth API
  loginAdmin(username, password) {
    // Single admin account credentials
    if ((username === 'admin' || username === 'admin@googlenews.com') && password === 'admin123') {
      const session = {
        token: 'token_' + Date.now(),
        user: { name: 'Editor-in-Chief', role: 'admin', email: 'admin@googlenews.com' }
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(session));
      return { success: true, user: session.user };
    }
    return { success: false, message: 'Invalid credentials. Use admin / admin123' };
  },

  getAdminSession() {
    try {
      const session = localStorage.getItem(AUTH_KEY);
      return session ? JSON.parse(session) : null;
    } catch (e) {
      return null;
    }
  },

  logoutAdmin() {
    localStorage.removeItem(AUTH_KEY);
  },

  // Helpers
  generateSlug(title) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
};
