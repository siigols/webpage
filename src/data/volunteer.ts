import type { Bilingual } from "./types";

export interface VolunteerData {
  date: string;
  title: Bilingual;
  subtitle: string;
  description?: Bilingual;
}

export const volunteer: VolunteerData[] = [
  {
    date: "2023 – {{present}}",
    title: { en: "Coding Mentor", no: "Kodeveileder" },
    subtitle: "Lær Kidsa Koding",
    description: {
      en: "Teaching children aged 10-15 the basics of programming through Scratch and Python workshops every Saturday.",
      no: "Lærer barn mellom 10 og 15 år grunnleggende programmering gjennom Scratch- og Python-verksteder hver lørdag.",
    },
  },
  {
    date: "2021 – 2022",
    title: { en: "Event Organiser", no: "Arrangør" },
    subtitle: "JavaZone Volunteers",
    description: {
      en: "Helped coordinate speaker logistics and attendee registration for Norway's largest developer conference.",
      no: "Bidro med koordinering av foredragsholdere og deltakerregistrering for Norges største utviklerkonferanse.",
    },
  },
];
