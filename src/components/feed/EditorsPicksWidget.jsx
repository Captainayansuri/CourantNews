import React, { useState } from 'react';
import { Star, TrendingUp } from 'lucide-react';
import { ArticleCard } from './ArticleCard';

export const EditorsPicksWidget = ({ articles = [], onOpenArticle }) => {
  const [activeTab, setActiveTab] = useState('editors');

  const editorsPicks = articles.filter(a => a.editors_pick_flag);
  const mostRead = [...articles].sort((a, b) => (b.view_count || 0) - (a.view_count || 0)).slice(0, 5);

  const displayList = activeTab === 'editors' ? editorsPicks : mostRead;

  return (
    <div className="gn-widget gn-editors-widget">
      <div className="gn-widget-tabs">
        <button
          className={`gn-tab-btn ${activeTab === 'editors' ? 'active' : ''}`}
          onClick={() => setActiveTab('editors')}
        >
          <Star size={15} />
          <span>Editor's Picks</span>
        </button>
        <button
          className={`gn-tab-btn ${activeTab === 'mostread' ? 'active' : ''}`}
          onClick={() => setActiveTab('mostread')}
        >
          <TrendingUp size={15} />
          <span>Most Read</span>
        </button>
      </div>

      <div className="gn-widget-list">
        {displayList.slice(0, 5).map((art, idx) => (
          <div key={art.id} className="gn-widget-item">
            <span className="gn-rank-num">{idx + 1}</span>
            <div className="gn-rank-content">
              <ArticleCard article={art} variant="compact" onOpenArticle={onOpenArticle} />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gn-editors-widget {
          background:
            linear-gradient(180deg, rgba(26, 115, 232, 0.05), transparent 24%),
            var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 16px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-subtle);
        }

        .gn-widget-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 12px;
        }

        .gn-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          border-bottom: 2px solid transparent;
          transition: all 0.15s;
        }

        .gn-tab-btn.active {
          color: var(--accent-color);
          border-bottom-color: var(--accent-color);
        }

        .gn-widget-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .gn-rank-num {
          font-size: 16px;
          font-weight: 800;
          color: var(--text-muted);
          width: 20px;
          padding-top: 14px;
        }

        .gn-rank-content {
          flex: 1;
          min-width: 0;
        }
      `}</style>
    </div>
  );
};
