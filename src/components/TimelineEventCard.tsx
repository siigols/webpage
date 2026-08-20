import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { TimelineEvent } from "./Timeline";
import { Card } from "./Card";

export interface TimelineLabels {
  seeMore: string;
  close: string;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

function ExpandableDetails({
  alignRight,
  details,
  labels,
}: {
  alignRight?: boolean;
  details: React.ReactNode;
  labels: TimelineLabels;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`flex ${alignRight ? "justify-end" : "justify-start"}`}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-2 inline-flex cursor-pointer items-center gap-1 rounded-md px-1.5 py-1 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent-bg)]"
        >
          {open ? labels.close : labels.seeMore}
          <Chevron open={open} />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className={`pt-2 text-sm text-[var(--text)] ${alignRight ? "text-right" : "text-left"}`}
            >
              {details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function TimelineEventCard({
  item,
  labels,
}: {
  item: TimelineEvent;
  labels: TimelineLabels;
}) {
  return (
    <Card hover={false}>
      <div className={`tl-card-content ${item.alignRight ? "text-right" : ""}`}>
        <p className="mb-1 text-xs font-medium text-[var(--text)]">
          {item.date}
        </p>
        <p className="font-[var(--heading)] font-semibold text-[var(--text-h)]">
          {item.title}
        </p>
        {item.subtitle && (
          <p className="text-sm text-[var(--accent)]">{item.subtitle}</p>
        )}
        {item.description && (
          <div className="mt-2 text-sm text-[var(--text)]">
            {item.description}
          </div>
        )}
        {item.details && (
          <ExpandableDetails
            alignRight={item.alignRight}
            details={item.details}
            labels={labels}
          />
        )}
      </div>
    </Card>
  );
}
