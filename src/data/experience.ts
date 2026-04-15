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
    title: { en: "System Developer", no: "Systemutvikler" },
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
    slug: "uib",
    date: "August 2025 – November 2025",
    title: { en: "Teaching Assistant", no: "Undervisningsassistent" },
    subtitle: "Universitetet i Bergen (UiB)",
    description: {
      en: "Part-time",
      no: "Deltid",
    },
    details: {
      en: "In the course ITØK204 (econometrics and data analysis).",
      no: "I emnet ITØK204 (økonometri og dataanalyse).",
    },
  },
  {
    slug: "avo-consulting",
    date: "January 2025 – May 2025",
    title: { en: "Internship", no: "Internship" },
    subtitle: "Avo Consulting",
    description: {
      en: "Part-time",
      no: "Deltid",
    },
  },
  {
    slug: "telenor",
    date: "August 2024 – April 2025",
    title: { en: "Assistant Store Manager", no: "Assisterende butikkleder" },
    subtitle: "Telenor",
    description: { en: "Part-time", no: "Deltid" },
    roles: [
      {
        date: "November 2021 – July 2024",
        title: { en: "Sales Associate", no: "Selger" },
        subtitle: "Telenor",
      },
    ],
  },
  {
    slug: "finnfjord",
    date: "April 2018 – August 2021",
    title: { en: "Process Operator", no: "Prosessoperatør" },
    subtitle: "Finnfjord AS",
    description: { en: "Part-time", no: "Deltid" },
  },
  {
    slug: "forsvaret",
    date: "August 2019 – June 2020",
    title: { en: "Military Service", no: "Verneplikt" },
    subtitle: "Forsvaret – Norwegian Armed Forces",
    description: { en: "Full-time", no: "Heltid" },
  },
];
