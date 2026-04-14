import { Card, Section } from "../components";
import { hobbies, hobbiesDescription } from "../data/hobbies";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function HobbiesSection() {
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <Section
      title={tr.sections.hobbies}
      description={hobbiesDescription[language]}
    >
      <div className="grid gap-4 text-left md:grid-cols-3">
        {hobbies.map((hobby) => (
          <Card key={hobby.title.en}>
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">
              {hobby.title[language]}
            </h3>
            <p className="text-sm text-[var(--text)]">
              {hobby.description[language]}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
