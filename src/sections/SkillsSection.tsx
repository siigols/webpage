import { Badge, Section } from "../components";
import { skills, skillsDescription } from "../data/skills";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function SkillsSection() {
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <Section
      title={tr.sections.skills}
      description={skillsDescription[language]}
    >
      <div className="flex flex-wrap gap-2 text-left">
        {skills.map((skill) => (
          <Badge key={skill} variant="default">
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
