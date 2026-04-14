export interface HeaderProps extends React.ComponentProps<'header'> {
  name: string;
  /** Role or title, e.g. "Software Engineer" */
  title: string;
  /** Avatar image URL */
  avatar?: string;
  children?: React.ReactNode;
}

/**
 * Extract up to two initials from a full name.
 * "Sigurd Olsen" → "SO", "Sigurd" → "S"
 */
function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

export function Header({
  name,
  title,
  avatar,
  children,
  className,
  ...rest
}: HeaderProps) {
  return (
    <header
      className={`flex flex-col items-center px-6 py-12 text-center ${className ?? ''}`}
      {...rest}
    >
      {/* Avatar */}
      <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--border)] bg-[var(--code-bg)]">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-2xl font-semibold text-[var(--text-h)]">
            {getInitials(name)}
          </span>
        )}
      </div>

      {/* Name */}
      <h1 className="font-[var(--heading)] text-3xl font-medium text-[var(--text-h)]">
        {name}
      </h1>

      {/* Title / role */}
      <p className="text-[var(--text)]">{title}</p>

      {/* Slot for social links or extra content */}
      {children && <div className="mt-4 flex flex-wrap justify-center gap-2">{children}</div>}
    </header>
  );
}
