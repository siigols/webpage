import { useLanguage } from '../useLanguage';
import type { Language } from '../contexts';
import { t } from '../i18n';

const languages: { value: Language; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'no', label: 'NO' },
];

export interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const tr = t(language);

  return (
    <div
      role="radiogroup"
      aria-label={tr.language.label}
      className={`inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-0.5 ${className ?? ''}`}
    >
      {languages.map(({ value, label }) => {
        const active = language === value;
        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            aria-label={tr.language[value]}
            title={tr.language[value]}
            onClick={() => setLanguage(value)}
            className={[
              'flex cursor-pointer items-center justify-center rounded-md px-2.5 py-1 text-xs font-semibold transition-all',
              active
                ? 'bg-[var(--bg)] text-[var(--accent)] shadow-sm'
                : 'text-[var(--text)] hover:text-[var(--text-h)]',
            ].join(' ')}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
