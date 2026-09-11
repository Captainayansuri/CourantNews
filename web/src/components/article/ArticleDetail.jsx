import React, { useEffect, useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import {
  ArrowLeft, Clock, Share2, Bookmark, Check, Edit, BookOpen, ExternalLink, ChevronLeft, ChevronRight
} from 'lucide-react';
import { newsService } from '../../services/newsService';

export const ArticleDetail = ({ articleId, onBack, onOpenArticle }) => {
  const [article, setArticle] = useState(null);
  const [alsoReadArticles, setAlsoReadArticles] = useState([]);
  const [recommendedArticles, setRecommendedArticles] = useState([]);
  const [copied, setCopied] = useState(false);
  const alsoReadRef = useRef(null);
  useEffect(() => {
    let active = true;
    if (articleId) {
      const loadArticle = async () => {
        try {
          const art = await newsService.getPublicArticleById(articleId);
          if (!art || !active) return;
          setArticle(art);
          const allArticles = await newsService.getPublicArticles();
          const candidates = allArticles.filter(a => a.id !== art.id);
          const sameCategory = candidates.filter(a => a.category === art.category);
          const otherArticles = candidates.filter(a => a.category !== art.category);
          const alsoRead = [...sameCategory, ...otherArticles].slice(0, 8);
          const alsoReadIds = new Set(alsoRead.map(a => a.id));
          const relatedByTopic = candidates
            .filter(a => !alsoReadIds.has(a.id))
            .sort((a, b) => {
              const articleTags = art.tags || [];
              const score = (candidate) => {
                const candidateTags = candidate.tags || [];
                const sharedTags = candidateTags.filter(tag => articleTags.includes(tag)).length;
                return (candidate.category === art.category ? 2 : 0) + sharedTags;
              };
              return score(b) - score(a);
            });
          if (active) {
            setAlsoReadArticles(alsoRead);
            setRecommendedArticles(relatedByTopic.slice(0, 6));
          }
        } catch (error) {
          if (active) setArticle(null);
        }
      };
      loadArticle();
      window.scrollTo(0, 0);
    }
    return () => { active = false; };
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

        <div className="gn-article-byline-bar">
          <div className="gn-author-avatar">{article.byline ? article.byline[0] : 'E'}</div>
          <div className="gn-byline-info">
            <div className="gn-author-name">{article.byline}</div>
            <div className="gn-pub-date">
              Published {formatDate(article.published_at)} • {article.reading_time || '4 min read'}
            </div>
          </div>

        </div>

        <h1 className="gn-article-title">{article.title}</h1>
        {article.excerpt && <p className="gn-article-dek">{article.excerpt}</p>}
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
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(article.body, {
            ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'h2', 'h3', 'h4', 'blockquote', 'ul', 'ol', 'li', 'a'],
            ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
            FORBID_TAGS: ['iframe', 'script', 'style'],
          }),
        }}
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

      {alsoReadArticles.length > 0 && (
        <section className="gn-related-section gn-also-read-section" aria-labelledby="also-read-heading">
          <div className="gn-related-heading-row">
            <h3 id="also-read-heading" className="gn-related-heading">Also Read</h3>
            <div className="gn-related-heading-rule" />
            {alsoReadArticles.length > 4 && (
              <div className="gn-related-controls">
                <button
                  type="button"
                  className="gn-related-arrow"
                  onClick={() => alsoReadRef.current?.scrollBy({ left: -280, behavior: 'smooth' })}
                  aria-label="Show previous related articles"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="gn-related-arrow"
                  onClick={() => alsoReadRef.current?.scrollBy({ left: 280, behavior: 'smooth' })}
                  aria-label="Show more related articles"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
          <div ref={alsoReadRef} className="gn-also-read-track">
            {alsoReadArticles.map((related) => (
              <article key={related.id} className="gn-also-read-card">
                {related.hero_image && (
                  <a href={`?article=${encodeURIComponent(related.id)}`} onClick={(event) => { event.preventDefault(); onOpenArticle(related.id); }} className="gn-related-image-link">
                    <img src={related.hero_image} alt="" loading="lazy" />
                  </a>
                )}
                <div className="gn-related-card-body">
                  <span className="gn-related-category">{related.category?.toUpperCase()}</span>
                  <a href={`?article=${encodeURIComponent(related.id)}`} onClick={(event) => { event.preventDefault(); onOpenArticle(related.id); }} className="gn-related-card-title">
                    {related.title}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {recommendedArticles.length > 0 && (
        <section className="gn-related-section gn-recommended-section" aria-labelledby="recommended-heading">
          <div className="gn-related-heading-row">
            <h3 id="recommended-heading" className="gn-related-heading">Recommended for You</h3>
            <div className="gn-related-heading-rule" />
          </div>
          <div className="gn-recommended-grid">
            {recommendedArticles.map((recommended) => (
              <article key={recommended.id} className="gn-recommended-card">
                {recommended.hero_image && (
                  <a href={`?article=${encodeURIComponent(recommended.id)}`} onClick={(event) => { event.preventDefault(); onOpenArticle(recommended.id); }} className="gn-recommended-image-link">
                    <img src={recommended.hero_image} alt="" loading="lazy" />
                  </a>
                )}
                <div className="gn-recommended-card-body">
                  <span className="gn-related-category">{recommended.category?.toUpperCase()}</span>
                  <a href={`?article=${encodeURIComponent(recommended.id)}`} onClick={(event) => { event.preventDefault(); onOpenArticle(recommended.id); }} className="gn-recommended-title">
                    {recommended.title}
                  </a>
                  {recommended.excerpt && <p className="gn-recommended-excerpt">{recommended.excerpt}</p>}
                </div>
              </article>
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
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .gn-article-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
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
          font-size: 52px;
          font-weight: 700;
          line-height: 1.12;
          color: var(--text-primary);
          margin-bottom: 16px;
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
          margin-bottom: 24px;
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
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .gn-pub-date {
          font-size: 12px;
          color: var(--text-muted);
        }

        .gn-article-hero {
          margin: 0 0 28px 0;
          border-radius: 12px;
        }

        .gn-article-hero img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          border-radius: inherit;
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
          margin-top: 36px;
        }

        .gn-related-heading-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .gn-related-heading {
          border-left: 4px solid var(--accent-color);
          color: var(--text-primary);
          font-size: 20px;
          font-weight: 800;
          line-height: 1;
          padding-left: 10px;
          white-space: nowrap;
        }

        .gn-related-heading-rule {
          background-color: var(--border-color);
          flex: 1;
          height: 1px;
        }

        .gn-related-controls {
          display: flex;
          gap: 6px;
        }

        .gn-related-arrow {
          align-items: center;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          color: var(--text-secondary);
          display: flex;
          height: 32px;
          justify-content: center;
          transition: background-color .15s, color .15s;
          width: 32px;
        }

        .gn-related-arrow:hover {
          background-color: var(--accent-light);
          color: var(--accent-color);
        }

        .gn-also-read-track {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: thin;
        }

        .gn-also-read-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          display: flex;
          flex: 0 0 calc((100% - 48px) / 4);
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          transition: box-shadow .2s, transform .15s;
        }

        .gn-also-read-card:hover,
        .gn-recommended-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-2px);
        }

        .gn-related-image-link {
          aspect-ratio: 16 / 9;
          background-color: var(--bg-hover);
          display: block;
          overflow: hidden;
        }

        .gn-related-image-link img,
        .gn-recommended-image-link img {
          height: 100%;
          object-fit: cover;
          transition: transform .25s;
          width: 100%;
        }

        .gn-also-read-card:hover img,
        .gn-recommended-card:hover img {
          transform: scale(1.03);
        }

        .gn-related-card-body,
        .gn-recommended-card-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 14px;
        }

        .gn-related-category {
          color: var(--accent-color);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
          margin-bottom: 7px;
        }

        .gn-related-card-title,
        .gn-recommended-title {
          color: var(--text-primary);
          font-size: 16px;
          font-weight: 800;
          line-height: 1.3;
          transition: color .15s;
        }

        .gn-related-card-title:hover,
        .gn-recommended-title:hover {
          color: var(--accent-color);
        }

        .gn-recommended-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .gn-recommended-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          overflow: hidden;
          transition: box-shadow .2s, transform .15s;
        }

        .gn-recommended-image-link {
          aspect-ratio: 16 / 9;
          background-color: var(--bg-hover);
          display: block;
          overflow: hidden;
        }

        .gn-recommended-title {
          font-size: 20px;
        }

        .gn-recommended-excerpt {
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.5;
          margin-top: 8px;
        }

        @media (max-width: 900px) and (min-width: 601px) {
          .gn-also-read-card {
            flex-basis: calc((100% - 16px) / 2);
          }
        }

        @media (max-width: 600px) {
          .gn-article-detail {
            padding: 16px;
          }
          .gn-article-title {
            font-size: 30px;
          }
          .gn-article-dek {
            font-size: 15px;
          }
          .gn-related-heading-row {
            align-items: flex-start;
            flex-wrap: wrap;
          }
          .gn-related-heading-rule {
            min-width: 40px;
          }
          .gn-related-controls {
            margin-left: auto;
          }
          .gn-also-read-track {
            margin-right: -16px;
            padding-right: 16px;
            scroll-snap-type: x mandatory;
          }
          .gn-also-read-card {
            flex-basis: min(82%, 280px);
            scroll-snap-align: start;
          }
          .gn-recommended-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </article>
  );
};
