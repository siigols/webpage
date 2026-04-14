import type { TimelineEvent } from "../components";
import { Section, Timeline } from "../components";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";
import { timelineContent, timelineMarker, timelinePt } from "./timelineHelpers";

export function EducationSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const en = language === "en";

  const educationEvents: TimelineEvent[] = [
    {
      date: "2015 – 2018",
      title: en ? "B.Sc. Computer Science" : "Bachelor i informatikk",
      subtitle: en ? "University of Oslo" : "Universitetet i Oslo",
      description: (
        <p>
          {en
            ? "Specialised in software engineering and human-computer interaction. Thesis on accessible single-page applications."
            : "Spesialisering i programvareteknikk og menneske-maskin-interaksjon. Bacheloroppgave om tilgjengelige enkeltsideapplikasjoner."}
        </p>
      ),
    },
    {
      date: "2012 – 2015",
      title: en
        ? "Upper Secondary — IT & Media"
        : "Videregående — IT og medieproduksjon",
      subtitle: en ? "Bergen Cathedral School" : "Bergen Katedralskole",
    },
  ];

  return (
    <Section title={tr.sections.education}>
      <Timeline
        value={educationEvents}
        align="alternate"
        content={timelineContent}
        marker={timelineMarker}
        pt={timelinePt}
      />
    </Section>
  );
}
