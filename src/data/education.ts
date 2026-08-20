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
      no: "Integrert master, Sivilingeniør – Informasjonsteknologi og økonomi",
    },
    subtitle: {
      en: "University of Bergen (UiB)",
      no: "Universitetet i Bergen (UiB)",
    },
    description: {
      en: "Specialization in optimization and quantitative analysis. Taking master's courses at NHH in fall 2026. Writing master's thesis on interest rate risk modeling in a bank in spring 2027. Completing 5-year program in 4 years due to prior studies.",
      no: "Spesialisering innen optimering og kvantitativ analyse. Tar masteremner ved NHH høsten 26. Skal skrive masteroppgave om renterisikomodellering i en bank våren 27. Fullfører 5-årig studie på 4 år pga. tidligere studier.",
    },
  },
  {
    date: "August 2026 – December 2026",
    title: {
      en: "Exchange Semester",
      no: "Utveksling",
    },
    subtitle: {
      en: "Norwegian School of Economics (NHH)",
      no: "Norges Handelshøyskole (NHH)",
    },
    description: {
      en: "Taking Investments, Corporate Finance, Decision Modelling in Business, and Business Cycle Analysis and Macroeconomic Policies.",
      no: "Tar fagene Investments, Corporate Finance, Decision Modelling in Business og Business Cycle Analysis and Macroeconomic Policies.",
    },
  },
  {
    date: "August 2023 – June 2027",
    title: {
      en: "B.Sc. Applied Mathematics",
      no: "Bachelor i anvendt matematikk",
    },
    subtitle: {
      en: "University of Bergen (UiB)",
      no: "Universitetet i Bergen (UiB)",
    },
    description: {
      en: "Taking additional courses to complete a bachelor's degree in applied mathematics alongside the main program.",
      no: "Tar tilleggsemner for å fullføre en bachelorgrad i anvendt matematikk parallelt med hovedstudiet.",
    },
  },
  {
    date: "2016 – 2019",
    title: {
      en: "High School",
      no: "Studiespesialisering",
    },
    subtitle: {
      en: "Senja videregående skole",
      no: "Senja vgs",
    },
  },
];
