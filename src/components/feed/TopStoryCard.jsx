import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';

export const TopStoryCard = ({ article, relatedArticles = [], onOpenArticle }) => {
  const [isContextExpanded, setIsContextExpanded] = useState(false);

  if (!article) return null;

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="gn-top-story-card">
      <div className="gn-top-story-header">
        <span className="gn-category-badge">{article.category.toUpperCase()}</span>
        <span className="gn-top-story-tag">TOP STORY</span>
      </div>

      <div className="gn-top-story-grid">
        <div className="gn-top-story-content">
          <h2
            className="gn-top-story-headline"
            onClick={() => onOpenArticle(article.id)}
          >
            {article.title}
          </h2>
          <p className="gn-top-story-excerpt">{article.excerpt}</p>

          <div className="gn-top-story-meta">
            <span className="gn-byline">{article.byline}</span>
            <span className="gn-dot">•</span>
            <span className="gn-timestamp">
              <Clock size={13} />
              {formatDate(article.published_at)}
            </span>
            <span className="gn-dot">•</span>
            <span className="gn-read-time">{article.reading_time}</span>
          </div>
        </div>

        {article.hero_image && (
          <div className="gn-top-story-media" onClick={() => onOpenArticle(article.id)}>
            <img src={article.hero_image} alt={article.title} loading="lazy" />
          </div>
        )}
      </div>

      {/* Google News 'Get perspectives & context' feature */}
      {relatedArticles && relatedArticles.length > 0 && (
        <div className="gn-context-module">
          <button
            className="gn-context-toggle-btn"
            onClick={() => setIsContextExpanded(!isContextExpanded)}
          >
            <div className="gn-context-label">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Get background & related coverage</span>
              <span className="gn-context-count">({relatedArticles.length})</span>
            </div>
            {isContextExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {isContextExpanded && (
            <div className="gn-context-list animate-fade-in">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="gn-context-item"
                  onClick={() => onOpenArticle(rel.id)}
                >
                  <BookOpen size={14} className="gn-context-icon" />
                  <div className="gn-context-info">
                    <div className="gn-context-title">{rel.title}</div>
                    <div className="gn-context-sub">
                      <span>{rel.category}</span> • <span>{formatDate(rel.published_at)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <style>{`
        .gn-top-story-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-top: 3px solid var(--brand-blue);
          border-radius: var(--card-radius);
          padding: 24px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-subtle);
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .gn-top-story-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-2px);
        }

        .gn-top-story-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .gn-category-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.6px;
          color: var(--accent-color);
          background-color: var(--accent-light);
          padding: 4px 9px;
          border-radius: 999px;
        }

        .gn-top-story-tag {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .gn-top-story-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(300px, 360px);
          gap: 24px;
          align-items: stretch;
        }

        .gn-top-story-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .gn-top-story-headline {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          line-height: 1.08;
          color: var(--text-primary);
          cursor: pointer;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          transition: color 0.15s;
        }

        .gn-top-story-headline:hover {
          color: var(--accent-color);
        }

        .gn-top-story-excerpt {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gn-top-story-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .gn-byline {
          font-weight: 700;
          color: var(--text-secondary);
        }

        .gn-timestamp {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .gn-dot {
          color: var(--border-color);
        }

        .gn-top-story-media {
          width: 100%;
          min-height: 280px;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          background-color: var(--bg-hover);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
        }

        .gn-top-story-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .gn-top-story-media:hover img {
          transform: scale(1.04);
        }

        .gn-context-module {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .gn-context-toggle-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 12px;
          background-color: var(--bg-hover);
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 700;
        }

        .gn-context-label {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sparkle-icon {
          color: var(--accent-color);
        }

        .gn-context-count {
          color: var(--text-muted);
          font-weight: 500;
        }

        .gn-context-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
          padding-left: 4px;
        }

        .gn-context-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .gn-context-item:hover {
          background-color: var(--bg-hover);
        }

        .gn-context-icon {
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .gn-context-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .gn-context-sub {
          font-size: 12px;
          color: var(--text-muted);
        }

        @media (max-width: 860px) {
          .gn-top-story-grid {
            grid-template-columns: 1fr;
          }
          .gn-top-story-media {
            order: -1;
            min-height: 230px;
          }
        }
      `}</style>
    </div>
  );
};
