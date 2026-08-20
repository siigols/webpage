import type { Bilingual } from "./types";

export const bio: Bilingual = {
  en: "Master's student in Information Technology and Economics who thrives at the intersection of technology and business. I've taken on leadership responsibility both at work and in volunteer roles, including mentoring summer students at Sparebanken Norge, and I've gained consulting experience at PwC and Avo Consulting. I'm curious about new technology and how AI can be used to create long-term value.",
  no: "Sivilingeniørstudent innen IT og økonomi som trives i grenselandet mellom teknologi og forretning. Har tatt lederansvar både i jobb og verv, blant annet som mentor for sommerstudenter i Sparebanken Norge. Har også erfaring fra konsulentmiljø hos PwC og Avo Consulting, og er nysgjerrig på ny teknologi og hvordan AI kan brukes til å skape langsiktig verdi.",
};

export interface LanguageProficiency {
  language: Bilingual;
  level: Bilingual;
}

export const languages: LanguageProficiency[] = [
  {
    language: { en: "Norwegian", no: "Norsk" },
    level: { en: "Native", no: "Morsmål" },
  },
  {
    language: { en: "English", no: "Engelsk" },
    level: { en: "Fluent", no: "Flytende" },
  },
];
