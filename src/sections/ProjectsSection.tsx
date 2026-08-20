import { animated } from "@react-spring/web";
import type { Language } from "../contexts";
import { Badge, Card, Section } from "../components";
import { projects, projectsDescription, type ProjectData } from "../data/projects";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";
import { useTilt } from "../useTilt";

function ProjectCard({
  project,
  index,
  language,
}: {
  project: ProjectData;
  index: number;
  language: Language;
}) {
  const tilt = useTilt({ max: 6, scale: 1.02 });

  return (
    <animated.div
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      data-stagger={index}
    >
      <Card
        href={project.href}
        className="flex h-full flex-col justify-between"
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
    </animated.div>
  );
}

export function ProjectsSection() {
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <Section
      title={tr.sections.projects}
      description={projectsDescription[language]}
      id="projects"
    >
      <div className="grid gap-4 text-left md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title.en}
            project={project}
            index={index}
            language={language}
          />
        ))}
      </div>
    </Section>
  );
}
