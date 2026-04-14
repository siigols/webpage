import type { Bilingual } from "./types";

export interface ProjectData {
  title: Bilingual;
  description: Bilingual;
  href: string;
  tags: string[];
}

export const projectsDescription: Bilingual = {
  en: "A selection of things I have built.",
  no: "Et utvalg av ting jeg har laget.",
};

export const projects: ProjectData[] = [
  {
    title: { en: "Portfolio Website", no: "Porteføljeside" },
    description: {
      en: "This website — a personal CV built with React 19, TypeScript, and Tailwind CSS v4.",
      no: "Denne nettsiden — en personlig CV laget med React 19, TypeScript og Tailwind CSS v4.",
    },
    href: "https://github.com",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: { en: "WeatherDash", no: "WeatherDash" },
    description: {
      en: "Real-time weather dashboard pulling data from the Yr.no API with interactive maps and 7-day forecasts.",
      no: "Sanntids værdashbord som henter data fra Yr.no-API-et med interaktive kart og 7-dagersvarsler.",
    },
    href: "https://github.com",
    tags: ["Next.js", "Mapbox", "REST API"],
  },
  {
    title: { en: "BudgetTracker", no: "BudgetTracker" },
    description: {
      en: "A personal finance app with bank-sync via Plaid, monthly reports, and budget goals.",
      no: "En personlig økonomi-app med banksynkronisering via Plaid, månedlige rapporter og budsjettmål.",
    },
    href: "https://github.com",
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: { en: "DevLog CLI", no: "DevLog CLI" },
    description: {
      en: "A terminal tool for keeping a local developer journal with Markdown export and tag-based search.",
      no: "Et terminalverktøy for å føre en lokal utviklerdagbok med Markdown-eksport og tag-basert søk.",
    },
    href: "https://github.com",
    tags: ["Rust", "CLI", "SQLite"],
  },
];
