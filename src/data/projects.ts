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
      en: "Rework of Ability Forwards website",
      no: "Rework av Ability Forwards nettside",
    },
    description: {
      en: "A complete rework of the website for Ability Forward, a non-profit organization that helps children in Uganda. In progress and not live. Built with React 19, TypeScript, and Tailwind CSS v4.",
      no: "En komplett rework av nettsiden til Ability Forward, en ideell organisasjon som hjelper barn i Uganda. Under arbeid og ikke live. Laget med React 19, TypeScript og Tailwind CSS v4.",
    },
    href: "https://abilityforward.org",
    tags: ["React", "TypeScript", "Tailwind"],
  },
];
