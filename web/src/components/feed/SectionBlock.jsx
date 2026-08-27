import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ArticleCard } from './ArticleCard';

export const SectionBlock = ({ title, categorySlug, articles = [], onSelectCategory, onOpenArticle }) => {
  if (!articles || articles.length === 0) return null;

  const leadArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <div className="gn-section-block">
      <div className="gn-section-header">
        <h3 className="gn-section-title" onClick={() => onSelectCategory(categorySlug)}>
          {title}
        </h3>
        <button className="gn-see-more-btn" onClick={() => onSelectCategory(categorySlug)}>
          <span>See more</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="gn-section-grid">
        {/* Left Column: Lead Article */}
        <div className="gn-section-lead-col">
          <ArticleCard article={leadArticle} variant="lead" onOpenArticle={onOpenArticle} />
        </div>

        {/* Right Column: Side/Compact Articles */}
        <div className="gn-section-side-col">
          {sideArticles.map((art) => (
            <ArticleCard key={art.id} article={art} variant="compact" onOpenArticle={onOpenArticle} />
          ))}
        </div>
      </div>

      <style>{`
        .gn-section-block {
          border-top: 1px solid var(--border-color);
          padding: 20px 0 4px;
          margin-bottom: 24px;
        }

        .gn-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 10px;
        }

        .gn-section-title {
          font-size: 22px;
          font-weight: 800;
          color: var(--text-primary);
          cursor: pointer;
          transition: color 0.15s;
        }

        .gn-section-title:hover {
          color: var(--accent-color);
        }

        .gn-see-more-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 700;
          color: var(--accent-color);
          padding: 4px 10px;
          border-radius: 999px;
          transition: background-color 0.15s;
        }

        .gn-see-more-btn:hover {
          background-color: var(--accent-light);
        }

        .gn-section-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr);
          gap: 20px;
        }

        .gn-section-lead-col {
          border-right: 1px solid var(--border-subtle);
          padding-right: 20px;
        }

        .gn-section-side-col {
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .gn-section-grid {
            grid-template-columns: 1fr;
          }
          .gn-section-lead-col {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid var(--border-subtle);
            padding-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
};
