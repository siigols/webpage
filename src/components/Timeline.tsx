import { Timeline as PrimeTimeline } from 'primereact/timeline';

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
}

export interface TimelineProps {
  /** Array of timeline events to display. */
  events: TimelineEvent[];
  /** Additional CSS class names for the root element. */
  className?: string;
}

export function Timeline({ events, className }: TimelineProps) {
  return (
    <PrimeTimeline
      value={events}
      align="left"
      layout="vertical"
      content={(item: TimelineEvent) => (
        <div>
          <p className="mb-1 text-xs font-medium text-[var(--text)]">{item.date}</p>
          <p className="font-[var(--heading)] font-semibold text-[var(--text-h)]">{item.title}</p>
          {item.subtitle && <p className="text-sm text-[var(--accent)]">{item.subtitle}</p>}
          {item.description && <div className="mt-2 text-sm text-[var(--text)]">{item.description}</div>}
        </div>
      )}
      marker={() => (
        <span className="flex h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" aria-hidden="true" />
      )}
      pt={{
        root: { className: `relative ml-1 ${className ?? ''}` },
        connector: { className: 'grow border-l-2 border-[var(--accent-border)]' },
        content: { className: 'pb-8 pl-4 md:pl-6 text-left' },
        opposite: { className: 'hidden' },
      }}
    />
  );
}
