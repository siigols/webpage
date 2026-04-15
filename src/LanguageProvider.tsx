import { useEffect, useState, useCallback } from 'react';
import { LanguageContext, type Language } from './contexts';

export type { Language } from './contexts';

const STORAGE_KEY = 'language';

function getStoredLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'no') {
    return stored;
  }
  // Default based on browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('nb') || browserLang.startsWith('nn') || browserLang.startsWith('no')) {
    return 'no';
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  // Set the lang attribute on the document element
  useEffect(() => {
    document.documentElement.lang = language === 'no' ? 'nb' : 'en';
  }, [language]);

  return (
    <LanguageContext value={{ language, setLanguage }}>
      {children}
    </LanguageContext>
  );
}
