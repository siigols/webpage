import type { Bilingual } from "./types";

export interface AwardData {
  year: string;
  title: Bilingual;
  description: Bilingual;
}

export const awards: AwardData[] = [
  {
    year: "2024",
    title: { en: "AWS Certified Solutions Architect", no: "AWS Certified Solutions Architect" },
    description: {
      en: "Amazon Web Services — Associate level.",
      no: "Amazon Web Services — Associate-nivå.",
    },
  },
  {
    year: "2023",
    title: { en: "Best Student Project", no: "Beste studentprosjekt" },
    description: {
      en: "Awarded by the Norwegian Computing Society for an accessible e-learning platform.",
      no: "Tildelt av Den Norske Dataforening for en tilgjengelig e-læringsplattform.",
    },
  },
  {
    year: "2022",
    title: { en: "Google UX Design Certificate", no: "Google UX Design-sertifikat" },
    description: {
      en: "Coursera professional certificate covering the full UX design process.",
      no: "Coursera-profesjonssertifikat som dekker hele UX-designprosessen.",
    },
  },
  {
    year: "2021",
    title: { en: "NDC Oslo Hackathon — 1st Place", no: "NDC Oslo Hackathon — 1. plass" },
    description: {
      en: "Built a real-time collaborative code editor in 48 hours with a team of four.",
      no: "Bygde en sanntids samarbeidsbasert kodeeditor på 48 timer med et team på fire.",
    },
  },
];
