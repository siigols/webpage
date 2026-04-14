import { Header, SocialLink } from "../components";
import { headerData } from "../data/header";
import { useLanguage } from "../useLanguage";

export function HeaderSection() {
  const { language } = useLanguage();

  return (
    <Header name={headerData.name} title={headerData.title[language]}>
      {headerData.socialLinks.map((link) => (
        <SocialLink
          key={link.label}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </Header>
  );
}
