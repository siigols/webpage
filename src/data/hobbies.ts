import type { Bilingual } from "./types";

export interface HobbyData {
  title: Bilingual;
  description: Bilingual;
}

export const hobbies: HobbyData[] = [
  {
    title: { en: "Hiking & skiing", no: "Fjelltur og ski" },
    description: {
      en: "Enjoy going on hikes both in summer and winter. Especially fond of ski touring.",
      no: "Liker å gå turer både sommer og vinter. Spesielt glad i toppturski.",
    },
  },
  {
    title: { en: "Running", no: "Løping" },
    description: {
      en: "Enjoy running both in the city and in nature. Participated in several races for fun. ",
      no: "Liker å løpe både i byen og i naturen. Deltatt i flere løp for moro skyld.",
    },
  },
  {
    title: { en: "Friends and family", no: "Venner og familie" },
    description: {
      en: "Value spending time with friends and family, whether it's going out for dinner or just hanging out.",
      no: "Setter pris på å tilbringe tid med venner og familie, enten det er å gå ut og spise eller bare henge sammen.",
    },
  },
];
