import { useRef } from "react";
import { StickyHeader } from "../components/StickyHeader";
import { AboutSection } from "../sections/AboutSection";
import { AwardsSection } from "../sections/AwardsSection";
import { EducationSection } from "../sections/EducationSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeaderSection } from "../sections/HeaderSection";
import { HobbiesSection } from "../sections/HobbiesSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SettingsBar } from "../sections/SettingsBar";
import { SkillsSection } from "../sections/SkillsSection";
import { VolunteerSection } from "../sections/VolunteerSection";

export function LandingPage() {
  const headerEndRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SettingsBar />
      <HeaderSection />
      <div ref={headerEndRef} />
      <StickyHeader sentinelRef={headerEndRef} />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <VolunteerSection />
      <HobbiesSection />
      <AwardsSection />
      <SkillsSection />
    </>
  );
}
