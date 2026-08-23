import type { TimelineEvent } from "../components";
import { Section, Timeline } from "../components";
import { volunteer } from "../data/volunteer";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";
import { makeTimelineContent, timelineMarker, timelinePt } from "./timelineHelpers";

export function VolunteerSection() {
  const { language } = useLanguage();
  const tr = t(language);

  const events: TimelineEvent[] = volunteer.map((item) => ({
    date: item.date.replace("{{present}}", tr.common.present),
    title: item.title[language],
    subtitle: item.subtitle,
    description: item.description ? (
      <p>{item.description[language]}</p>
    ) : undefined,
  }));

  return (
    <Section title={tr.sections.volunteer} id="volunteer" index={5}>
      <Timeline
        value={events}
        content={makeTimelineContent({
          seeMore: tr.common.seeMore,
          close: tr.common.close,
        })}
        align="alternate"
        marker={timelineMarker}
        pt={timelinePt}
      />
    </Section>
  );
}
