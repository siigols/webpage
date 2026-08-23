import { useEffect, useState } from "react";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

const SECTION_IDS = [
  "about",
  "experience",
  "education",
  "projects",
  "volunteer",
  "hobbies",
  "awards",
  "skills",
] as const;

/** Fixed right-edge scroll-spy dot navigation (large viewports only). */
export function SectionNav() {
  const { language } = useLanguage();
  const tr = t(language);
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el != null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const labels: Record<(typeof SECTION_IDS)[number], string> = {
    about: tr.sections.about,
    experience: tr.sections.experience,
    education: tr.sections.education,
    projects: tr.sections.projects,
    volunteer: tr.sections.volunteer,
    hobbies: tr.sections.hobbies,
    awards: tr.sections.awards,
    skills: tr.sections.skills,
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
    >
      {SECTION_IDS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className="section-nav-item flex items-center justify-end gap-3"
          aria-label={labels[id]}
          aria-current={active === id ? "true" : undefined}
        >
          <span className="section-nav-label text-[var(--text)]">
            {labels[id]}
          </span>
          <span className="section-nav-dot" data-active={active === id} />
        </a>
      ))}
    </nav>
  );
}
