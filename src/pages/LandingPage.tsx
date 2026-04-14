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
  return (
    <>
      <SettingsBar />
      <HeaderSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <HobbiesSection />
      <AwardsSection />
      <VolunteerSection />
    </>
  );
}
