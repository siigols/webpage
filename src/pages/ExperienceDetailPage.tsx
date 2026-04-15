import { Link, useParams } from "react-router-dom";
import { Button, Card } from "../components";
import { StickyHeader } from "../components/StickyHeader";
import { experience } from "../data/experience";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function ExperienceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const tr = t(language);

  const item = experience.find((e) => e.slug === slug);

  if (!item) {
    return (
      <>
        <StickyHeader alwaysVisible />
        <div className="flex flex-col items-center gap-4 px-6 py-24">
          <p className="text-[var(--text)]">
            {language === "no"
              ? "Erfaring ikke funnet."
              : "Experience not found."}
          </p>
          <Link to="/">
            <Button variant="ghost">
              {language === "no" ? "Tilbake" : "Back"}
            </Button>
          </Link>
        </div>
      </>
    );
  }

  const present = tr.common.present;

  return (
    <>
      <StickyHeader alwaysVisible />
      <div className="mx-auto max-w-2xl px-6 py-12">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-8">
            ← {language === "no" ? "Tilbake" : "Back"}
          </Button>
        </Link>

        <Card hover={false}>
          <p className="mb-1 text-xs font-medium text-[var(--text)]">
            {item.date.replace("{{present}}", present)}
          </p>
          <h1 className="font-[var(--heading)] text-2xl font-semibold text-[var(--text-h)]">
            {item.title[language]}
          </h1>
          <p className="text-sm text-[var(--accent)]">{item.subtitle}</p>
          {item.description && (
            <div className="mt-3 text-sm text-[var(--text)]">
              <p>{item.description[language]}</p>
            </div>
          )}
          {item.details && (
            <div className="mt-3 text-sm text-[var(--text)]">
              <p>{item.details[language]}</p>
            </div>
          )}
        </Card>

        {item.roles && item.roles.length > 0 && (
          <div className="mt-6 space-y-4">
            <h2 className="font-[var(--heading)] text-lg font-medium text-[var(--text-h)]">
              {language === "no" ? "Tidligere roller" : "Previous roles"}
            </h2>
            {item.roles.map((role, i) => (
              <Card key={i} hover={false}>
                <p className="mb-1 text-xs font-medium text-[var(--text)]">
                  {role.date.replace("{{present}}", present)}
                </p>
                <p className="font-[var(--heading)] font-semibold text-[var(--text-h)]">
                  {role.title[language]}
                </p>
                {role.subtitle && (
                  <p className="text-sm text-[var(--accent)]">
                    {role.subtitle}
                  </p>
                )}
                {role.description && (
                  <div className="mt-2 text-sm text-[var(--text)]">
                    <p>{role.description[language]}</p>
                  </div>
                )}
                {role.details && (
                  <div className="mt-2 text-sm text-[var(--text)]">
                    <p>{role.details[language]}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
