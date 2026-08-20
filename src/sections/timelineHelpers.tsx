import type { TimelineLabels } from "../components/TimelineEventCard";
import { TimelineEventCard } from "../components/TimelineEventCard";
import type { TimelineEvent } from "../components";

export const timelineMarker = () => (
  <span
    className="tl-marker flex h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
    aria-hidden="true"
  />
);

export function makeTimelineContent(labels: TimelineLabels) {
  return function timelineContent(item: TimelineEvent) {
    return (
      <div className="flex flex-col gap-2">
        <TimelineEventCard item={item} labels={labels} />
        {item.subItems?.map((sub, i) => (
          <TimelineEventCard
            key={i}
            item={{ ...sub, alignRight: item.alignRight }}
            labels={labels}
          />
        ))}
      </div>
    );
  };
}

/** Structural flex classes needed because PrimeReactProvider unstyled:true strips all built-in CSS. */
export const timelinePt = {
  root: { className: "flex flex-col" },
  event: (options: { context: { index: number } }) => ({
    className: `tl-event flex min-h-[70px] last:min-h-0 ${options.context.index % 2 === 1 ? "flex-row-reverse" : ""}`,
  }),
  opposite: (options: { context: { index: number } }) => ({
    className: `tl-opposite flex-1 px-4 ${options.context.index % 2 === 1 ? "text-left" : "text-right"}`,
  }),
  separator: { className: "flex flex-col items-center flex-none" },
  connector: { className: "grow w-0.5 bg-[var(--accent-border)]" },
  content: (options: { context: { index: number } }) => ({
    className: `tl-content flex-1 pb-6 px-4 ${options.context.index % 2 === 1 ? "text-right" : "text-left"}`,
  }),
};
