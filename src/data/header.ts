import type { IconProps } from "../components";
import type { Bilingual } from "./types";

export interface SocialLinkData {
  href: string;
  icon: IconProps["name"];
  label: string;
}

export interface ContactItemData {
  icon: IconProps["name"];
  label: string;
  value: string;
}

export interface HeaderData {
  name: string;
  title: Bilingual;
  socialLinks: SocialLinkData[];
  contactInfo: ContactItemData[];
}

export const headerData: HeaderData = {
  name: "Sigurd Dårflot Olsen",
  title: {
    en: "Information technology and economics student(ITØK) @ University of Bergen",
    no: "Informasjonsteknologi- og økonomistudent(ITØK) @ Universitetet i Bergen",
  },
  socialLinks: [
    {
      href: "https://github.com/siigols",
      icon: "github-icon",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/sigurd-dårflot-olsen-1b7003225",
      icon: "linkedin-icon",
      label: "LinkedIn",
    },
  ],
  contactInfo: [
    {
      icon: "email-icon",
      label: "Email",
      value: "sigurddaaolsen@gmail.com",
    },
    {
      icon: "phone-icon",
      label: "Phone",
      value: "97121098",
    },
  ],
};
