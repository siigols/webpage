import { useTheme } from '../useTheme';
import { useLanguage } from '../useLanguage';
import { t } from '../i18n';
import { Icon } from './Icon';

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolved, setTheme } = useTheme();
  const { language } = useLanguage();
  const tr = t(language);

  const next = resolved === 'light' ? 'dark' : 'light';
  const icon = next === 'dark' ? 'moon-icon' : 'sun-icon';

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
      <Icon name={icon} size={16} />
    </button>
  );
}
