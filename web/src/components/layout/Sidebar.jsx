import React from 'react';
import {
  Home, Globe, Flag, Briefcase, Cpu, Film, Trophy, Atom, HeartPulse, MessageSquare,
  Settings, Info, Mail
} from 'lucide-react';

const ICON_MAP = {
  Home, Globe, Flag, Briefcase, Cpu, Film, Trophy, Atom, HeartPulse, MessageSquare
};

export const Sidebar = ({
  categories,
  activeCategory,
  onSelectCategory,
  isOpen,
  onClose,
  currentView,
  setCurrentView
}) => {
  const renderIcon = (iconName) => {
    const IconComp = ICON_MAP[iconName] || Home;
    return <IconComp size={18} />;
  };

  return (
    <>
      {/* Backdrop for mobile drawer */}
      {isOpen && (
        <div className="gn-sidebar-overlay" onClick={onClose} />
      )}

      <aside className={`gn-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="gn-sidebar-inner">
          
          {/* Main Navigation */}
          <div className="gn-nav-section">
            <div className="gn-section-label">Feeds & Topics</div>
            
            {categories.map((cat) => {
              const isActive = activeCategory === cat.slug && currentView === 'home';
              return (
                <button
                  key={cat.id}
                  className={`gn-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    onSelectCategory(cat.slug);
                    setCurrentView('home');
                    if (window.innerWidth <= 768) onClose();
                  }}
                >
                  <span className="gn-nav-icon">{renderIcon(cat.icon)}</span>
                  <span className="gn-nav-text">{cat.name}</span>
                </button>
              );
            })}
          </div>

          <hr className="gn-sidebar-divider" />

          {/* Bottom Utility Links */}
          <div className="gn-nav-section gn-utility-section">
            <div className="gn-section-label">Journal & Meta</div>
            
            <button
              className="gn-nav-item"
              onClick={() => {
                alert('CourantNews - Google News UI Replica v1.0\nAll content published by the CourantNews editorial desk.');
              }}
            >
              <span className="gn-nav-icon"><Info size={18} /></span>
              <span className="gn-nav-text">About</span>
            </button>

            <button
              className="gn-nav-item"
              onClick={() => {
                alert('Editorial Desk Contact:\neditor@chroniclenews.org');
              }}
            >
              <span className="gn-nav-icon"><Mail size={18} /></span>
              <span className="gn-nav-text">Contact</span>
            </button>

            <div className="gn-footer-terms">
              <span>Settings</span> · <span>Privacy</span> · <span>Terms</span>
              <div className="gn-copyright">© 2026 CourantNews</div>
            </div>
          </div>

        </div>
      </aside>

      <style>{`
        .gn-sidebar-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 990;
        }

        .gn-sidebar {
          width: var(--sidebar-width);
          position: fixed;
          top: var(--header-height);
          bottom: 0;
          left: 0;
          background-color: var(--bg-surface);
          border-right: 1px solid var(--border-color);
          overflow-y: auto;
          z-index: 995;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gn-sidebar-inner {
          padding: 12px 8px 24px 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .gn-nav-section {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gn-section-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--text-muted);
          padding: 8px 16px 4px 16px;
        }

        .gn-nav-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 10px 16px;
          border-radius: 20px;
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.15s, color 0.15s;
          width: 100%;
          text-align: left;
        }

        .gn-nav-item:hover {
          background-color: var(--bg-hover);
        }

        .gn-nav-item.active {
          background-color: var(--accent-light);
          color: var(--accent-color);
          font-weight: 600;
        }

        .gn-nav-icon {
          display: flex;
          align-items: center;
          color: inherit;
        }

        .gn-sidebar-divider {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 8px 0;
        }

        .gn-footer-terms {
          padding: 12px 16px;
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .gn-footer-terms span {
          cursor: pointer;
        }

        .gn-footer-terms span:hover {
          text-decoration: underline;
        }

        .gn-copyright {
          margin-top: 6px;
          font-size: 11px;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .gn-sidebar {
            transform: translateX(-100%);
          }
          .gn-sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
