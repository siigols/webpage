export { en } from "./en";
export { no } from "./no";
export type { Translations } from "./types";

import type { Language } from "../contexts";
import { en } from "./en";
import { no } from "./no";
import type { Translations } from "./types";

const translations: Record<Language, Translations> = { en, no };

export function t(language: Language): Translations {
  return translations[language];
}
