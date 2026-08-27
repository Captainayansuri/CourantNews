import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const RequireAdmin = () => {
  const { isLoading, isAuthenticated, isStaff, profileError } = useAuth();

  if (isLoading) return <div className="cn-admin-status">Checking your administrator access…</div>;
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  if (!isStaff) {
    return (
      <div className="cn-admin-status cn-admin-denied">
        <ShieldAlert size={36} />
        <h1>Access denied</h1>
        <p>{profileError || 'Your account is not assigned an editor or administrator role.'}</p>
      </div>
    );
  }
  return <Outlet />;
};
