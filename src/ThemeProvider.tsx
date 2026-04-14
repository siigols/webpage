import { useEffect, useState, useCallback } from 'react';
import { ThemeContext, type Theme } from './contexts';

export type { Theme } from './contexts';

const STORAGE_KEY = 'theme';

function getSystemDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getStoredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
}

function applyTheme(theme: Theme, systemDark: boolean) {
  const root = document.documentElement;

  if (theme === 'system') {
    root.removeAttribute('data-theme');
    root.setAttribute('data-system-dark', String(systemDark));
  } else {
    root.setAttribute('data-theme', theme);
    root.removeAttribute('data-system-dark');
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);
  const [systemDark, setSystemDark] = useState(getSystemDark);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  }, []);

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Apply theme to DOM whenever it changes
  useEffect(() => {
    applyTheme(theme, systemDark);
  }, [theme, systemDark]);

  const resolved: 'light' | 'dark' =
    theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;

  return (
    <ThemeContext value={{ theme, resolved, setTheme }}>
      {children}
    </ThemeContext>
  );
}
