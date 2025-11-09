import { Hero } from '@/components/sections/Hero';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationTimeline } from '@/components/sections/EducationTimeline';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <SkillsSection />
      <EducationTimeline />
      <ContactSection />
    </>
  );
}
