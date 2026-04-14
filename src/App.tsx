import { Header, ThemeToggle, LanguageToggle, SocialLink, Section, Card, Badge, Timeline, TimelineItem } from './components';
import { useLanguage } from './useLanguage';
import { t } from './i18n';

function App() {
  const { language } = useLanguage();
  const tr = t(language);

  return (
    <>
      {/* Settings bar */}
      <div className="flex items-center justify-end gap-2 border-b border-[var(--border)] px-4 py-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* Header */}
      <Header name="Sigurd Olsen" title="Software Engineer">
        <SocialLink href="https://github.com" icon="github-icon" label="GitHub" />
      </Header>

      {/* Demo sections showing translated headings */}
      <Section title={tr.sections.projects} description={language === 'en' ? 'Things I have built.' : 'Ting jeg har laget.'}>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <Card href="https://github.com">
            <h3 className="mb-1 font-semibold text-[var(--text-h)]">Portfolio</h3>
            <p className="mb-3 text-sm text-[var(--text)]">
              {language === 'en' ? 'This website — built with React, TypeScript & Tailwind.' : 'Denne nettsiden — laget med React, TypeScript og Tailwind.'}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="accent">React</Badge>
              <Badge variant="accent">TypeScript</Badge>
              <Badge variant="accent">Tailwind</Badge>
            </div>
          </Card>
        </div>
      </Section>

      <Section title={tr.sections.experience}>
        <Timeline>
          <TimelineItem
            date={`2023 – ${tr.common.present}`}
            title="Software Engineer"
            subtitle="Acme Corp"
          >
            <p>{language === 'en' ? 'Building great software.' : 'Bygger fantastisk programvare.'}</p>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section title={tr.sections.education}>
        <Timeline>
          <TimelineItem
            date="2019 – 2022"
            title={language === 'en' ? 'B.Sc. Computer Science' : 'Bachelor i informatikk'}
            subtitle={language === 'en' ? 'University of Technology' : 'Teknologiuniversitetet'}
          />
        </Timeline>
      </Section>
    </>
  );
}

export default App;
