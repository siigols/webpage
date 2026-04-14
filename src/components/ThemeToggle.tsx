import { useTheme } from '../useTheme';
import { useLanguage } from '../useLanguage';
import type { Theme } from '../contexts';
import { t } from '../i18n';
import { Icon } from './Icon';

const themes: { value: Theme; icon: string }[] = [
  { value: 'light', icon: 'sun-icon' },
  { value: 'system', icon: 'monitor-icon' },
  { value: 'dark', icon: 'moon-icon' },
];

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <div
      role="radiogroup"
      aria-label={tr.theme.label}
      className={`inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-0.5 ${className ?? ''}`}
    >
      {themes.map(({ value, icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            aria-label={tr.theme[value]}
            title={tr.theme[value]}
            onClick={() => setTheme(value)}
            className={[
              'flex cursor-pointer items-center justify-center rounded-md p-1.5 transition-all',
              active
                ? 'bg-[var(--bg)] text-[var(--accent)] shadow-sm'
                : 'text-[var(--text)] hover:text-[var(--text-h)]',
            ].join(' ')}
          >
            <Icon name={icon} size={16} />
          </button>
        );
      })}
    </div>
  );
}
