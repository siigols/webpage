import { Badge, Section, Spacer } from "../components";
import { skills } from "../data/skills";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function SkillsSection() {
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <Section title={tr.sections.skills}>
      <Spacer />
      <div className="flex flex-wrap gap-2 text-left">
        {skills.map((skill, index) => (
          <Badge key={skill} variant="default" data-stagger-deep={index}>
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
