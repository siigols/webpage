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
      className={`relative border-l-2 border-[var(--accent-border)] pl-6 md:pl-8 ${className ?? ''}`}
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
      {/* Dot on the timeline */}
      <span
        className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-[var(--accent)] md:-left-[37px]"
        aria-hidden="true"
      />

      <p className="mb-1 text-xs text-[var(--text)]">{date}</p>
      <p className="font-[var(--heading)] font-bold text-[var(--text-h)]">
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
