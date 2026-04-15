import { useTheme } from '../useTheme';
import { useLanguage } from '../useLanguage';
import type { Theme } from '../contexts';
import { t } from '../i18n';
import { Icon } from './Icon';

const nextThemeMap: Record<Theme, Theme> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
};

const themeIcon: Record<Theme, string> = {
  light: 'sun-icon',
  system: 'monitor-icon',
  dark: 'moon-icon',
};

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();
  const tr = t(language);

  const next = nextThemeMap[theme];

  return (
    <button
      type="button"
      aria-label={tr.theme[next]}
      title={tr.theme[next]}
      onClick={() => setTheme(next)}
      className={[
        'flex cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-1.5 transition-all',
        'text-[var(--text)] hover:text-[var(--text-h)]',
        className ?? '',
      ].join(' ')}
    >
      <Icon name={themeIcon[next]} size={16} />
    </button>
  );
}
