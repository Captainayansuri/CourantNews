import React, { useEffect, useState } from 'react';
import {
  ArrowLeft, Clock, Share2, Bookmark, Check, Edit, Eye, BookOpen, ExternalLink, Sparkles
} from 'lucide-react';
import { storageService } from '../../services/storageService';
import { useAuth } from '../../context/AuthContext';
import { ArticleCard } from '../feed/ArticleCard';

export const ArticleDetail = ({ articleId, onBack, onOpenArticle, onEditArticle }) => {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [copied, setCopied] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (articleId) {
      const art = storageService.getArticleById(articleId);
      if (art) {
        setArticle(art);
        storageService.incrementViewCount(art.id);

        // Fetch related articles based on category or tags
        const categoryArticles = storageService
          .getArticlesByCategory(art.category)
          .filter(a => a.id !== art.id)
          .slice(0, 3);
        setRelatedArticles(categoryArticles);
      }
      window.scrollTo(0, 0);
    }
  }, [articleId]);

  if (!article) {
    return (
      <div className="gn-article-not-found">
        <button className="gn-back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back to feed
        </button>
        <p>Article not found or has been deleted.</p>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="gn-article-detail animate-fade-in">
      
      {/* Article Top Navigation Bar */}
      <div className="gn-article-nav">
        <button className="gn-back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Back to Top Stories</span>
        </button>

        <div className="gn-article-actions">
          {isLoggedIn && (
            <button className="gn-action-btn gn-edit-btn" onClick={() => onEditArticle(article.id)}>
              <Edit size={16} />
              <span>Edit Post</span>
            </button>
          )}

          <button className="gn-action-btn" onClick={handleCopyLink} title="Copy article link">
            {copied ? <Check size={16} className="text-success" /> : <Share2 size={16} />}
            <span>{copied ? 'Copied!' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="gn-article-header">
        <div className="gn-article-breadcrumb">
          <span className="gn-category-chip">{article.category.toUpperCase()}</span>
          {article.breaking_flag && <span className="gn-flag-tag breaking">BREAKING</span>}
          {article.editors_pick_flag && <span className="gn-flag-tag editors">EDITOR'S PICK</span>}
        </div>

        <h1 className="gn-article-title">{article.title}</h1>
        {article.excerpt && <p className="gn-article-dek">{article.excerpt}</p>}

        <div className="gn-article-byline-bar">
          <div className="gn-author-avatar">{article.byline ? article.byline[0] : 'E'}</div>
          <div className="gn-byline-info">
            <div className="gn-author-name">{article.byline}</div>
            <div className="gn-pub-date">
              Published {formatDate(article.published_at)} • {article.reading_time || '4 min read'}
            </div>
          </div>

          <div className="gn-view-badge">
            <Eye size={14} />
            <span>{article.view_count || 1} views</span>
          </div>
        </div>
      </header>

      {/* Hero Media */}
      {article.hero_image && (
        <figure className="gn-article-hero">
          <img src={article.hero_image} alt={article.title} />
          {article.caption && <figcaption className="gn-hero-caption">{article.caption}</figcaption>}
        </figure>
      )}

      {/* Main Body Content */}
      <div
        className="gn-article-body"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

      {/* Article Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="gn-article-tags">
          <span className="tags-label">Topics:</span>
          {article.tags.map((tag, idx) => (
            <span key={idx} className="gn-tag-pill">#{tag}</span>
          ))}
        </div>
      )}

      <hr className="gn-article-divider" />

      {/* Related Coverage Module */}
      {relatedArticles.length > 0 && (
        <section className="gn-related-section">
          <h3 className="gn-related-heading">
            <Sparkles size={18} className="sparkle-icon" />
            <span>Related Coverage from Chronicle Desk</span>
          </h3>

          <div className="gn-related-grid">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} variant="standard" onOpenArticle={onOpenArticle} />
            ))}
          </div>
        </section>
      )}

      <style>{`
        .gn-article-detail {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          padding: 32px;
          margin-bottom: 40px;
          box-shadow: var(--shadow-subtle);
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .gn-article-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .gn-back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-color);
          font-weight: 500;
          font-size: 14px;
          padding: 6px 12px;
          border-radius: 20px;
          transition: background-color 0.15s;
        }

        .gn-back-btn:hover {
          background-color: var(--accent-light);
        }

        .gn-article-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gn-action-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: background-color 0.15s;
        }

        .gn-action-btn:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }

        .gn-edit-btn {
          background-color: var(--accent-light);
          color: var(--accent-color);
          border-color: transparent;
        }

        .gn-article-header {
          margin-bottom: 24px;
        }

        .gn-article-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .gn-category-chip {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-color);
          background-color: var(--accent-light);
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        .gn-flag-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          color: white;
        }

        .gn-flag-tag.breaking {
          background-color: #d93025;
        }

        .gn-flag-tag.editors {
          background-color: #fbbc04;
          color: #202124;
        }

        .gn-article-title {
          font-family: var(--font-sans);
          font-size: 32px;
          font-weight: 700;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .gn-article-dek {
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .gn-article-byline-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .gn-author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--accent-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
        }

        .gn-byline-info {
          flex: 1;
        }

        .gn-author-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .gn-pub-date {
          font-size: 12px;
          color: var(--text-muted);
        }

        .gn-view-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: var(--text-muted);
          background-color: var(--bg-hover);
          padding: 4px 10px;
          border-radius: 12px;
        }

        .gn-article-hero {
          margin: 0 0 28px 0;
          border-radius: 12px;
          overflow: hidden;
        }

        .gn-article-hero img {
          width: 100%;
          max-height: 440px;
          object-fit: cover;
          display: block;
        }

        .gn-hero-caption {
          font-size: 13px;
          color: var(--text-secondary);
          padding: 8px 12px;
          background-color: var(--bg-hover);
          font-style: italic;
        }

        .gn-article-body {
          font-family: var(--font-sans);
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-primary);
        }

        .gn-article-body p {
          margin-bottom: 20px;
        }

        .gn-article-body h3 {
          font-size: 22px;
          font-weight: 700;
          margin: 28px 0 14px 0;
        }

        .gn-article-body ul {
          margin: 0 0 20px 24px;
        }

        .gn-article-body li {
          margin-bottom: 8px;
        }

        .story-blockquote {
          border-left: 4px solid var(--accent-color);
          padding: 12px 20px;
          margin: 24px 0;
          background-color: var(--accent-light);
          font-style: italic;
          font-size: 18px;
          line-height: 1.5;
          border-radius: 0 8px 8px 0;
        }

        .gn-article-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .tags-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .gn-tag-pill {
          font-size: 13px;
          color: var(--accent-color);
          background-color: var(--bg-hover);
          padding: 4px 10px;
          border-radius: 14px;
        }

        .gn-article-divider {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 32px 0;
        }

        .gn-related-section {
          margin-top: 24px;
        }

        .gn-related-heading {
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          color: var(--text-primary);
        }

        .gn-related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        @media (max-width: 600px) {
          .gn-article-detail {
            padding: 16px;
          }
          .gn-article-title {
            font-size: 24px;
          }
          .gn-article-dek {
            font-size: 15px;
          }
        }
      `}</style>
    </article>
  );
};
