import type { TimelineEvent } from "../components";
import { Section, Timeline } from "../components";
import { experience } from "../data/experience";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";
import { timelineContent, timelineMarker, timelinePt } from "./timelineHelpers";

export function ExperienceSection() {
  const { language } = useLanguage();
  const tr = t(language);

  const events: TimelineEvent[] = experience.map((item) => ({
    date: item.date.replace("{{present}}", tr.common.present),
    title: item.title[language],
    subtitle: item.subtitle,
    description: item.description ? (
      <p>{item.description[language]}</p>
    ) : undefined,
  }));

  return (
    <Section title={tr.sections.experience}>
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
