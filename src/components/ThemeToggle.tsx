import { useTheme } from '../useTheme';
import { useLanguage } from '../useLanguage';
import type { Theme } from '../contexts';
import { t } from '../i18n';
import { Icon } from './Icon';

const themeOptions: { value: Theme; icon: string }[] = [
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

  // Only show buttons for themes that are NOT currently active
  const available = themeOptions.filter((opt) => opt.value !== theme);

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-0.5 ${className ?? ''}`}
    >
      {available.map(({ value, icon }) => (
        <button
          key={value}
          type="button"
          aria-label={tr.theme[value]}
          title={tr.theme[value]}
          onClick={() => setTheme(value)}
          className="flex cursor-pointer items-center justify-center rounded-md p-1.5 text-[var(--text)] transition-all hover:text-[var(--text-h)] hover:bg-[var(--social-bg)]"
        >
          <Icon name={icon} size={16} />
        </button>
      ))}
    </div>
  );
}
