
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CyberSnippetsSection from '@/components/CyberSnippetsSection';
import ContactSection from '@/components/ContactSection';
import SectionTransition from '@/components/SectionTransition';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      
      <HeroSection />
      
      <SectionTransition type="shield" />
      
      <SkillsSection />
      
      <SectionTransition type="lock" />
      
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <SectionTransition type="network" />
      
      <div id="snippets">
        <CyberSnippetsSection />
      </div>
      
      <SectionTransition type="brain" />
      
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
