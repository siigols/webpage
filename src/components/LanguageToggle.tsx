import { useLanguage } from '../useLanguage';
import { t } from '../i18n';

export interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const tr = t(language);

  // Show the opposite language as the clickable option
  const targetLang = language === 'no' ? 'en' : 'no';
  const targetLabel = targetLang === 'en' ? 'EN' : 'NO';

  return (
    <button
      type="button"
      aria-label={tr.language[targetLang]}
      title={tr.language[targetLang]}
      onClick={() => setLanguage(targetLang)}
      className={`flex cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--code-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--text)] transition-all hover:text-[var(--text-h)] hover:bg-[var(--social-bg)] ${className ?? ''}`}
    >
      {targetLabel}
    </button>
  );
}
