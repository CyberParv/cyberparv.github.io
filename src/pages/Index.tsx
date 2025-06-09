
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CyberSnippetsSection from '@/components/CyberSnippetsSection';
import ContactSection from '@/components/ContactSection';
import SectionTransition from '@/components/SectionTransition';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      
      <HeroSection />
      
      <SectionTransition type="shield" />
      
      <SkillsSection />
      
      <SectionTransition type="lock" />
      
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <SectionTransition type="network" />
      
      <CyberSnippetsSection />
      
      <SectionTransition type="brain" />
      
      <ContactSection />
    </div>
  );
};

export default Index;
