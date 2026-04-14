import { Card, Section } from "../components";
import { awards } from "../data/awards";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function AwardsSection() {
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <Section title={tr.sections.awards}>
      <div className="grid gap-4 text-left md:grid-cols-2">
        {awards.map((award, index) => (
          <Card key={award.title.en} data-stagger={index}>
            <p className="mb-1 text-xs font-medium text-[var(--text)]">
              {award.year}
            </p>
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">
              {award.title[language]}
            </h3>
            <p className="text-sm text-[var(--text)]">
              {award.description[language]}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
