import { Badge, Card, Section } from "../components";
import { projects, projectsDescription } from "../data/projects";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function ProjectsSection() {
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <Section
      title={tr.sections.projects}
      description={projectsDescription[language]}
    >
      <div className="grid gap-4 text-left md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={project.title.en}
            href={project.href}
            data-stagger={index}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="mb-1 font-semibold text-[var(--text-h)]">
                {project.title[language]}
              </h3>
              <p className="text-sm text-[var(--text)]">
                {project.description[language]}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="accent">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
