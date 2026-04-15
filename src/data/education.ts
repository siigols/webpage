import type { Bilingual } from "./types";

export interface EducationData {
  date: string;
  title: Bilingual;
  subtitle: Bilingual;
  description?: Bilingual;
}

export const education: EducationData[] = [
  {
    date: "August 2023 – June 2027",
    title: {
      en: "M.Sc. Information Technology and Economics",
      no: "Sivilingeniør, Informasjonsteknologi og Økonomi",
    },
    subtitle: {
      en: "University of Bergen (UiB)",
      no: "Universitetet i Bergen (UiB)",
    },
    description: {
      en: "Main study",
      no: "Hovedstudium",
    },
  },
  {
    date: "August 2024 – June 2027",
    title: {
      en: "B.Sc. Physics",
      no: "Bachelor i fysikk",
    },
    subtitle: {
      en: "University of Bergen (UiB)",
      no: "Universitetet i Bergen (UiB)",
    },
    description: {
      en: "Taking a bachelor's degree in physics, to use courses from Ocean Techonology.",
      no: "Tar en bachelor i fysikk, for å kunne bruke emner fra havteknologi.",
    },
  },
  {
    date: "January 2023 – June 2023",
    title: {
      en: "Exchange",
      no: "Utveksling",
    },
    subtitle: {
      en: "DTU – Technical University of Denmark",
      no: "DTU – Technical University of Denmark",
    },
    description: {
      en: "Exchange during my final semester before switching.",
      no: "Utveksling i det siste semesteret før jeg byttet studie.",
    },
  },
  {
    date: "2020 – 2023",
    title: {
      en: "M.Sc. Ocean Technology",
      no: "Havteknologi (sivilingeniør)",
    },
    subtitle: {
      en: "University of Bergen (UiB)",
      no: "Universitetet i Bergen (UiB)",
    },
    description: {
      en: "Started my studies in ocean technology, but switched to IT and economics after three years.",
      no: "Startet på havteknologi, men byttet til IT og økonomi etter tre år.",
    },
  },
  {
    date: "2016 - 2019",
    title: {
      en: "High school",
      no: "Videregående skole",
    },
    subtitle: {
      en: "Senja videregående skole",
      no: "Senja videregående skole",
    },
    description: {
      en: "Natural science and elite sports.",
      no: "Realfag og toppidrett.",
    },
  },
];
