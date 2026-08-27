import React, { useEffect, useState } from 'react';
import { Edit, Plus, Save, Trash2, X } from 'lucide-react';
import { newsService } from '../../services/newsService';
import { useAuth } from '../../context/AuthContext';

const emptyCategory = { name: '', slug: '', icon: 'Home' };

export const CategoryManagement = () => {
  const { profile } = useAuth();
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(emptyCategory);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const refreshCategories = async () => {
    setIsLoading(true);
    try {
      setCategories(await newsService.getCategories());
      setError('');
    } catch (loadError) {
      setError('Unable to load categories.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { refreshCategories(); }, []);

  const resetForm = () => {
    setForm(emptyCategory);
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingId) {
        await newsService.updateCategory(editingId, form);
      } else {
        await newsService.createCategory(form);
      }
      resetForm();
      await refreshCategories();
    } catch (saveError) {
      setError(saveError.message || 'Unable to save category. Slugs must be unique and use lowercase letters, numbers, and hyphens.');
    }
  };

  const handleDelete = async (category) => {
    if (!confirm(`Delete category "${category.name}"?`)) return;
    try {
      await newsService.deleteCategory(category.id);
      if (editingId === category.id) resetForm();
      await refreshCategories();
    } catch (deleteError) {
      setError('Unable to delete this category. Categories referenced by articles cannot be deleted.');
    }
  };

  if (profile?.role !== 'admin') {
    return <div className="cn-admin-status cn-admin-denied"><h1>Access denied</h1><p>Only administrators can manage categories.</p></div>;
  }

  return (
    <div className="cn-category-page animate-fade-in">
      <div className="cn-category-header">
        <div>
          <h1>Category Management</h1>
          <p>Create and maintain the topics available across CourantNews.</p>
        </div>
      </div>

      {error && <div className="gn-login-error">{error}</div>}

      <form className="cn-category-form" onSubmit={handleSubmit}>
        <h2>{editingId ? 'Edit category' : 'New category'}</h2>
        <label>Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
        <label>Slug<input required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" value={form.slug} onChange={(event) => setForm({ ...form, slug: event.target.value })} /></label>
        <label>Icon name<input value={form.icon} onChange={(event) => setForm({ ...form, icon: event.target.value })} /></label>
        <div className="cn-category-form-actions">
          <button className="gn-btn-primary" type="submit"><Save size={16} /> {editingId ? 'Save changes' : 'Add category'}</button>
          {editingId && <button className="gn-btn-secondary" type="button" onClick={resetForm}><X size={16} /> Cancel</button>}
        </div>
      </form>

      <div className="cn-category-list">
        <div className="cn-category-list-header"><h2>Categories</h2><span>{categories.length} total</span></div>
        {isLoading ? <p>Loading categories...</p> : categories.map((category) => (
          <div className="cn-category-row" key={category.id}>
            <div><strong>{category.name}</strong><span>/{category.slug} · {category.icon}</span></div>
            <div className="cn-category-actions">
              <button className="gn-icon-action" title="Edit category" onClick={() => { setEditingId(category.id); setForm({ name: category.name, slug: category.slug, icon: category.icon }); }}><Edit size={16} /></button>
              <button className="gn-icon-action danger" title="Delete category" onClick={() => handleDelete(category)}><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .cn-category-page { max-width: 900px; margin: 0 auto; }
        .cn-category-header { margin-bottom: 24px; }
        .cn-category-header h1 { color: var(--text-primary); font-size: 28px; }
        .cn-category-header p { color: var(--text-secondary); margin-top: 4px; }
        .cn-category-form, .cn-category-list { background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--card-radius); padding: 20px; box-shadow: var(--shadow-subtle); margin-bottom: 20px; }
        .cn-category-form { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; align-items: end; }
        .cn-category-form h2 { grid-column: 1 / -1; color: var(--text-primary); font-size: 18px; }
        .cn-category-form label { display: grid; gap: 6px; color: var(--text-secondary); font-size: 13px; font-weight: 600; }
        .cn-category-form input { padding: 9px 10px; border: 1px solid var(--border-color); border-radius: 8px; }
        .cn-category-form-actions { display: flex; gap: 8px; grid-column: 1 / -1; }
        .cn-category-list-header, .cn-category-row { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
        .cn-category-list-header { border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 4px; }
        .cn-category-list h2 { color: var(--text-primary); font-size: 18px; }
        .cn-category-list-header span, .cn-category-row span { color: var(--text-secondary); font-size: 13px; }
        .cn-category-row { padding: 13px 0; border-bottom: 1px solid var(--border-subtle); }
        .cn-category-row:last-child { border-bottom: 0; }
        .cn-category-row > div:first-child { display: grid; gap: 2px; }
        .cn-category-row strong { color: var(--text-primary); }
        .cn-category-actions { display: flex; gap: 6px; }
        @media (max-width: 700px) { .cn-category-form { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
};