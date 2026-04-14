import { createContext } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  /** The user's chosen preference: light, dark, or system */
  theme: Theme;
  /** The resolved theme actually being displayed */
  resolved: 'light' | 'dark';
  /** Set the theme preference */
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export type Language = 'en' | 'no';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
