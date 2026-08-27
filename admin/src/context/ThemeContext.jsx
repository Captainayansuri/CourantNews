import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'courantnews-theme';

const getStoredTheme = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return ['light', 'dark', 'system'].includes(saved) ? saved : 'system';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStoredTheme);
  const [systemDark, setSystemDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
  const resolvedTheme = theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const update = (event) => setSystemDark(event.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
    document.body.classList.toggle('dark-theme', resolvedTheme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }, [resolvedTheme, theme]);

  const value = useMemo(() => ({ theme, setTheme, resolvedTheme }), [theme, resolvedTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
};
