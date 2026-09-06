import React from 'react';
import { Link } from 'react-router-dom';

export const PublicFooter = () => (
  <footer className="gn-public-footer">
    <div className="gn-public-footer-inner">
      <span className="gn-public-footer-brand">CourantNews</span>
      <nav className="gn-public-footer-links" aria-label="Footer navigation">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <span className="gn-public-footer-copyright">© 2026 CourantNews</span>
    </div>
    <style>{`
      .gn-public-footer {
        margin-left: var(--sidebar-width);
        border-top: 1px solid var(--border-color);
        background: var(--bg-surface);
      }

      .gn-public-footer-inner {
        max-width: 1120px;
        margin: 0 auto;
        padding: 22px 24px;
        display: flex;
        align-items: center;
        gap: 20px;
        color: var(--text-secondary);
        font-size: 13px;
      }

      .gn-public-footer-brand {
        color: var(--text-primary);
        font-weight: 800;
      }

      .gn-public-footer-links {
        display: flex;
        gap: 18px;
        margin-right: auto;
      }

      .gn-public-footer-links a:hover {
        color: var(--accent-color);
      }

      @media (max-width: 768px) {
        .gn-public-footer {
          margin-left: 0;
        }

        .gn-public-footer-inner {
          padding: 20px 12px;
          flex-wrap: wrap;
        }

        .gn-public-footer-links {
          margin-right: 0;
        }

        .gn-public-footer-copyright {
          width: 100%;
        }
      }
    `}</style>
  </footer>
);