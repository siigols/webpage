import type { TimelineEvent } from "../components";
import { Card } from "../components";

export const timelineMarker = () => (
  <span
    className="flex h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
    aria-hidden="true"
  />
);

export const timelineContent = (item: TimelineEvent) => (
  <Card hover={false}>
    <p className="mb-1 text-xs font-medium text-[var(--text)]">{item.date}</p>
    <p className="font-[var(--heading)] font-semibold text-[var(--text-h)]">
      {item.title}
    </p>
    {item.subtitle && (
      <p className="text-sm text-[var(--accent)]">{item.subtitle}</p>
    )}
    {item.description && (
      <div className="mt-2 text-sm text-[var(--text)]">{item.description}</div>
    )}
  </Card>
);

/** Structural flex classes needed because PrimeReactProvider unstyled:true strips all built-in CSS. */
export const timelinePt = {
  root: { className: 'flex flex-col' },
  event: (options: { context: { index: number } }) => ({
    className: `flex min-h-[70px] last:min-h-0 ${options.context.index % 2 === 1 ? 'flex-row-reverse' : ''}`,
  }),
  opposite: (options: { context: { index: number } }) => ({
    className: `flex-1 px-4 ${options.context.index % 2 === 1 ? 'text-left' : 'text-right'}`,
  }),
  separator: { className: 'flex flex-col items-center flex-none' },
  connector: { className: 'grow w-0.5 bg-[var(--accent-border)]' },
  content: (options: { context: { index: number } }) => ({
    className: `flex-1 pb-6 px-4 ${options.context.index % 2 === 1 ? 'text-right' : 'text-left'}`,
  }),
};
