import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Header = ({
  onToggleSidebar,
  currentCategory,
  onSelectCategory,
  onOpenArticle,
  onSearchSubmit,
  getAutocompleteSuggestions,
}) => {
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Handle autocomplete search
  useEffect(() => {
    let active = true;
    const loadSuggestions = async () => {
      if (searchQuery.trim().length < 2) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }
      try {
        const matches = await getAutocompleteSuggestions(searchQuery);
        if (active) {
          setSuggestions(matches);
          setShowSuggestions(matches.length > 0);
        }
      } catch (error) {
        if (active) setShowSuggestions(false);
      }
    };
    loadSuggestions();
    return () => { active = false; };
  }, [searchQuery, getAutocompleteSuggestions]);

  // Click outside search container
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchFocus = () => {
    setIsSearchExpanded(true);
    if (searchQuery.trim().length >= 2) {
      setShowSuggestions(true);
    }
  };

  const handleSearchSubmitForm = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery.trim());
      setShowSuggestions(false);
      setIsSearchExpanded(false);
    }
  };

  const handleSelectSuggestion = (sug) => {
    if (sug.type === 'article') {
      onOpenArticle(sug.id);
    } else if (sug.type === 'category') {
      onSelectCategory(sug.slug);
    }
    setShowSuggestions(false);
    setIsSearchExpanded(false);
  };

  const cycleMobileTheme = () => {
    setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light');
  };

  const MobileThemeIcon = theme === 'dark' ? Moon : theme === 'system' ? Monitor : Sun;

  return (
    <header className="gn-header">
      <div className="gn-header-content">
        
        {/* Left section: navigation menu and CourantNews wordmark */}
        <div className="gn-header-left">
          <button
            className="gn-icon-btn hamburger-btn"
            onClick={onToggleSidebar}
            title="Toggle Navigation Menu"
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={22} />
          </button>

          {/* Logo / Wordmark */}
          <div
            className="gn-logo"
            onClick={() => {
              onSelectCategory('home');
            }}
            role="button"
            tabIndex={0}
          >
            <span className="gn-logo-brand">CourantNews</span>
          </div>
        </div>

        {/* Center/Right: Expandable Search Bar */}
        <div
          ref={searchContainerRef}
          className={`gn-search-container ${isSearchExpanded ? 'expanded' : ''}`}
        >
          <form className="gn-search-form" onSubmit={handleSearchSubmitForm}>
            <button type="submit" className="gn-search-icon-btn">
              <Search size={18} />
            </button>
            <input
              ref={searchInputRef}
              type="text"
              className="gn-search-input"
              placeholder="Search for topics, locations & sources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleSearchFocus}
            />
            {searchQuery && (
              <button
                type="button"
                className="gn-search-clear-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSuggestions([]);
                }}
              >
                <X size={16} />
              </button>
            )}
          </form>

          {/* Autocomplete Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="gn-autocomplete-dropdown animate-fade-in">
              {suggestions.map((sug, idx) => (
                <div
                  key={idx}
                  className="gn-autocomplete-item"
                  onClick={() => handleSelectSuggestion(sug)}
                >
                  <Search size={14} className="sug-icon" />
                  <span className="sug-text">{sug.text}</span>
                  <span className="sug-type">{sug.type}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="gn-theme-switcher" aria-label="Color theme">
          <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')} title="Light theme" aria-label="Light theme"><Sun size={16} /></button>
          <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')} title="Dark theme" aria-label="Dark theme"><Moon size={16} /></button>
          <button className={theme === 'system' ? 'active' : ''} onClick={() => setTheme('system')} title="Use system theme" aria-label="Use system theme"><Monitor size={16} /></button>
        </div>
        <button className="gn-mobile-theme-toggle" onClick={cycleMobileTheme} title={`Theme: ${theme}. Tap to change`} aria-label={`Theme: ${theme}. Tap to change`}>
          <MobileThemeIcon size={19} />
        </button>

      </div>

      <style>{`
        .gn-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .gn-header-content {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 20px;
        }

        .gn-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 210px;
        }

        .gn-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: var(--text-secondary);
          transition: background-color 0.15s;
        }

        .gn-icon-btn:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }

        .gn-user-menu-wrapper {
          position: relative;
        }

        .gn-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 220px;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: var(--shadow-modal);
          padding: 8px 0;
          z-index: 1100;
        }

        .gn-dropdown-header {
          padding: 8px 16px;
        }

        .gn-dropdown-sub {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .gn-dropdown-divider {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 6px 0;
        }

        .gn-dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          font-size: 14px;
          color: var(--text-primary);
          transition: background-color 0.15s;
        }

        .gn-dropdown-item:hover {
          background-color: var(--bg-hover);
        }

        .gn-dropdown-item.text-danger {
          color: #d93025;
        }

        .gn-logo {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          user-select: none;
        }

        .gn-logo-brand {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--brand-blue);
        }

        .gn-logo-sub {
          font-size: 20px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .gn-search-container {
          position: relative;
          flex: 1 1 760px;
          max-width: 860px;
          min-width: 420px;
          transition: all 0.2s ease;
        }
        .gn-theme-switcher { display: flex; padding: 3px; gap: 2px; background: var(--bg-main); border: 1px solid var(--border-color); border-radius: 10px; }
        .gn-theme-switcher button { width: 30px; height: 30px; color: var(--text-muted); border-radius: 7px; display: grid; place-items: center; }
        .gn-theme-switcher button:hover { color: var(--accent-color); background: var(--accent-light); }
        .gn-theme-switcher button.active { background: var(--brand-blue); color: #fff; box-shadow: 0 1px 3px rgba(11,42,111,.25); }
        .gn-mobile-theme-toggle { display: none; }

        .gn-search-form {
          display: flex;
          align-items: center;
          background-color: var(--bg-main);
          border-radius: 28px;
          padding: 0 20px;
          height: 52px;
          border: 1px solid transparent;
          transition: background-color 0.2s, box-shadow 0.2s, border-color 0.2s;
        }

        .gn-search-container.expanded .gn-search-form,
        .gn-search-form:focus-within {
          background-color: var(--bg-surface);
          border-color: var(--border-color);
          box-shadow: var(--shadow-subtle);
        }

        .gn-search-icon-btn {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          margin-right: 8px;
        }

        .gn-search-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 16px;
          color: var(--text-primary);
          outline: none;
          padding: 10px 0;
        }

        .gn-search-clear-btn {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          padding: 4px;
        }

        .gn-autocomplete-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background-color: var(--bg-surface);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-modal);
          overflow: hidden;
          z-index: 1050;
        }

        .gn-autocomplete-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .gn-autocomplete-item:hover {
          background-color: var(--bg-hover);
        }

        .sug-icon {
          color: var(--text-muted);
        }

        .sug-text {
          flex: 1;
          font-size: 14px;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sug-type {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background-color: var(--bg-hover);
          color: var(--text-secondary);
          padding: 2px 6px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .gn-header { height: var(--header-height); align-items: stretch; }
          .gn-logo-sub {
            display: none;
          }
          .gn-header-content { padding: 8px 12px 10px; gap: 8px; flex-wrap: wrap; align-content: start; }
          .gn-header-left { min-width: 0; gap: 6px; flex: 1; }
          .gn-logo-brand { font-size: 19px; }
          .gn-search-container { order: 3; width: 100%; min-width: 0; flex: 0 0 100%; max-width: none; }
          .gn-search-form { height: 46px; padding: 0 14px; border-color: var(--border-color); border-radius: 10px; }
          .gn-search-input { font-size: 13px; }
          .gn-theme-switcher { display: none; }
          .gn-mobile-theme-toggle { width: 42px; height: 42px; flex: 0 0 42px; display: grid; place-items: center; border: 1px solid var(--border-color); border-radius: 11px; color: var(--brand-blue); background: var(--accent-light); }
          .gn-mobile-theme-toggle:hover { background: var(--brand-blue); color: #fff; }
        }
        @media (max-width: 480px) {
          .gn-header-content { padding-left: 8px; padding-right: 8px; }
          .gn-logo-brand { font-size: 18px; letter-spacing: -.7px; }
          .gn-icon-btn { width: 38px; height: 42px; }
        }
        @media (max-width: 350px) {
          .gn-logo-brand { font-size: 16px; }
          .gn-mobile-theme-toggle { width: 40px; flex-basis: 40px; }
        }
      `}</style>
    </header>
  );
};
