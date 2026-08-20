import { Badge, Section } from "../components";
import { bio, languages } from "../data/about";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function AboutSection() {
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <Section title={tr.sections.about} id="about">
      <div className="mx-auto max-w-2xl text-left">
        <p className="text-[var(--text)]" data-stagger="0">
          {bio[language]}
        </p>
        <div className="mt-4 flex flex-wrap gap-2" data-stagger="1">
          {languages.map((entry) => (
            <Badge key={entry.language.en} variant="outline">
              {entry.language[language]} — {entry.level[language]}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
