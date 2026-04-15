import { useLanguage } from '../useLanguage';
import { t } from '../i18n';

export interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const tr = t(language);

  const nextLanguage = language === 'no' ? 'en' : 'no';
  const nextLabel = nextLanguage.toUpperCase();

  return (
    <button
      type="button"
      aria-label={tr.language[nextLanguage]}
      title={tr.language[nextLanguage]}
      onClick={() => setLanguage(nextLanguage)}
      className={[
        'flex cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--code-bg)] px-2.5 py-1 text-xs font-semibold transition-all',
        'text-[var(--text)] hover:text-[var(--text-h)]',
        className ?? '',
      ].join(' ')}
    >
      {nextLabel}
    </button>
  );
}
