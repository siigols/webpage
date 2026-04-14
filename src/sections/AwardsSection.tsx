import { Card, Section } from "../components";
import { t } from "../i18n";
import { useLanguage } from "../useLanguage";

export function AwardsSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const en = language === "en";

  return (
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
  );
}
