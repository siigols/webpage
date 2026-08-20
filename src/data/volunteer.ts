import type { Bilingual } from "./types";

export interface VolunteerData {
  date: string;
  title: Bilingual;
  subtitle: string;
  description?: Bilingual;
}

export const volunteer: VolunteerData[] = [
  {
    date: "September 2024 – January 2026",
    title: { en: "Vice President", no: "Nestleder" },
    subtitle: "ITxBergen",
    description: {
      en: "Responsible for planning and running a career day for IT students across study programs in Bergen.",
      no: "Ansvarlig for planlegging og gjennomføring av karrieredag for IT-studenter på tvers av studieprogrammer i Bergen.",
    },
  },
  {
    date: "August 2024 – September 2025",
    title: { en: "Election Committee", no: "Valgkomité" },
    subtitle: "Enigma",
  },
  {
    date: "January 2024 – August 2024",
    title: { en: "Corporate Contact", no: "Bedriftskontakt" },
    subtitle: "ITxBergen",
  },
  {
    date: "August 2022 – June 2023",
    title: { en: "Coach", no: "Trener" },
    subtitle: "Juridisk Håndballklubb",
  },
  {
    date: "September 2019 – July 2020",
    title: { en: "Company Representative", no: "Kompanitillitsvalgt" },
    subtitle: "Forsvaret",
  },
];
