import { Link } from "react-router-dom";
import type { TimelineEvent } from "../components";
import { Button, Card } from "../components";

export const timelineMarker = () => (
  <span
    className="flex h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
    aria-hidden="true"
  />
);

export const timelineContent = (item: TimelineEvent) => (
  <div className="flex flex-col gap-2">
    <Card hover={false}>
      <p className="mb-1 text-xs font-medium text-[var(--text)]">{item.date}</p>
      <div
        className={`flex items-center justify-between gap-2 ${item.alignRight ? "flex-row-reverse" : ""}`}
      >
        <p className="font-[var(--heading)] font-semibold text-[var(--text-h)]">
          {item.title}
        </p>
        {item.seeMoreHref && (
          <Link to={item.seeMoreHref}>
            <Button variant="ghost" size="sm">
              {item.seeMoreLabel ?? "See more"}
            </Button>
          </Link>
        )}
      </div>
      {item.subtitle && (
        <p className="text-sm text-[var(--accent)]">{item.subtitle}</p>
      )}
      {item.description && (
        <div className="mt-2 text-sm text-[var(--text)]">
          {item.description}
        </div>
      )}
    </Card>
    {item.subItems?.map((sub, i) => (
      <Card key={i} hover={false}>
        <p className="mb-1 text-xs font-medium text-[var(--text)]">
          {sub.date}
        </p>
        <p className="font-[var(--heading)] font-semibold text-[var(--text-h)]">
          {sub.title}
        </p>
        {sub.subtitle && (
          <p className="text-sm text-[var(--accent)]">{sub.subtitle}</p>
        )}
        {sub.description && (
          <div className="mt-2 text-sm text-[var(--text)]">
            {sub.description}
          </div>
        )}
      </Card>
    ))}
  </div>
);

/** Structural flex classes needed because PrimeReactProvider unstyled:true strips all built-in CSS. */
export const timelinePt = {
  root: { className: "flex flex-col" },
  event: (options: { context: { index: number } }) => ({
    className: `flex min-h-[70px] last:min-h-0 ${options.context.index % 2 === 1 ? "flex-row-reverse" : ""}`,
  }),
  opposite: (options: { context: { index: number } }) => ({
    className: `flex-1 px-4 ${options.context.index % 2 === 1 ? "text-left" : "text-right"}`,
  }),
  separator: { className: "flex flex-col items-center flex-none" },
  connector: { className: "grow w-0.5 bg-[var(--accent-border)]" },
  content: (options: { context: { index: number } }) => ({
    className: `flex-1 pb-6 px-4 ${options.context.index % 2 === 1 ? "text-right" : "text-left"}`,
  }),
};
