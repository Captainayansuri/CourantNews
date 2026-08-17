import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FileText, LogOut, Newspaper, Plus, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminLayout = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="cn-admin-shell">
      <aside className="cn-admin-sidebar">
        <a className="cn-admin-brand" href="/">CourantNews</a>
        <div className="cn-admin-label"><ShieldCheck size={15} /> Editorial administration</div>
        <nav className="cn-admin-nav">
          <NavLink end to="/admin" className="cn-admin-nav-link"><Newspaper size={17} /> Dashboard</NavLink>
          <NavLink to="/admin/articles" className="cn-admin-nav-link"><FileText size={17} /> Articles</NavLink>
          <NavLink to="/admin/articles/new" className="cn-admin-nav-link"><Plus size={17} /> New article</NavLink>
        </nav>
        <div className="cn-admin-user">
          <strong>{profile?.email}</strong>
          <span>{profile?.role}</span>
          <button onClick={handleLogout}><LogOut size={16} /> Sign out</button>
        </div>
      </aside>
      <main className="cn-admin-content"><Outlet /></main>
      <style>{`
        .cn-admin-shell { min-height: 100vh; display: grid; grid-template-columns: 250px minmax(0, 1fr); background: var(--bg-main); }
        .cn-admin-sidebar { position: sticky; top: 0; height: 100vh; padding: 28px 16px; background: var(--bg-surface); border-right: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 24px; }
        .cn-admin-brand { color: var(--text-primary); font-size: 22px; font-weight: 800; text-decoration: none; padding: 0 10px; }
        .cn-admin-label { display: flex; gap: 8px; align-items: center; padding: 0 10px; color: var(--text-secondary); font-size: 12px; text-transform: uppercase; letter-spacing: .05em; }
        .cn-admin-nav { display: grid; gap: 6px; }
        .cn-admin-nav-link { display: flex; gap: 10px; align-items: center; padding: 10px 12px; border-radius: 10px; color: var(--text-secondary); text-decoration: none; font-weight: 600; }
        .cn-admin-nav-link.active, .cn-admin-nav-link:hover { background: var(--accent-light); color: var(--accent-color); }
        .cn-admin-user { margin-top: auto; display: grid; gap: 5px; padding: 12px; background: var(--bg-hover); border-radius: 12px; font-size: 12px; color: var(--text-secondary); overflow-wrap: anywhere; }
        .cn-admin-user strong { color: var(--text-primary); }
        .cn-admin-user span { text-transform: capitalize; }
        .cn-admin-user button { display: flex; align-items: center; gap: 8px; margin-top: 6px; color: #c5221f; font-weight: 700; font-size: 13px; }
        .cn-admin-content { padding: 44px; min-width: 0; }
        @media (max-width: 760px) { .cn-admin-shell { grid-template-columns: 1fr; } .cn-admin-sidebar { position: static; height: auto; gap: 16px; } .cn-admin-nav { grid-template-columns: repeat(3, minmax(0, 1fr)); } .cn-admin-nav-link { justify-content: center; font-size: 0; } .cn-admin-nav-link svg { width: 19px; height: 19px; } .cn-admin-user { margin-top: 0; } .cn-admin-content { padding: 24px 16px; } }
      `}</style>
    </div>
  );
};
