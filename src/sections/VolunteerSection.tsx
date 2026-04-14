import type { TimelineEvent } from "../components";
import { Section, Timeline } from "../components";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";
import { timelineContent, timelineMarker, timelinePt } from "./timelineHelpers";

export function VolunteerSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const en = language === "en";

  const volunteerEvents: TimelineEvent[] = [
    {
      date: `2023 – ${tr.common.present}`,
      title: en ? "Coding Mentor" : "Kodeveileder",
      subtitle: "Lær Kidsa Koding",
      description: (
        <p>
          {en
            ? "Teaching children aged 10-15 the basics of programming through Scratch and Python workshops every Saturday."
            : "Lærer barn mellom 10 og 15 år grunnleggende programmering gjennom Scratch- og Python-verksteder hver lørdag."}
        </p>
      ),
    },
    {
      date: "2021 – 2022",
      title: en ? "Event Organiser" : "Arrangør",
      subtitle: "JavaZone Volunteers",
      description: (
        <p>
          {en
            ? "Helped coordinate speaker logistics and attendee registration for Norway's largest developer conference."
            : "Bidro med koordinering av foredragsholdere og deltakerregistrering for Norges største utviklerkonferanse."}
        </p>
      ),
    },
  ];

  return (
    <Section title={tr.sections.volunteer}>
      <Timeline
        value={volunteerEvents}
        content={timelineContent}
        align="alternate"
        marker={timelineMarker}
        pt={timelinePt}
      />
    </Section>
  );
}
