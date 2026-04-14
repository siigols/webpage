import type { Bilingual } from "./types";
import type { IconProps } from "../components";

export interface SocialLinkData {
  href: string;
  icon: IconProps["name"];
  label: string;
}

export interface HeaderData {
  name: string;
  title: Bilingual;
  socialLinks: SocialLinkData[];
}

export const headerData: HeaderData = {
  name: "Sigurd Olsen",
  title: { en: "Senior Frontend Engineer", no: "Senior Frontend-utvikler" },
  socialLinks: [
    { href: "https://github.com", icon: "github-icon", label: "GitHub" },
    { href: "https://linkedin.com", icon: "social-icon", label: "LinkedIn" },
  ],
};
