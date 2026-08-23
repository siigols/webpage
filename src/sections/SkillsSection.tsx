import { Badge, Section, Spacer } from "../components";
import { skills } from "../data/skills";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function SkillsSection() {
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <Section title={tr.sections.skills} id="skills" index={8}>
      <Spacer />
      <div className="marquee">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, index) => (
            <Badge key={`${skill}-${index}`} variant="default">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
