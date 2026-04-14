export interface TimelineProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export interface TimelineItemProps extends React.ComponentProps<'div'> {
  /** Date range, e.g. "2022 – Present" */
  date: string;
  title: string;
  /** Secondary line, e.g. company name or school */
  subtitle?: string;
  children?: React.ReactNode;
}

export function Timeline({ children, className, ...rest }: TimelineProps) {
  return (
    <div
      className={`relative ml-1 border-l-2 border-[var(--accent-border)] pl-6 md:pl-8 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function TimelineItem({
  date,
  title,
  subtitle,
  children,
  className,
  ...rest
}: TimelineItemProps) {
  return (
    <div
      className={`relative pb-8 last:pb-0 ${className ?? ''}`}
      {...rest}
    >
      {/* Dot centered on the timeline border */}
      <span
        className="absolute -left-[27px] top-[5px] h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] md:-left-[35px]"
        aria-hidden="true"
      />

      <p className="mb-1 text-xs font-medium text-[var(--text)]">{date}</p>
      <p className="font-[var(--heading)] font-semibold text-[var(--text-h)]">
        {title}
      </p>
      {subtitle && (
        <p className="text-sm text-[var(--accent)]">{subtitle}</p>
      )}
      {children && (
        <div className="mt-2 text-sm text-[var(--text)]">{children}</div>
      )}
    </div>
  );
}
