import type { Bilingual } from "./types";

export interface ExperienceData {
  date: string;
  title: Bilingual;
  subtitle: string;
  description?: Bilingual;
}

export const experience: ExperienceData[] = [
  {
    date: "2022 – {{present}}",
    title: { en: "Senior Frontend Engineer", no: "Senior Frontend-utvikler" },
    subtitle: "Nordvik Technologies",
    description: {
      en: "Leading the design-system team. Migrated the component library from Styled Components to Tailwind CSS, cutting bundle size by 35%. Mentoring two junior developers.",
      no: "Leder designsystem-teamet. Migrerte komponentbiblioteket fra Styled Components til Tailwind CSS og reduserte pakkestørrelsen med 35 %. Veileder to juniorutviklere.",
    },
  },
  {
    date: "2020 – 2022",
    title: { en: "Frontend Developer", no: "Frontend-utvikler" },
    subtitle: "Fjord Digital",
    description: {
      en: "Built and shipped customer-facing dashboards using React and TypeScript. Implemented real-time WebSocket features and improved Lighthouse scores from 62 to 94.",
      no: "Bygde og lanserte kundevendte dashbord med React og TypeScript. Implementerte sanntids WebSocket-funksjonalitet og forbedret Lighthouse-score fra 62 til 94.",
    },
  },
  {
    date: "2018 – 2020",
    title: { en: "Junior Developer", no: "Juniorutvikler" },
    subtitle: "Kodeverkstedet AS",
    description: {
      en: "Developed responsive websites for local businesses. Gained hands-on experience with Git, CI/CD, and agile workflows.",
      no: "Utviklet responsive nettsider for lokale bedrifter. Fikk praktisk erfaring med Git, CI/CD og smidige arbeidsmetoder.",
    },
  },
];
