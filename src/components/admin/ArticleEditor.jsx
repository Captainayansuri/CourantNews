import React, { useState, useEffect } from 'react';
import {
  Save, ArrowLeft, Image as ImageIcon, Sparkles, Star, ShieldAlert,
  Calendar, Tag, Eye, Trash2, Check, Video, Bold, Heading, Quote, List
} from 'lucide-react';
import { newsService } from '../../services/newsService';
import { useAuth } from '../../context/AuthContext';
import { MediaLibraryModal } from './MediaLibraryModal';

export const ArticleEditor = ({ articleId, onSaveSuccess, onCancel }) => {
  const { profile } = useAuth();
  const [categories, setCategories] = useState([]);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    body: '',
    hero_image: '',
    caption: '',
    category: 'technology',
    tags: [],
    status: 'published',
    byline: 'Editor-in-Chief',
    reading_time: '4 min read',
    featured_flag: false,
    breaking_flag: false,
    editors_pick_flag: false,
    published_at: new Date().toISOString().slice(0, 16)
  });

  const [tagInput, setTagInput] = useState('');
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [isSavedAlert, setIsSavedAlert] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const loadEditorData = async () => {
      try {
        const nextCategories = await newsService.getCategories();
        if (active) setCategories(nextCategories);
        if (articleId) {
          const existing = await newsService.getAdminArticleById(articleId);
          if (active && existing) {
            setFormData({
              ...existing,
              tags: existing.tags || [],
              published_at: existing.published_at ? new Date(existing.published_at).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16)
            });
          }
        }
      } catch (loadError) {
        if (active) setError('Unable to load this editor. Confirm the Supabase migration and your editor role.');
      }
    };
    loadEditorData();
    return () => { active = false; };
  }, [articleId]);

  // Auto slug generation from title if title changes and user hasn't edited slug manually
  const handleTitleChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      title: val,
      slug: prev.id ? prev.slug : val
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
    }));
  };

  const handleAddTag = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim().replace(/^#/, '');
      if (!formData.tags.includes(newTag)) {
        setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag] }));
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tagToRemove)
    }));
  };

  // Helper formatting for rich text editor
  const insertFormatting = (syntax) => {
    const textarea = document.getElementById('gn-body-textarea');
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    let replacement = '';
    if (syntax === 'bold') replacement = `<strong>${text.substring(start, end) || 'bold text'}</strong>`;
    if (syntax === 'h3') replacement = `<h3>${text.substring(start, end) || 'Subheading Title'}</h3>`;
    if (syntax === 'quote') replacement = `<blockquote class="story-blockquote">${text.substring(start, end) || 'Pull quote text here...'}</blockquote>`;
    if (syntax === 'paragraph') replacement = `<p>${text.substring(start, end) || 'New paragraph text...'}</p>`;
    if (syntax === 'video') replacement = `<p><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Watch related video</a></p>`;

    const newBody = text.substring(0, start) + replacement + text.substring(end);
    setFormData(prev => ({ ...prev, body: newBody }));
  };

  const handleSubmit = async (e, targetStatus) => {
    if (e) e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter an article title.');
      return;
    }

    const payload = {
      ...formData,
      status: targetStatus || formData.status,
      published_at: new Date(formData.published_at).toISOString()
    };

    try {
      await newsService.saveArticle(payload);
      setError('');
      setIsSavedAlert(true);
      setTimeout(() => {
        setIsSavedAlert(false);
        onSaveSuccess();
      }, 600);
    } catch (saveError) {
      setError(saveError.message || 'Unable to save this article.');
    }
  };

  const handleDelete = async () => {
    if (formData.id && confirm('Are you sure you want to delete this article?')) {
      try {
        await newsService.deleteArticle(formData.id);
        onSaveSuccess();
      } catch (deleteError) {
        setError('Only administrators can delete articles.');
      }
    }
  };

  return (
    <div className="gn-editor-page animate-fade-in">
      
      {/* Editor Header Navigation */}
      <div className="gn-editor-header">
        <button className="gn-back-btn" onClick={onCancel}>
          <ArrowLeft size={18} />
          <span>Back to Dashboard</span>
        </button>

        <div className="gn-editor-header-actions">
          {formData.id && profile?.role === 'admin' && (
            <button className="gn-btn-danger" onClick={handleDelete}>
              <Trash2 size={16} /> Delete
            </button>
          )}

          <button
            type="button"
            className="gn-btn-secondary"
            onClick={(e) => handleSubmit(e, 'draft')}
          >
            Save as Draft
          </button>

          <button
            type="button"
            className="gn-btn-primary"
            onClick={(e) => handleSubmit(e, 'published')}
          >
            <Save size={16} />
            <span>Publish Article</span>
          </button>
        </div>
      </div>

      {isSavedAlert && (
        <div className="gn-alert-success">
          <Check size={18} />
          <span>Article saved successfully!</span>
        </div>
      )}

      {error && <div className="gn-login-error">{error}</div>}

      <form className="gn-editor-grid" onSubmit={(e) => handleSubmit(e)}>
        
        {/* Left Column: Main Editor */}
        <div className="gn-editor-main-col">
          
          {/* Article Title */}
          <div className="gn-field-card">
            <input
              type="text"
              className="gn-input-title"
              placeholder="Article Headline..."
              required
              value={formData.title}
              onChange={handleTitleChange}
            />

            <div className="gn-slug-row">
              <span className="gn-slug-prefix">Permalink: /article/</span>
              <input
                type="text"
                className="gn-input-slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              />
            </div>
          </div>

          {/* Excerpt / Dek */}
          <div className="gn-field-card">
            <label className="gn-field-label">Dek / Excerpt (Summary)</label>
            <textarea
              className="gn-input-excerpt"
              rows={3}
              placeholder="Brief summary appearing under headline on Google News cards..."
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            />
          </div>

          {/* Body Content Editor */}
          <div className="gn-field-card">
            <div className="gn-editor-toolbar">
              <span className="gn-field-label">Article Body Content</span>
              <div className="gn-toolbar-btns">
                <button type="button" onClick={() => insertFormatting('paragraph')}>Paragraph</button>
                <button type="button" onClick={() => insertFormatting('bold')}><Bold size={14} /> Bold</button>
                <button type="button" onClick={() => insertFormatting('h3')}><Heading size={14} /> Subhead</button>
                <button type="button" onClick={() => insertFormatting('quote')}><Quote size={14} /> Quote</button>
                <button type="button" onClick={() => insertFormatting('video')}><Video size={14} /> Embed Video</button>
              </div>
            </div>

            <textarea
              id="gn-body-textarea"
              className="gn-input-body"
              rows={16}
              placeholder="Write full article body text in rich HTML or Markdown paragraph tags..."
              required
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            />
          </div>

        </div>

        {/* Right Column: Publishing Controls & Metadata */}
        <div className="gn-editor-side-col">
          
          {/* Status & Schedule */}
          <div className="gn-side-card">
            <h4>Publishing Workflow</h4>
            
            <div className="gn-form-row">
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <div className="gn-form-row">
              <label>Publish Date & Time</label>
              <input
                type="datetime-local"
                value={formData.published_at}
                onChange={(e) => setFormData({ ...formData, published_at: e.target.value })}
              />
            </div>

            <div className="gn-form-row">
              <label>Author / Byline</label>
              <input
                type="text"
                value={formData.byline}
                onChange={(e) => setFormData({ ...formData, byline: e.target.value })}
              />
            </div>
          </div>

          {/* Feature Flags */}
          <div className="gn-side-card">
            <h4>Editorial Flags</h4>
            <div className="gn-flags-list">
              <label className="gn-checkbox-row">
                <input
                  type="checkbox"
                  checked={formData.breaking_flag}
                  onChange={(e) => setFormData({ ...formData, breaking_flag: e.target.checked })}
                />
                <ShieldAlert size={16} className="flag-icon breaking" />
                <span>Breaking News Banner</span>
              </label>

              <label className="gn-checkbox-row">
                <input
                  type="checkbox"
                  checked={formData.featured_flag}
                  onChange={(e) => setFormData({ ...formData, featured_flag: e.target.checked })}
                />
                <Sparkles size={16} className="flag-icon featured" />
                <span>Lead Hero Top Story</span>
              </label>

              <label className="gn-checkbox-row">
                <input
                  type="checkbox"
                  checked={formData.editors_pick_flag}
                  onChange={(e) => setFormData({ ...formData, editors_pick_flag: e.target.checked })}
                />
                <Star size={16} className="flag-icon editors" />
                <span>Editor's Pick</span>
              </label>
            </div>
          </div>

          {/* Category & Tags */}
          <div className="gn-side-card">
            <h4>Category & Tags</h4>

            <div className="gn-form-row">
              <label>Section Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {categories.map(c => (
                  <option key={c.id} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="gn-form-row">
              <label>Tags (Press Enter)</label>
              <input
                type="text"
                placeholder="Add tag and press Enter"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
              />
              <div className="gn-tags-wrapper">
                {formData.tags.map((t, idx) => (
                  <span key={idx} className="gn-tag-chip">
                    #{t}
                    <button type="button" onClick={() => handleRemoveTag(t)}>×</button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="gn-side-card">
            <h4>Hero Image</h4>
            
            {formData.hero_image && (
              <div className="gn-image-preview">
                <img src={formData.hero_image} alt="Hero Preview" />
              </div>
            )}

            <div className="gn-form-row">
              <input
                type="text"
                placeholder="Image URL..."
                value={formData.hero_image}
                onChange={(e) => setFormData({ ...formData, hero_image: e.target.value })}
              />
            </div>

            <button
              type="button"
              className="gn-btn-preset-media"
              onClick={() => setShowMediaModal(true)}
            >
              <ImageIcon size={16} /> Pick from Media Library
            </button>

            <div className="gn-form-row" style={{ marginTop: '10px' }}>
              <label>Photo Caption / Credit</label>
              <input
                type="text"
                placeholder="e.g. Courtesy of NASA/JWST"
                value={formData.caption}
                onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
              />
            </div>
          </div>

        </div>
      </form>

      {/* Media Library Selection Modal */}
      {showMediaModal && (
        <MediaLibraryModal
          onSelectImage={(url) => setFormData(prev => ({ ...prev, hero_image: url }))}
          onClose={() => setShowMediaModal(false)}
        />
      )}

      <style>{`
        .gn-editor-page {
          max-width: 1200px;
          margin: 0 auto;
        }

        .gn-editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .gn-editor-header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gn-btn-primary {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 20px;
          background-color: var(--accent-color);
          color: white;
          font-weight: 600;
          font-size: 14px;
        }

        .gn-btn-secondary {
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-surface);
          color: var(--text-primary);
          font-size: 14px;
        }

        .gn-btn-danger {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 14px;
          border-radius: 20px;
          background-color: var(--danger-bg);
          color: var(--danger-text);
          font-size: 13px;
          font-weight: 500;
        }

        .gn-alert-success {
          background-color: var(--success-bg);
          color: var(--success-text);
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .gn-editor-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
        }

        .gn-field-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          padding: 20px;
          margin-bottom: 20px;
        }

        .gn-input-title {
          width: 100%;
          border: none;
          font-size: 26px;
          font-weight: 700;
          color: var(--text-primary);
          outline: none;
          background: transparent;
        }

        .gn-slug-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 12px;
          color: var(--text-muted);
        }

        .gn-input-slug {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 12px;
          color: var(--accent-color);
          outline: none;
        }

        .gn-field-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 8px;
        }

        .gn-input-excerpt {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-main);
          color: var(--text-primary);
          font-size: 14px;
          outline: none;
        }

        .gn-editor-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .gn-toolbar-btns {
          display: flex;
          gap: 6px;
        }

        .gn-toolbar-btns button {
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          background-color: var(--bg-hover);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .gn-input-body {
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-main);
          color: var(--text-primary);
          font-size: 15px;
          line-height: 1.6;
          outline: none;
          font-family: monospace;
        }

        .gn-side-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          padding: 16px;
          margin-bottom: 20px;
        }

        .gn-side-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 8px;
        }

        .gn-form-row {
          margin-bottom: 14px;
        }

        .gn-form-row label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .gn-form-row input, .gn-form-row select {
          width: 100%;
          padding: 8px 10px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-main);
          color: var(--text-primary);
          font-size: 13px;
        }

        .gn-flags-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .gn-checkbox-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-primary);
          cursor: pointer;
        }

        .flag-icon.breaking { color: #d93025; }
        .flag-icon.featured { color: #1a73e8; }
        .flag-icon.editors { color: #fbbc04; }

        .gn-tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }

        .gn-tag-chip {
          font-size: 12px;
          background-color: var(--accent-light);
          color: var(--accent-color);
          padding: 2px 8px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .gn-tag-chip button {
          color: var(--accent-color);
          font-size: 14px;
        }

        .gn-image-preview {
          width: 100%;
          height: 140px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .gn-image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gn-btn-preset-media {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px;
          border-radius: 8px;
          background-color: var(--bg-hover);
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 500;
        }

        @media (max-width: 860px) {
          .gn-editor-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
