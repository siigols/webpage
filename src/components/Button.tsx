type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ComponentProps<'button'>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.ComponentProps<'a'>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<NonNullable<ButtonBaseProps['variant']>, string> = {
  primary:
    'bg-[var(--accent)] text-white hover:brightness-90 active:brightness-80',
  secondary:
    'border border-[var(--accent-border)] text-[var(--accent)] hover:bg-[var(--accent-bg)]',
  ghost:
    'text-[var(--accent)] hover:bg-[var(--accent-bg)]',
};

const sizeClasses: Record<NonNullable<ButtonBaseProps['size']>, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
    'cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('href' in rest && rest.href != null) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof ButtonBaseProps>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
