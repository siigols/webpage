import type { Bilingual } from "./types";

export interface VolunteerData {
  date: string;
  title: Bilingual;
  subtitle: string;
  description?: Bilingual;
}

export const volunteer: VolunteerData[] = [
  {
    date: "Semptember 2024 - January 2026",
    title: { en: "Vice president", no: "Nestleder" },
    subtitle: "ITxBergen",
    description: {
      en: "Second in command of the student organization ITxBergen, responsible for hosting the career fair and supporting the president with the operations of the organization.",
      no: "Nestleder i studentorganisasjonen ITxBergen, ansvarlig for å arrangere karrieredagen og støtte leder med driften av organisasjonen.",
    },
  },
  {
    date: "Mars 2024 – September 2025",
    title: { en: "Election Committee", no: "Valgkomite" },
    subtitle: "Enigma ITØK",
    description: {
      en: "Part of the election committee for the student organization Enigma ITØK, responsible for recruiting and interviewing candidates for the board.",
      no: "Medlem av valgkomiteen for studentorganisasjonen Enigma ITØK, ansvarlig for å rekruttere og intervjue kandidater til styret.",
    },
  },
  {
    date: "Januar 2024 – September 2024",
    title: { en: "Corporate Contact", no: "Bedriftskontakt" },
    subtitle: "ITxBergen",
    description: {
      en: "Responsible for maintaining contact with companies and organizing company events for the student organization ITxBergen.",
      no: "Ansvarlig for å opprettholde kontakt med bedrifter og organisere bedriftsarrangementer for studentorganisasjonen ITxBergen.",
    },
  },
  {
    date: "August 2022 - August 2023",
    title: { en: "Coach", no: "Trener" },
    subtitle: "Juridisk Håndballklubb (JHK)",
    description: {
      en: "Coach for the mens handball team of JHK, a handball club for law students in Bergen.",
      no: "Trenerfor herrelaget til JHK, en håndballklubb for jusstudenter i Bergen.",
    },
  },
];
