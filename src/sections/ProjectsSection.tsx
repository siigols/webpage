import { Badge, Card, Section } from "../components";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function ProjectsSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const en = language === "en";

  return (
    <Section
      title={tr.sections.projects}
      description={
        en
          ? "A selection of things I have built."
          : "Et utvalg av ting jeg har laget."
      }
    >
      <div className="grid gap-4 text-left md:grid-cols-2">
        <Card href="https://github.com">
          <h3 className="mb-1 font-semibold text-[var(--text-h)]">
            {en ? "Portfolio Website" : "Porteføljeside"}
          </h3>
          <p className="mb-3 text-sm text-[var(--text)]">
            {en
              ? "This website — a personal CV built with React 19, TypeScript, and Tailwind CSS v4."
              : "Denne nettsiden — en personlig CV laget med React 19, TypeScript og Tailwind CSS v4."}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="accent">React</Badge>
            <Badge variant="accent">TypeScript</Badge>
            <Badge variant="accent">Tailwind</Badge>
          </div>
        </Card>

        <Card href="https://github.com">
          <h3 className="mb-1 font-semibold text-[var(--text-h)]">
            WeatherDash
          </h3>
          <p className="mb-3 text-sm text-[var(--text)]">
            {en
              ? "Real-time weather dashboard pulling data from the Yr.no API with interactive maps and 7-day forecasts."
              : "Sanntids værdashbord som henter data fra Yr.no-API-et med interaktive kart og 7-dagersvarsler."}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="accent">Next.js</Badge>
            <Badge variant="accent">Mapbox</Badge>
            <Badge variant="accent">REST API</Badge>
          </div>
        </Card>

        <Card href="https://github.com">
          <h3 className="mb-1 font-semibold text-[var(--text-h)]">
            BudgetTracker
          </h3>
          <p className="mb-3 text-sm text-[var(--text)]">
            {en
              ? "A personal finance app with bank-sync via Plaid, monthly reports, and budget goals."
              : "En personlig økonomi-app med banksynkronisering via Plaid, månedlige rapporter og budsjettmål."}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="accent">React Native</Badge>
            <Badge variant="accent">Node.js</Badge>
            <Badge variant="accent">PostgreSQL</Badge>
          </div>
        </Card>

        <Card href="https://github.com">
          <h3 className="mb-1 font-semibold text-[var(--text-h)]">
            DevLog CLI
          </h3>
          <p className="mb-3 text-sm text-[var(--text)]">
            {en
              ? "A terminal tool for keeping a local developer journal with Markdown export and tag-based search."
              : "Et terminalverktøy for å føre en lokal utviklerdagbok med Markdown-eksport og tag-basert søk."}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="accent">Rust</Badge>
            <Badge variant="accent">CLI</Badge>
            <Badge variant="accent">SQLite</Badge>
          </div>
        </Card>
      </div>
    </Section>
  );
}
