import React from 'react';
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { AdminDashboard } from './AdminDashboard';
import { ArticleEditor } from './ArticleEditor';
import { AdminLayout } from './AdminLayout';
import { RequireAdmin } from './RequireAdmin';
import { CategoryManagement } from './CategoryManagement';

const DashboardPage = () => {
  const navigate = useNavigate();
  return <AdminDashboard onCreateArticle={() => navigate('/admin/articles/new')} onEditArticle={(id) => navigate(`/admin/articles/${id}/edit`)} onOpenArticle={(id) => window.open(`/?article=${id}`, '_blank', 'noopener,noreferrer')} />;
};

const EditorPage = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  return <ArticleEditor articleId={articleId} onSaveSuccess={() => navigate('/admin/articles')} onCancel={() => navigate('/admin/articles')} />;
};

export const AdminRoutes = () => (
  <Routes>
    <Route element={<RequireAdmin />}>
      <Route element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="articles" element={<DashboardPage />} />
        <Route path="articles/new" element={<EditorPage />} />
        <Route path="articles/:articleId/edit" element={<EditorPage />} />
        <Route path="categories" element={<CategoryManagement />} />
      </Route>
    </Route>
    <Route path="*" element={<Navigate to="/admin" replace />} />
  </Routes>
);
