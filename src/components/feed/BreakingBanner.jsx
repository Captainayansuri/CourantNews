import React from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export const BreakingBanner = ({ article, onOpenArticle }) => {
  if (!article) return null;

  return (
    <div className="gn-breaking-banner animate-fade-in" onClick={() => onOpenArticle(article.id)}>
      <div className="gn-breaking-tag">
        <ShieldAlert size={16} />
        <span>BREAKING NEWS</span>
      </div>
      <div className="gn-breaking-title">{article.title}</div>
      <div className="gn-breaking-action">
        <span>Read Report</span>
        <ArrowRight size={14} />
      </div>

      <style>{`
        .gn-breaking-banner {
          background: linear-gradient(90deg, #d93025 0%, #b31412 100%);
          color: white;
          padding: 10px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(217, 48, 37, 0.25);
          transition: transform 0.15s;
        }

        .gn-breaking-banner:hover {
          transform: translateY(-1px);
        }

        .gn-breaking-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .gn-breaking-title {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .gn-breaking-action {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0.9;
        }

        @media (max-width: 600px) {
          .gn-breaking-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          .gn-breaking-title {
            white-space: normal;
          }
        }
      `}</style>
    </div>
  );
};
