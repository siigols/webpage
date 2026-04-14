import type { TimelineEvent } from "./components";
import {
  Badge,
  Card,
  Header,
  LanguageToggle,
  Section,
  SocialLink,
  ThemeToggle,
  Timeline,
} from "./components";
import { t } from "./i18n";
import { useLanguage } from "./useLanguage";

const timelineMarker = () => (
  <span
    className="flex h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
    aria-hidden="true"
  />
);

const timelineContent = (item: TimelineEvent) => (
  <Card hover={false}>
    <p className="mb-1 text-xs font-medium text-[var(--text)]">{item.date}</p>
    <p className="font-[var(--heading)] font-semibold text-[var(--text-h)]">
      {item.title}
    </p>
    {item.subtitle && (
      <p className="text-sm text-[var(--accent)]">{item.subtitle}</p>
    )}
    {item.description && (
      <div className="mt-2 text-sm text-[var(--text)]">{item.description}</div>
    )}
  </Card>
);

/** Structural flex classes needed because PrimeReactProvider unstyled:true strips all built-in CSS. */
const timelinePt = {
  root: { className: 'flex flex-col' },
  event: (options: { context: { index: number } }) => ({
    className: `flex min-h-[70px] last:min-h-0 ${options.context.index % 2 === 1 ? 'flex-row-reverse' : ''}`,
  }),
  opposite: (options: { context: { index: number } }) => ({
    className: `flex-1 px-4 ${options.context.index % 2 === 1 ? 'text-left' : 'text-right'}`,
  }),
  separator: { className: 'flex flex-col items-center flex-none' },
  connector: { className: 'grow w-0.5 bg-[var(--accent-border)]' },
  content: (options: { context: { index: number } }) => ({
    className: `flex-1 pb-6 px-4 ${options.context.index % 2 === 1 ? 'text-right' : 'text-left'}`,
  }),
};

