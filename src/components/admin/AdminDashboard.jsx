import React, { useEffect, useState } from 'react';
import {
  Plus, Edit, Trash2, Eye, ShieldAlert, Sparkles, Star, Search,
  FileText, CheckCircle2, Clock, BarChart3, ExternalLink
} from 'lucide-react';
import { newsService } from '../../services/newsService';
import { useAuth } from '../../context/AuthContext';

export const AdminDashboard = ({ onCreateArticle, onEditArticle, onOpenArticle }) => {
  const { profile } = useAuth();
  const [articles, setArticles] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [filterQuery, setFilterQuery] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const refreshArticles = async () => {
    setIsLoading(true);
    try {
      setArticles(await newsService.getAdminArticles());
      setError('');
    } catch (loadError) {
      setError('Unable to load articles. Confirm that the Supabase migration has been run and your account has a staff role.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { refreshArticles(); }, []);

  const handleDelete = async (id, title) => {
    if (confirm(`Delete article "${title}"?`)) {
      try {
        await newsService.deleteArticle(id);
        await refreshArticles();
      } catch (deleteError) {
        setError('This article could not be deleted. Only administrators can delete articles.');
      }
    }
  };

  const handleToggleFlag = async (id, flagName) => {
    const art = articles.find(a => a.id === id);
    if (art) {
      try {
        await newsService.saveArticle({ ...art, [flagName]: !art[flagName] });
        await refreshArticles();
      } catch (saveError) {
        setError('This article could not be updated. Editors can edit only their own articles.');
      }
    }
  };

  const filteredArticles = articles.filter(a => {
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'published' && a.status === 'published') ||
      (activeTab === 'drafts' && a.status === 'draft');
    const matchesSearch =
      a.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(filterQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalViews = articles.reduce((acc, curr) => acc + (curr.view_count || 0), 0);
  const publishedCount = articles.filter(a => a.status === 'published').length;
  const draftCount = articles.filter(a => a.status === 'draft').length;

  const formatDate = (isoString) => {
    if (!isoString) return '';
    return new Date(isoString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="gn-dashboard animate-fade-in">
      
      {/* Top Header Bar */}
      <div className="gn-dashboard-header">
        <div>
          <h2 className="gn-dashboard-title">Editorial Management CMS</h2>
          <p className="gn-dashboard-sub">Publish, curate, and review your original news publications.</p>
        </div>

        <button className="gn-create-article-btn" onClick={onCreateArticle}>
          <Plus size={18} />
          <span>New Article</span>
        </button>
      </div>

      {error && <div className="gn-login-error">{error}</div>}

      {/* Analytics Overview Cards */}
      <div className="gn-stats-grid">
        <div className="gn-stat-card">
          <div className="gn-stat-icon blue"><FileText size={20} /></div>
          <div>
            <div className="gn-stat-val">{articles.length}</div>
            <div className="gn-stat-lbl">Total Articles</div>
          </div>
        </div>

        <div className="gn-stat-card">
          <div className="gn-stat-icon green"><CheckCircle2 size={20} /></div>
          <div>
            <div className="gn-stat-val">{publishedCount}</div>
            <div className="gn-stat-lbl">Published</div>
          </div>
        </div>

        <div className="gn-stat-card">
          <div className="gn-stat-icon orange"><Clock size={20} /></div>
          <div>
            <div className="gn-stat-val">{draftCount}</div>
            <div className="gn-stat-lbl">Drafts</div>
          </div>
        </div>

        <div className="gn-stat-card">
          <div className="gn-stat-icon purple"><BarChart3 size={20} /></div>
          <div>
            <div className="gn-stat-val">{totalViews.toLocaleString()}</div>
            <div className="gn-stat-lbl">Total Read Views</div>
          </div>
        </div>
      </div>

      {/* Table & Filter Bar */}
      <div className="gn-dashboard-table-card">
        <div className="gn-table-toolbar">
          <div className="gn-table-tabs">
            <button
              className={`gn-table-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All ({articles.length})
            </button>
            <button
              className={`gn-table-tab ${activeTab === 'published' ? 'active' : ''}`}
              onClick={() => setActiveTab('published')}
            >
              Published ({publishedCount})
            </button>
            <button
              className={`gn-table-tab ${activeTab === 'drafts' ? 'active' : ''}`}
              onClick={() => setActiveTab('drafts')}
            >
              Drafts ({draftCount})
            </button>
          </div>

          <div className="gn-dashboard-search">
            <Search size={16} />
            <input
              type="text"
              placeholder="Filter by title or section..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Articles Table */}
        <div className="gn-table-responsive">
          <table className="gn-articles-table">
            <thead>
              <tr>
                <th>Article Headline</th>
                <th>Category</th>
                <th>Status</th>
                <th>Flags</th>
                <th>Views</th>
                <th>Published</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan={7} className="text-center py-4">Loading articles…</td></tr>
              ) : filteredArticles.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-4">No articles found matching filters.</td>
                </tr>
              ) : (
                filteredArticles.map((art) => (
                  <tr key={art.id}>
                    <td>
                      <div className="gn-table-title-cell">
                        {art.hero_image && (
                          <img src={art.hero_image} alt="" className="gn-table-thumb" />
                        )}
                        <span
                          className="gn-table-title-link"
                          onClick={() => onOpenArticle(art.id)}
                        >
                          {art.title}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="gn-table-cat-badge">{art.category}</span>
                    </td>
                    <td>
                      <span className={`gn-status-pill ${art.status}`}>
                        {art.status}
                      </span>
                    </td>
                    <td>
                      <div className="gn-table-flags">
                        <button
                          className={`gn-flag-btn ${art.breaking_flag ? 'active breaking' : ''}`}
                          onClick={() => handleToggleFlag(art.id, 'breaking_flag')}
                          title="Toggle Breaking News"
                        >
                          <ShieldAlert size={14} />
                        </button>
                        <button
                          className={`gn-flag-btn ${art.featured_flag ? 'active featured' : ''}`}
                          onClick={() => handleToggleFlag(art.id, 'featured_flag')}
                          title="Toggle Top Story Lead"
                        >
                          <Sparkles size={14} />
                        </button>
                        <button
                          className={`gn-flag-btn ${art.editors_pick_flag ? 'active editors' : ''}`}
                          onClick={() => handleToggleFlag(art.id, 'editors_pick_flag')}
                          title="Toggle Editor's Pick"
                        >
                          <Star size={14} />
                        </button>
                      </div>
                    </td>
                    <td>{art.view_count || 0}</td>
                    <td>{formatDate(art.published_at)}</td>
                    <td className="text-right">
                      <div className="gn-table-actions">
                        <button
                          className="gn-icon-action"
                          onClick={() => onOpenArticle(art.id)}
                          title="Preview Article"
                        >
                          <ExternalLink size={16} />
                        </button>
                        <button
                          className="gn-icon-action"
                          onClick={() => onEditArticle(art.id)}
                          title="Edit Article"
                        >
                          <Edit size={16} />
                        </button>
                        {profile?.role === 'admin' && (
                          <button
                            className="gn-icon-action danger"
                            onClick={() => handleDelete(art.id, art.title)}
                            title="Delete Article"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .gn-dashboard {
          max-width: 1100px;
          margin: 0 auto;
        }

        .gn-dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .gn-dashboard-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gn-dashboard-sub {
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .gn-create-article-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 24px;
          background-color: var(--accent-color);
          color: white;
          font-weight: 600;
          font-size: 14px;
          transition: background-color 0.15s;
        }

        .gn-create-article-btn:hover {
          background-color: var(--accent-hover);
        }

        .gn-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .gn-stat-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: var(--shadow-subtle);
        }

        .gn-stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gn-stat-icon.blue { background-color: var(--accent-light); color: var(--accent-color); }
        .gn-stat-icon.green { background-color: #e6f4ea; color: #137333; }
        .gn-stat-icon.orange { background-color: #feefc3; color: #b06000; }
        .gn-stat-icon.purple { background-color: #f3e8fd; color: #9334e8; }

        .gn-stat-val {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gn-stat-lbl {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .gn-dashboard-table-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          box-shadow: var(--shadow-subtle);
          overflow: hidden;
        }

        .gn-table-toolbar {
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          gap: 16px;
          flex-wrap: wrap;
        }

        .gn-table-tabs {
          display: flex;
          gap: 8px;
        }

        .gn-table-tab {
          padding: 6px 14px;
          border-radius: 16px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.15s;
        }

        .gn-table-tab.active {
          background-color: var(--accent-light);
          color: var(--accent-color);
          font-weight: 600;
        }

        .gn-dashboard-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--bg-main);
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          width: 260px;
        }

        .gn-dashboard-search input {
          border: none;
          background: transparent;
          font-size: 13px;
          color: var(--text-primary);
          outline: none;
          width: 100%;
        }

        .gn-table-responsive {
          overflow-x: auto;
        }

        .gn-articles-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 14px;
        }

        .gn-articles-table th {
          padding: 12px 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-color);
          background-color: var(--bg-main);
        }

        .gn-articles-table td {
          padding: 14px 20px;
          border-bottom: 1px solid var(--border-subtle);
          color: var(--text-primary);
          vertical-align: middle;
        }

        .gn-table-title-cell {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 320px;
        }

        .gn-table-thumb {
          width: 44px;
          height: 44px;
          border-radius: 6px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .gn-table-title-link {
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gn-table-title-link:hover {
          color: var(--accent-color);
        }

        .gn-table-cat-badge {
          font-size: 12px;
          text-transform: uppercase;
          background-color: var(--bg-hover);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .gn-status-pill {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 12px;
        }

        .gn-status-pill.published { background-color: #e6f4ea; color: #137333; }
        .gn-status-pill.draft { background-color: #feefc3; color: #b06000; }

        .gn-table-flags {
          display: flex;
          gap: 4px;
        }

        .gn-flag-btn {
          padding: 4px;
          border-radius: 4px;
          color: var(--border-color);
        }

        .gn-flag-btn.active.breaking { color: #d93025; }
        .gn-flag-btn.active.featured { color: #1a73e8; }
        .gn-flag-btn.active.editors { color: #fbbc04; }

        .gn-table-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
        }

        .gn-icon-action {
          padding: 6px;
          border-radius: 50%;
          color: var(--text-secondary);
          transition: background-color 0.15s;
        }

        .gn-icon-action:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }

        .gn-icon-action.danger:hover {
          background-color: #fce8e6;
          color: #c5221f;
        }
      `}</style>
    </div>
  );
};
