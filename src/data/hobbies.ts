import type { Bilingual } from "./types";

export interface HobbyData {
  title: Bilingual;
  description: Bilingual;
}

export const hobbiesDescription: Bilingual = {
  en: "What I do when I'm not coding.",
  no: "Hva jeg gjør når jeg ikke koder.",
};

export const hobbies: HobbyData[] = [
  {
    title: { en: "Hiking & Skiing", no: "Fjelltur & Ski" },
    description: {
      en: "Exploring Norway's mountains year-round — hiking in summer, cross-country skiing in winter.",
      no: "Utforsker norske fjell hele året — fotturer om sommeren, langrenn om vinteren.",
    },
  },
  {
    title: { en: "Photography", no: "Fotografering" },
    description: {
      en: "Landscape and street photography. Shooting with a Fujifilm X-T5 and editing in Lightroom.",
      no: "Landskaps- og gatefotografering. Fotograferer med Fujifilm X-T5 og redigerer i Lightroom.",
    },
  },
  {
    title: { en: "Open Source", no: "Åpen kildekode" },
    description: {
      en: "Contributing to accessibility tooling and design-system libraries on GitHub.",
      no: "Bidrar til tilgjengelighetsverktøy og designsystem-biblioteker på GitHub.",
    },
  },
];
