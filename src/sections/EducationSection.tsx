import type { TimelineEvent } from "../components";
import { Section, Timeline } from "../components";
import { education } from "../data/education";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";
import { timelineContent, timelineMarker, timelinePt } from "./timelineHelpers";

export function EducationSection() {
  const { language } = useLanguage();
  const tr = t(language);

  const events: TimelineEvent[] = education.map((item) => ({
    date: item.date,
    title: item.title[language],
    subtitle: item.subtitle[language],
    description: item.description ? (
      <p>{item.description[language]}</p>
    ) : undefined,
  }));

  return (
    <Section title={tr.sections.education}>
      <Timeline
        value={events}
        align="alternate"
        content={timelineContent}
        marker={timelineMarker}
        pt={timelinePt}
      />
    </Section>
  );
}
