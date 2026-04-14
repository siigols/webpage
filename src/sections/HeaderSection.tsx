import avatar from "../assets/portrettbilde-mini.png";
import { ContactItem, Header, SocialLink } from "../components";
import { headerData } from "../data/header";
import { useLanguage } from "../useLanguage";

export function HeaderSection() {
  const { language } = useLanguage();

  return (
    <Header
      name={headerData.name}
      title={headerData.title[language]}
      avatar={avatar}
    >
      {headerData.socialLinks.map((link) => (
        <SocialLink
          key={link.label}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
      {headerData.contactInfo.map((item) => (
        <ContactItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          value={item.value}
        />
      ))}
    </Header>
  );
}
