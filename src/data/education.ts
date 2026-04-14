import type { Bilingual } from "./types";

export interface EducationData {
  date: string;
  title: Bilingual;
  subtitle: Bilingual;
  description?: Bilingual;
}

export const education: EducationData[] = [
  {
    date: "2015 – 2018",
    title: { en: "B.Sc. Computer Science", no: "Bachelor i informatikk" },
    subtitle: { en: "University of Oslo", no: "Universitetet i Oslo" },
    description: {
      en: "Specialised in software engineering and human-computer interaction. Thesis on accessible single-page applications.",
      no: "Spesialisering i programvareteknikk og menneske-maskin-interaksjon. Bacheloroppgave om tilgjengelige enkeltsideapplikasjoner.",
    },
  },
  {
    date: "2012 – 2015",
    title: {
      en: "Upper Secondary — IT & Media",
      no: "Videregående — IT og medieproduksjon",
    },
    subtitle: { en: "Bergen Cathedral School", no: "Bergen Katedralskole" },
  },
];
