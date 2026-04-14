import { Badge, Section } from "../components";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function SkillsSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const en = language === "en";

  return (
    <Section
      title={tr.sections.skills}
      description={
        en
          ? "Technologies and tools I work with regularly."
          : "Teknologier og verktøy jeg jobber med jevnlig."
      }
    >
      <div className="flex flex-wrap gap-2 text-left">
        {[
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Vue",
          "Node.js",
          "Express",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Tailwind CSS",
          "Figma",
          "Docker",
          "Git",
          "CI/CD",
          "REST",
          "GraphQL",
          "AWS",
          "Vercel",
          "Storybook",
        ].map((skill) => (
          <Badge key={skill} variant="default">
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