function App() {
  const { language } = useLanguage();
  const tr = t(language);
  const en = language === "en";

  /* ── Experience ── */
  const experienceEvents: TimelineEvent[] = [
    {
      date: `2022 – ${tr.common.present}`,
      title: en ? "Senior Frontend Engineer" : "Senior Frontend-utvikler",
      subtitle: "Nordvik Technologies",
      description: (
        <p>
          {en
            ? "Leading the design-system team. Migrated the component library from Styled Components to Tailwind CSS, cutting bundle size by 35%. Mentoring two junior developers."
            : "Leder designsystem-teamet. Migrerte komponentbiblioteket fra Styled Components til Tailwind CSS og reduserte pakkestørrelsen med 35 %. Veileder to juniorutviklere."}
        </p>
      ),
    },
    {
      date: "2020 – 2022",
      title: en ? "Frontend Developer" : "Frontend-utvikler",
      subtitle: "Fjord Digital",
      description: (
        <p>
          {en
            ? "Built and shipped customer-facing dashboards using React and TypeScript. Implemented real-time WebSocket features and improved Lighthouse scores from 62 to 94."
            : "Bygde og lanserte kundevendte dashbord med React og TypeScript. Implementerte sanntids WebSocket-funksjonalitet og forbedret Lighthouse-score fra 62 til 94."}
        </p>
      ),
    },
    {
      date: "2018 – 2020",
      title: en ? "Junior Developer" : "Juniorutvikler",
      subtitle: "Kodeverkstedet AS",
      description: (
        <p>
          {en
            ? "Developed responsive websites for local businesses. Gained hands-on experience with Git, CI/CD, and agile workflows."
            : "Utviklet responsive nettsider for lokale bedrifter. Fikk praktisk erfaring med Git, CI/CD og smidige arbeidsmetoder."}
        </p>
      ),
    },
  ];

  /* ── Education ── */
  const educationEvents: TimelineEvent[] = [
    {
      date: "2015 – 2018",
      title: en ? "B.Sc. Computer Science" : "Bachelor i informatikk",
      subtitle: en ? "University of Oslo" : "Universitetet i Oslo",
      description: (
        <p>
          {en
            ? "Specialised in software engineering and human-computer interaction. Thesis on accessible single-page applications."
            : "Spesialisering i programvareteknikk og menneske-maskin-interaksjon. Bacheloroppgave om tilgjengelige enkeltsideapplikasjoner."}
        </p>
      ),
    },
    {
      date: "2012 – 2015",
      title: en
        ? "Upper Secondary — IT & Media"
        : "Videregående — IT og medieproduksjon",
      subtitle: en ? "Bergen Cathedral School" : "Bergen Katedralskole",
    },
  ];

  /* ── Volunteer ── */
  const volunteerEvents: TimelineEvent[] = [
    {
      date: `2023 – ${tr.common.present}`,
      title: en ? "Coding Mentor" : "Kodeveileder",
      subtitle: "Lær Kidsa Koding",
      description: (
        <p>
          {en
            ? "Teaching children aged 10-15 the basics of programming through Scratch and Python workshops every Saturday."
            : "Lærer barn mellom 10 og 15 år grunnleggende programmering gjennom Scratch- og Python-verksteder hver lørdag."}
        </p>
      ),
    },
    {
      date: "2021 – 2022",
      title: en ? "Event Organiser" : "Arrangør",
      subtitle: "JavaZone Volunteers",
      description: (
        <p>
          {en
            ? "Helped coordinate speaker logistics and attendee registration for Norway's largest developer conference."
            : "Bidro med koordinering av foredragsholdere og deltakerregistrering for Norges største utviklerkonferanse."}
        </p>
      ),
    },
  ];

  return (
    <>
      {/* Settings bar */}
      <div className="flex items-center justify-end gap-2 border-b border-[var(--border)] px-4 py-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* Header */}
      <Header
        name="Sigurd Olsen"
        title={en ? "Senior Frontend Engineer" : "Senior Frontend-utvikler"}
      >
        <SocialLink
          href="https://github.com"
          icon="github-icon"
          label="GitHub"
        />
        <SocialLink
          href="https://linkedin.com"
          icon="social-icon"
          label="LinkedIn"
        />
      </Header>

      {/* ── Projects ── */}
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

      {/* ── Experience ── */}
      <Section title={tr.sections.experience}>
        <Timeline
          value={experienceEvents}
          content={timelineContent}
          align="alternate"
          marker={timelineMarker}
          pt={timelinePt}
        />
      </Section>

      {/* ── Education ── */}
      <Section title={tr.sections.education}>
        <Timeline
          value={educationEvents}
          align="alternate"
          content={timelineContent}
          marker={timelineMarker}
          pt={timelinePt}
        />
      </Section>

      {/* ── Skills / Tech Stack ── */}
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

      {/* ── Hobbies & Interests ── */}
      <Section
        title={tr.sections.hobbies}
        description={
          en
            ? "What I do when I'm not coding."
            : "Hva jeg gjør når jeg ikke koder."
        }
      >
        <div className="grid gap-4 text-left md:grid-cols-3">
          <Card>
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">
              {en ? "Hiking & Skiing" : "Fjelltur & Ski"}
            </h3>
            <p className="text-sm text-[var(--text)]">
              {en
                ? "Exploring Norway's mountains year-round — hiking in summer, cross-country skiing in winter."
                : "Utforsker norske fjell hele året — fotturer om sommeren, langrenn om vinteren."}
            </p>
          </Card>
          <Card>
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">
              {en ? "Photography" : "Fotografering"}
            </h3>
            <p className="text-sm text-[var(--text)]">
              {en
                ? "Landscape and street photography. Shooting with a Fujifilm X-T5 and editing in Lightroom."
                : "Landskaps- og gatefotografering. Fotograferer med Fujifilm X-T5 og redigerer i Lightroom."}
            </p>
          </Card>
          <Card>
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">
              {en ? "Open Source" : "Åpen kildekode"}
            </h3>
            <p className="text-sm text-[var(--text)]">
              {en
                ? "Contributing to accessibility tooling and design-system libraries on GitHub."
                : "Bidrar til tilgjengelighetsverktøy og designsystem-biblioteker på GitHub."}
            </p>
          </Card>
        </div>
      </Section>

      {/* ── Awards & Certifications ── */}
      <Section title={tr.sections.awards}>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <Card>
            <p className="mb-1 text-xs font-medium text-[var(--text)]">2024</p>
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">
              {en
                ? "AWS Certified Solutions Architect"
                : "AWS Certified Solutions Architect"}
            </h3>
            <p className="text-sm text-[var(--text)]">
              {en
                ? "Amazon Web Services — Associate level."
                : "Amazon Web Services — Associate-nivå."}
            </p>
          </Card>
          <Card>
            <p className="mb-1 text-xs font-medium text-[var(--text)]">2023</p>
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">
              {en ? "Best Student Project" : "Beste studentprosjekt"}
            </h3>
            <p className="text-sm text-[var(--text)]">
              {en
                ? "Awarded by the Norwegian Computing Society for an accessible e-learning platform."
                : "Tildelt av Den Norske Dataforening for en tilgjengelig e-læringsplattform."}
            </p>
          </Card>
          <Card>
            <p className="mb-1 text-xs font-medium text-[var(--text)]">2022</p>
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">
              {en
                ? "Google UX Design Certificate"
                : "Google UX Design-sertifikat"}
            </h3>
            <p className="text-sm text-[var(--text)]">
              {en
                ? "Coursera professional certificate covering the full UX design process."
                : "Coursera-profesjonssertifikat som dekker hele UX-designprosessen."}
            </p>
          </Card>
          <Card>
            <p className="mb-1 text-xs font-medium text-[var(--text)]">2021</p>
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">
              {en
                ? "NDC Oslo Hackathon — 1st Place"
                : "NDC Oslo Hackathon — 1. plass"}
            </h3>
            <p className="text-sm text-[var(--text)]">
              {en
                ? "Built a real-time collaborative code editor in 48 hours with a team of four."
                : "Bygde en sanntids samarbeidsbasert kodeeditor på 48 timer med et team på fire."}
            </p>
          </Card>
        </div>
      </Section>

      {/* ── Volunteer Work ── */}
      <Section title={tr.sections.volunteer}>
        <Timeline
          value={volunteerEvents}
          content={timelineContent}
          align="alternate"
          marker={timelineMarker}
          pt={timelinePt}
        />
      </Section>
    </>
  );
}

export default App;
