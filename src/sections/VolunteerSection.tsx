import type { TimelineEvent } from "../components";
import { Section, Timeline } from "../components";
import { volunteer } from "../data/volunteer";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";
import { timelineContent, timelineMarker, timelinePt } from "./timelineHelpers";

export function VolunteerSection() {
  const { language } = useLanguage();
  const tr = t(language);

  const events: TimelineEvent[] = volunteer.map((item) => ({
    date: item.date.replace("{{present}}", tr.common.present),
    title: item.title[language],
    subtitle: item.subtitle,
    description: item.description ? <p>{item.description[language]}</p> : undefined,
  }));

  return (
    <Section title={tr.sections.volunteer}>
      <Timeline
        value={events}
        content={timelineContent}
        align="alternate"
        marker={timelineMarker}
        pt={timelinePt}
      />
    </Section>
  );
}
