import { Header, SocialLink } from "../components";
import { useLanguage } from "../useLanguage";

export function HeaderSection() {
  const { language } = useLanguage();
  const en = language === "en";

  return (
    <Header
      name="Sigurd Olsen"
      title={en ? "Senior Frontend Engineer" : "Senior Frontend-utvikler"}
    >
      <SocialLink
        href="https://github.com"
        icon="github-icon"
        label="GitHub"
      />
      <SocialLink
        href="https://linkedin.com"
        icon="social-icon"
        label="LinkedIn"
      />
    </Header>
  );
}
