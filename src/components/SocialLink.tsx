import { Icon } from './Icon';

export interface SocialLinkProps extends Omit<React.ComponentProps<'a'>, 'children'> {
  href: string;
  /** Icon name for the Icon component (e.g. "github-icon") */
  icon: string;
  /** Accessible label and visible text */
  label: string;
}

export function SocialLink({
  href,
  icon,
  label,
  className,
  ...rest
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-lg bg-[var(--social-bg)] px-3 py-2 text-[var(--text-h)] no-underline transition-all hover:shadow-[var(--shadow)] ${className ?? ''}`}
      {...rest}
    >
      <Icon name={icon} size={18} />
      <span>{label}</span>
    </a>
  );
}
