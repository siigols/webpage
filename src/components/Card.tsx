type CardBaseProps = {
  children: React.ReactNode;
  className?: string;
  /** Enable hover lift effect (default true) */
  hover?: boolean;
};

type CardAsDiv = CardBaseProps &
  Omit<React.ComponentProps<'div'>, keyof CardBaseProps> & {
    href?: undefined;
  };

type CardAsAnchor = CardBaseProps &
  Omit<React.ComponentProps<'a'>, keyof CardBaseProps> & {
    href: string;
  };

export type CardProps = CardAsDiv | CardAsAnchor;

export function Card({
  children,
  className,
  hover = true,
  ...rest
}: CardProps) {
  const classes = [
    'block rounded-lg border border-[var(--border)] bg-transparent p-4 md:p-6 transition-all',
    hover && 'hover:-translate-y-0.5 hover:shadow-[var(--shadow)]',
    'href' in rest && rest.href != null && 'cursor-pointer',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('href' in rest && rest.href != null) {
    const { href, ...anchorRest } = rest as CardAsAnchor;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const divRest = rest as Omit<CardAsDiv, keyof CardBaseProps>;
  return (
    <div className={classes} {...divRest}>
      {children}
    </div>
  );
}
