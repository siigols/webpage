import type { Bilingual } from "./types";

export interface ProjectData {
  title: Bilingual;
  description: Bilingual;
  href: string;
  tags: string[];
}

export const projectsDescription: Bilingual = {
  en: "Side projects aside from work and education.",
  no: "Sideprosjekter ved siden av arbeid og utdanning.",
};

export const projects: ProjectData[] = [
  {
    title: { en: "Portfolio Website", no: "Porteføljeside" },
    description: {
      en: "This website — a personal CV built with React 19, TypeScript, and Tailwind CSS v4.",
      no: "Denne nettsiden — en personlig CV laget med React 19, TypeScript og Tailwind CSS v4.",
    },
    href: "https://github.com/siigols/webpage",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: {
      en: "Jeopardy App",
      no: "Jeopardy-app",
    },
    description: {
      en: "A multiplayer Jeopardy game with a phone buzzer system, six question types, sound effects, and real-time scoring via Socket.io.",
      no: "Et Jeopardy-spill for flere spillere med buzzersystem på mobil, seks spørsmålstyper, lydeffekter og sanntidspoeng via Socket.io.",
    },
    href: "https://jeopardy-app-gtn4.onrender.com/",
    tags: ["React", "TypeScript", "Socket.io", "Express"],
  },
];
