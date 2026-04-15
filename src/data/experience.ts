import type { Bilingual } from "./types";

export interface ExperienceRole {
  date: string;
  title: Bilingual;
  description?: Bilingual;
  subtitle?: string;
  details?: Bilingual;
}

export interface ExperienceData {
  slug: string;
  date: string;
  title: Bilingual;
  subtitle: string;
  description?: Bilingual;
  details?: Bilingual;
  roles?: ExperienceRole[];
}

export const experience: ExperienceData[] = [
  {
    slug: "sparebanken-norge",
    date: "September 2025 – {{present}}",
    title: { en: "Systemdeveloper", no: "Systemutvikler" },
    subtitle: "Sparebanken Norge",
    description: { en: "Part-time", no: "Deltid" },
    roles: [
      {
        date: "Juni 2025 – August 2025",
        title: { en: "Summer Intern", no: "Sommerstudent" },
        subtitle: "Sparebanken Norge",
      },
    ],
  },
  {
    slug: "fjord-digital",
    date: "2020 – 2022",
    title: { en: "Frontend Developer", no: "Frontend-utvikler" },
    subtitle: "Fjord Digital",
    description: {
      en: "Built and shipped customer-facing dashboards using React and TypeScript. Implemented real-time WebSocket features and improved Lighthouse scores from 62 to 94.",
      no: "Bygde og lanserte kundevendte dashbord med React og TypeScript. Implementerte sanntids WebSocket-funksjonalitet og forbedret Lighthouse-score fra 62 til 94.",
    },
  },
  {
    slug: "kodeverkstedet",
    date: "2018 – 2020",
    title: { en: "Junior Developer", no: "Juniorutvikler" },
    subtitle: "Kodeverkstedet AS",
    description: {
      en: "Developed responsive websites for local businesses. Gained hands-on experience with Git, CI/CD, and agile workflows.",
      no: "Utviklet responsive nettsider for lokale bedrifter. Fikk praktisk erfaring med Git, CI/CD og smidige arbeidsmetoder.",
    },
  },
];
