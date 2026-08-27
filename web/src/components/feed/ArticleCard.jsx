import React from 'react';
import { Clock } from 'lucide-react';

export const ArticleCard = ({ article, variant = 'standard', onOpenArticle }) => {
  if (!article) return null;

  const formatDate = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (variant === 'compact') {
    return (
      <div className="gn-card-compact" onClick={() => onOpenArticle(article.id)}>
        <div className="gn-card-compact-content">
          <h4 className="gn-card-compact-title">{article.title}</h4>
          <div className="gn-card-meta">
            <span className="gn-card-byline">{article.byline?.split(',')[0]}</span>
            <span className="gn-card-dot">•</span>
            <span className="gn-card-time">{formatDate(article.published_at)}</span>
          </div>
        </div>
        {article.hero_image && (
          <div className="gn-card-compact-thumb">
            <img src={article.hero_image} alt={article.title} loading="lazy" />
          </div>
        )}

        <style>{`
          .gn-card-compact {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 0;
            border-bottom: 1px solid var(--border-subtle);
            cursor: pointer;
          }
          .gn-card-compact:last-child {
            border-bottom: none;
          }
          .gn-card-compact-content {
            flex: 1;
            min-width: 0;
          }
          .gn-card-compact-title {
            font-size: 14px;
            font-weight: 700;
            line-height: 1.35;
            color: var(--text-primary);
            margin-bottom: 4px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            transition: color 0.15s;
          }
          .gn-card-compact:hover .gn-card-compact-title {
            color: var(--accent-color);
          }
          .gn-card-compact-thumb {
            width: 70px;
            height: 70px;
            border-radius: 10px;
            overflow: hidden;
            flex-shrink: 0;
            background-color: var(--bg-hover);
          }
          .gn-card-compact-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gn-card-meta {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--text-muted);
          }
          .gn-card-byline {
            font-weight: 700;
            color: var(--text-secondary);
          }
          .gn-card-dot {
            color: var(--border-color);
          }
        `}</style>
      </div>
    );
  }

  if (variant === 'lead') {
    return (
      <div className="gn-card-lead" onClick={() => onOpenArticle(article.id)}>
        {article.hero_image && (
          <div className="gn-card-lead-image">
            <img src={article.hero_image} alt={article.title} loading="lazy" />
          </div>
        )}
        <div className="gn-card-lead-body">
          <span className="gn-card-category-tag">{article.category?.toUpperCase()}</span>
          <h3 className="gn-card-lead-title">{article.title}</h3>
          <p className="gn-card-lead-excerpt">{article.excerpt}</p>
          <div className="gn-card-meta">
            <span className="gn-card-byline">{article.byline}</span>
            <span className="gn-card-dot">•</span>
            <span className="gn-card-time">{formatDate(article.published_at)}</span>
          </div>
        </div>

        <style>{`
          .gn-card-lead {
            display: flex;
            flex-direction: column;
            cursor: pointer;
            height: 100%;
          }
          .gn-card-lead-image {
            width: 100%;
            height: 240px;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 14px;
            background-color: var(--bg-hover);
          }
          .gn-card-lead-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.25s;
          }
          .gn-card-lead:hover .gn-card-lead-image img {
            transform: scale(1.03);
          }
          .gn-card-category-tag {
            font-size: 11px;
            font-weight: 800;
            color: var(--accent-color);
            letter-spacing: 0.6px;
            margin-bottom: 8px;
            display: inline-block;
            text-transform: uppercase;
          }
          .gn-card-lead-title {
            font-size: 20px;
            font-weight: 800;
            line-height: 1.3;
            color: var(--text-primary);
            margin-bottom: 8px;
            transition: color 0.15s;
          }
          .gn-card-lead:hover .gn-card-lead-title {
            color: var(--accent-color);
          }
          .gn-card-lead-excerpt {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.55;
            margin-bottom: 10px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }

  // Standard Card
  return (
    <div className="gn-card-standard" onClick={() => onOpenArticle(article.id)}>
      <div className="gn-card-standard-body">
        <span className="gn-card-category-tag">{article.category?.toUpperCase()}</span>
        <h3 className="gn-card-standard-title">{article.title}</h3>
        <p className="gn-card-standard-excerpt">{article.excerpt}</p>
        <div className="gn-card-meta">
          <span className="gn-card-byline">{article.byline?.split(',')[0]}</span>
          <span className="gn-card-dot">•</span>
          <span className="gn-card-time">{formatDate(article.published_at)}</span>
        </div>
      </div>
      {article.hero_image && (
        <div className="gn-card-standard-thumb">
          <img src={article.hero_image} alt={article.title} loading="lazy" />
        </div>
      )}

      <style>{`
        .gn-card-standard {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 16px;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          cursor: pointer;
          transition: box-shadow 0.2s, transform 0.15s;
        }
        .gn-card-standard:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-1px);
        }
        .gn-card-standard-body {
          flex: 1;
          min-width: 0;
        }
        .gn-card-standard-title {
          font-size: 17px;
          font-weight: 800;
          line-height: 1.35;
          color: var(--text-primary);
          margin-bottom: 6px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.15s;
        }
        .gn-card-standard:hover .gn-card-standard-title {
          color: var(--accent-color);
        }
        .gn-card-standard-excerpt {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .gn-card-standard-thumb {
          width: 104px;
          height: 104px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          background-color: var(--bg-hover);
        }
        .gn-card-standard-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};
