import React, { useState, useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { CategoryPills } from './components/common/CategoryPills';
import { BreakingBanner } from './components/feed/BreakingBanner';
import { TopStoryCard } from './components/feed/TopStoryCard';
import { SectionBlock } from './components/feed/SectionBlock';
import { ArticleCard } from './components/feed/ArticleCard';
import { EditorsPicksWidget } from './components/feed/EditorsPicksWidget';
import { WeatherWidget } from './components/feed/WeatherWidget';
import { ArticleDetail } from './components/article/ArticleDetail';
import { SearchResults } from './components/search/SearchResults';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminRoutes } from './components/admin/AdminRoutes';
import { newsService } from './services/newsService';

function PublicApp() {
  const [searchParams] = useSearchParams();
  
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState('home');
  
  // Navigation View State
  const [currentView, setCurrentViewState] = useState(() => searchParams.get('article') ? 'article' : 'home');
  const [viewHistory, setViewHistory] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(() => searchParams.get('article'));
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Layout States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [visibleArticleLimit, setVisibleArticleLimit] = useState(6);

  const todayDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  // Load the publicly readable data from Supabase. RLS is the security boundary.
  useEffect(() => {
    let active = true;
    const loadInitialData = async () => {
      try {
        const [nextCategories, nextArticles] = await Promise.all([
          newsService.getCategories(),
          newsService.getPublicArticles(),
        ]);
        if (active) {
          setCategories(nextCategories);
          setArticles(nextArticles);
        }
      } catch (error) {
        console.error('Unable to load public news data.', error);
      }
    };
    loadInitialData();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    const articleId = searchParams.get('article');
    if (articleId) {
      setSelectedArticleId(articleId);
      setCurrentViewState('article');
    }
  }, [searchParams]);

  const loadArticles = async () => {
    const fetched = await newsService.getPublicArticles();
    setArticles(fetched);
  };

  // Dark Mode toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const navigateToView = (nextView) => {
    setViewHistory(prev => [...prev, currentView]);
    setCurrentViewState(nextView);
  };

  const goBack = () => {
    setViewHistory(prev => {
      if (prev.length === 0) {
        setCurrentViewState('home');
        return prev;
      }

      const previousView = prev[prev.length - 1];
      setCurrentViewState(previousView);
      return prev.slice(0, -1);
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const targetTag = target?.tagName?.toLowerCase();
      const isEditableTarget =
        targetTag === 'input' ||
        targetTag === 'textarea' ||
        targetTag === 'select' ||
        target?.isContentEditable;

      if (event.key === 'Backspace' && !isEditableTarget && currentView !== 'home') {
        event.preventDefault();
        goBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, goBack]);

  // Handlers
  const handleOpenArticle = (id) => {
    setSelectedArticleId(id);
    navigateToView('article');
    window.scrollTo(0, 0);
  };

  const handleSearchSubmit = async (query) => {
    setSearchQuery(query);
    try {
      setSearchResults(await newsService.searchPublicArticles(query));
    } catch (error) {
      console.error('Unable to search articles.', error);
      setSearchResults([]);
    }
    navigateToView('search');
    window.scrollTo(0, 0);
  };

  const handleSelectCategory = (catSlug) => {
    setActiveCategory(catSlug);
    navigateToView('home');
    setVisibleArticleLimit(6);
    window.scrollTo(0, 0);
  };

  // Filter articles based on active category
  const categoryArticles = activeCategory === 'home' || activeCategory === 'all'
    ? articles
    : articles.filter(a => a.category.toLowerCase() === activeCategory.toLowerCase());

  // Find Featured & Breaking stories
  const breakingArticle = articles.find(a => a.breaking_flag);
  const featuredArticle = categoryArticles.find(a => a.featured_flag) || categoryArticles[0];
  const relatedToFeatured = featuredArticle ? articles.filter(a => a.id !== featuredArticle.id && a.category === featuredArticle.category).slice(0, 3) : [];

  // Group remaining articles by sections for 'home' feed
  const techArticles = articles.filter(a => a.category === 'technology');
  const worldArticles = articles.filter(a => a.category === 'world');
  const businessArticles = articles.filter(a => a.category === 'business');
  const sportsArticles = articles.filter(a => a.category === 'sports');

  return (
    <div className="app-layout">
      
      {/* Header */}
      <Header
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        currentCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenArticle={handleOpenArticle}
        onSearchSubmit={handleSearchSubmit}
        getAutocompleteSuggestions={newsService.getAutocompleteSuggestions}
      />

      {/* Main Page Area */}
      <div className="main-content-wrapper">
        <main className="content-body" style={{ marginLeft: 'var(--sidebar-width)' }}>
          
          {/* View 1: Article Reader */}
          {currentView === 'article' && (
            <ArticleDetail
              articleId={selectedArticleId}
              onBack={goBack}
              onOpenArticle={handleOpenArticle}
            />
          )}

          {/* View 2: Search Results */}
          {currentView === 'search' && (
            <SearchResults
              query={searchQuery}
              results={searchResults}
              onOpenArticle={handleOpenArticle}
              onBackToHome={goBack}
            />
          )}

          {/* Homepage / Category Feed */}
          {currentView === 'home' && (
            <div className="gn-feed-view animate-fade-in">
              
              {/* Horizontal Category Pill Bar */}
              <CategoryPills
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={handleSelectCategory}
              />

              {/* Breaking News Ticker */}
              {breakingArticle && (
                <BreakingBanner
                  article={breakingArticle}
                  onOpenArticle={handleOpenArticle}
                />
              )}

              {/* Briefing Header for Home */}
              {activeCategory === 'home' && (
                <div className="gn-briefing-banner">
                  <div className="gn-briefing-copy">
                    <p className="gn-briefing-label">Your <span className="gn-highlight-word">briefing</span></p>
                    <h1>{todayDate}</h1>
                  </div>
                  <p className="gn-briefing-summary">
                    A curated overview of the <span className="gn-highlight-word">latest headlines</span>, top stories, and key developments for your day.
                  </p>
                </div>
              )}

              {/* Category Page Title if not Home */}
              {activeCategory !== 'home' && (
                <div className="gn-category-title-head">
                  <h2>{activeCategory.toUpperCase()} COVERAGE</h2>
                  <p>Latest stories and background context in {activeCategory}.</p>
                </div>
              )}

              {/* Two-Column Grid: Main Feed + Right Sidebar */}
              <div className="gn-feed-grid">
                
                {/* Main Feed Column */}
                <div className="gn-feed-main-column">
                  
                  <div className="gn-home-topstories-header">
                    <h2>Top <span className="gn-highlight-word">stories</span></h2>
                    <button className="gn-view-all-btn" onClick={() => handleSelectCategory('home')}>
                      See more headlines
                    </button>
                  </div>

                  {/* Lead Top Story Card */}
                  {featuredArticle && (
                    <TopStoryCard
                      article={featuredArticle}
                      relatedArticles={relatedToFeatured}
                      onOpenArticle={handleOpenArticle}
                    />
                  )}

                  {/* Section Blocks for Home View */}
                  {activeCategory === 'home' ? (
                    <>
                      {techArticles.length > 0 && (
                        <SectionBlock
                          title="Technology & Innovation"
                          categorySlug="technology"
                          articles={techArticles}
                          onSelectCategory={handleSelectCategory}
                          onOpenArticle={handleOpenArticle}
                        />
                      )}

                      {worldArticles.length > 0 && (
                        <SectionBlock
                          title="World News"
                          categorySlug="world"
                          articles={worldArticles}
                          onSelectCategory={handleSelectCategory}
                          onOpenArticle={handleOpenArticle}
                        />
                      )}

                      {businessArticles.length > 0 && (
                        <SectionBlock
                          title="Business & Markets"
                          categorySlug="business"
                          articles={businessArticles}
                          onSelectCategory={handleSelectCategory}
                          onOpenArticle={handleOpenArticle}
                        />
                      )}

                      {sportsArticles.length > 0 && (
                        <SectionBlock
                          title="Sports Coverage"
                          categorySlug="sports"
                          articles={sportsArticles}
                          onSelectCategory={handleSelectCategory}
                          onOpenArticle={handleOpenArticle}
                        />
                      )}
                    </>
                  ) : (
                    /* Category Filtered Articles Feed */
                    <div className="gn-category-feed-list">
                      {categoryArticles.slice(0, visibleArticleLimit).map((art) => (
                        <ArticleCard
                          key={art.id}
                          article={art}
                          variant="standard"
                          onOpenArticle={handleOpenArticle}
                        />
                      ))}

                      {visibleArticleLimit < categoryArticles.length && (
                        <button
                          className="gn-load-more-btn"
                          onClick={() => setVisibleArticleLimit(prev => prev + 6)}
                        >
                          Load More Coverage
                        </button>
                      )}
                    </div>
                  )}

                </div>

                {/* Right Column Sidebar */}
                <div className="gn-feed-right-column">
                  <WeatherWidget />
                  <EditorsPicksWidget
                    articles={articles}
                    onOpenArticle={handleOpenArticle}
                  />
                </div>

              </div>
            </div>
          )}

        </main>
      </div>

      <style>{`
        .gn-briefing-banner {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 28px 30px;
          background: linear-gradient(180deg, rgba(26, 115, 232, 0.08), rgba(255, 255, 255, 0.72));
          border: 1px solid rgba(26, 115, 232, 0.18);
          border-radius: 28px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-subtle);
        }

        .gn-briefing-copy {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .gn-briefing-label {
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-color);
        }

        .gn-briefing-banner h1 {
          font-size: clamp(40px, 5vw, 58px);
          line-height: 1.04;
          color: var(--text-primary);
          margin: 0;
        }

        .gn-briefing-summary {
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 720px;
          margin-top: 6px;
        }

        .gn-home-topstories-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .gn-home-topstories-header h2 {
          font-size: 22px;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
        }

        .gn-view-all-btn {
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-surface);
          color: var(--accent-color);
          font-size: 13px;
          font-weight: 700;
          transition: background-color 0.15s, transform 0.15s;
        }

        .gn-view-all-btn:hover {
          background-color: var(--accent-light);
          transform: translateY(-1px);
        }

        .gn-feed-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(300px, 340px);
          gap: 28px;
          align-items: start;
        }

        .gn-feed-main-column,
        .gn-feed-right-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .gn-category-title-head {
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }

        .gn-category-title-head h2 {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gn-category-title-head p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .gn-category-feed-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gn-load-more-btn {
          width: 100%;
          padding: 12px;
          border-radius: 24px;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--accent-color);
          font-size: 14px;
          font-weight: 600;
          margin-top: 12px;
          transition: background-color 0.15s;
        }

        .gn-load-more-btn:hover {
          background-color: var(--accent-light);
        }

        .gn-highlight-word {
          color: #fbbc05;
          font-weight: 800;
        }

        @media (max-width: 1080px) {
          .gn-feed-grid {
            grid-template-columns: 1fr;
          }
          .gn-feed-right-column {
            order: 2;
          }
        }

        @media (max-width: 768px) {
          .content-body {
            margin-left: 0 !important;
          }

          .gn-briefing-banner {
            padding: 20px;
          }

          .gn-view-all-btn {
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .content-body {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="*" element={<PublicApp />} />
    </Routes>
  );
}
