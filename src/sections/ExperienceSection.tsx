import type { TimelineEvent } from "../components";
import { Section, Timeline } from "../components";
import { experience } from "../data/experience";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";
import { makeTimelineContent, timelineMarker, timelinePt } from "./timelineHelpers";

export function ExperienceSection() {
  const { language } = useLanguage();
  const tr = t(language);

  const events: TimelineEvent[] = experience.map((item, index) => ({
    date: item.date.replace("{{present}}", tr.common.present),
    title: item.title[language],
    subtitle: item.subtitle,
    alignRight: index % 2 === 1,
    description: item.description ? (
      <p>{item.description[language]}</p>
    ) : undefined,
    details: item.details ? <p>{item.details[language]}</p> : undefined,
    subItems: item.roles?.map((role) => ({
      date: role.date.replace("{{present}}", tr.common.present),
      title: role.title[language],
      subtitle: role.subtitle,
      description: role.description ? (
        <p>{role.description[language]}</p>
      ) : undefined,
      details: role.details ? <p>{role.details[language]}</p> : undefined,
    })),
  }));

  return (
    <Section title={tr.sections.experience} id="experience" index={2}>
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
