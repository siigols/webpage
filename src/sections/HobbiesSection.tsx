import { Card, Section } from "../components";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function HobbiesSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const en = language === "en";

  return (
    <Section
      title={tr.sections.hobbies}
      description={
        en
          ? "What I do when I'm not coding."
          : "Hva jeg gjør når jeg ikke koder."
      }
    >
      <div className="grid gap-4 text-left md:grid-cols-3">
        <Card>
          <h3 className="mb-1 font-semibold text-[var(--text-h)]">
            {en ? "Hiking & Skiing" : "Fjelltur & Ski"}
          </h3>
          <p className="text-sm text-[var(--text)]">
            {en
              ? "Exploring Norway's mountains year-round — hiking in summer, cross-country skiing in winter."
              : "Utforsker norske fjell hele året — fotturer om sommeren, langrenn om vinteren."}
          </p>
        </Card>
        <Card>
          <h3 className="mb-1 font-semibold text-[var(--text-h)]">
            {en ? "Photography" : "Fotografering"}
          </h3>
          <p className="text-sm text-[var(--text)]">
            {en
              ? "Landscape and street photography. Shooting with a Fujifilm X-T5 and editing in Lightroom."
              : "Landskaps- og gatefotografering. Fotograferer med Fujifilm X-T5 og redigerer i Lightroom."}
          </p>
        </Card>
        <Card>
          <h3 className="mb-1 font-semibold text-[var(--text-h)]">
            {en ? "Open Source" : "Åpen kildekode"}
          </h3>
          <p className="text-sm text-[var(--text)]">
            {en
              ? "Contributing to accessibility tooling and design-system libraries on GitHub."
              : "Bidrar til tilgjengelighetsverktøy og designsystem-biblioteker på GitHub."}
          </p>
        </Card>
      </div>
    </Section>
  );
}
