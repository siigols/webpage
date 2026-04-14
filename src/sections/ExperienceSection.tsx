import type { TimelineEvent } from "../components";
import { Section, Timeline } from "../components";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";
import { timelineContent, timelineMarker, timelinePt } from "./timelineHelpers";

export function ExperienceSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const en = language === "en";

  const experienceEvents: TimelineEvent[] = [
    {
      date: `2022 – ${tr.common.present}`,
      title: en ? "Senior Frontend Engineer" : "Senior Frontend-utvikler",
      subtitle: "Nordvik Technologies",
      description: (
        <p>
          {en
            ? "Leading the design-system team. Migrated the component library from Styled Components to Tailwind CSS, cutting bundle size by 35%. Mentoring two junior developers."
            : "Leder designsystem-teamet. Migrerte komponentbiblioteket fra Styled Components til Tailwind CSS og reduserte pakkestørrelsen med 35 %. Veileder to juniorutviklere."}
        </p>
      ),
    },
    {
      date: "2020 – 2022",
      title: en ? "Frontend Developer" : "Frontend-utvikler",
      subtitle: "Fjord Digital",
      description: (
        <p>
          {en
            ? "Built and shipped customer-facing dashboards using React and TypeScript. Implemented real-time WebSocket features and improved Lighthouse scores from 62 to 94."
            : "Bygde og lanserte kundevendte dashbord med React og TypeScript. Implementerte sanntids WebSocket-funksjonalitet og forbedret Lighthouse-score fra 62 til 94."}
        </p>
      ),
    },
    {
      date: "2018 – 2020",
      title: en ? "Junior Developer" : "Juniorutvikler",
      subtitle: "Kodeverkstedet AS",
      description: (
        <p>
          {en
            ? "Developed responsive websites for local businesses. Gained hands-on experience with Git, CI/CD, and agile workflows."
            : "Utviklet responsive nettsider for lokale bedrifter. Fikk praktisk erfaring med Git, CI/CD og smidige arbeidsmetoder."}
        </p>
      ),
    },
  ];

  return (
    <Section title={tr.sections.experience}>
      <Timeline
        value={experienceEvents}
        content={timelineContent}
        align="alternate"
        marker={timelineMarker}
        pt={timelinePt}
      />
    </Section>
  );
}
