export interface BadgeProps extends React.ComponentProps<'span'> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-[var(--code-bg)] text-[var(--text-h)]',
  accent: 'bg-[var(--accent-bg)] text-[var(--accent)]',
  outline: 'bg-transparent border border-[var(--border)] text-[var(--text)]',
};

export function Badge({
  children,
  variant = 'default',
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-all duration-200 hover:scale-105 ${variantClasses[variant]} ${className ?? ''}`}
      {...rest}
    >
      {children}
    </span>
  );
}
