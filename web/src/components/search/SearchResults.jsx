import React from 'react';
import { Search, ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { ArticleCard } from '../feed/ArticleCard';

export const SearchResults = ({ query, results = [], onOpenArticle, onBackToHome }) => {
  return (
    <div className="gn-search-results-page animate-fade-in">
      <div className="gn-search-results-header">
        <button className="gn-back-btn" onClick={onBackToHome}>
          <ArrowLeft size={18} />
          <span>Back to Feed</span>
        </button>

        <div className="gn-search-meta">
          <h2 className="gn-search-title">
            Search results for <span className="gn-query-text">"{query}"</span>
          </h2>
          <div className="gn-search-count">Found {results.length} matching articles</div>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="gn-search-empty">
          <Search size={48} className="empty-icon" />
          <h3>No articles found matching "{query}"</h3>
          <p>Try searching for different keywords, categories, or tech topics.</p>
        </div>
      ) : (
        <div className="gn-search-grid">
          {results.map((art) => (
            <ArticleCard key={art.id} article={art} variant="standard" onOpenArticle={onOpenArticle} />
          ))}
        </div>
      )}

      <style>{`
        .gn-search-results-page {
          max-width: 900px;
          margin: 0 auto;
        }

        .gn-search-results-header {
          margin-bottom: 24px;
        }

        .gn-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-color);
          font-weight: 500;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .gn-search-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gn-query-text {
          color: var(--accent-color);
        }

        .gn-search-count {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .gn-search-empty {
          text-align: center;
          padding: 60px 20px;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
        }

        .empty-icon {
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .gn-search-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      `}</style>
    </div>
  );
};
