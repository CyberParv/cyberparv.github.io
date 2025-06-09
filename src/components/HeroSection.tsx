
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import CyberShield from './CyberShield';

const HeroSection = () => {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                Hi, I'm <span className="text-primary neon-text">Parv</span> 👋
              </h1>
              <h2 className="text-2xl lg:text-3xl text-secondary font-semibold">
                Securing networks, decoding threats, and building what's next.
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I thrive on building safer digital spaces and solving network puzzles at packet level.
              </p>
              <p>
                From defending systems against threats to experimenting with AI and web technologies,
                I bring curiosity, precision, and creativity to every line of code and cable.
              </p>
              <p>
                Let's connect, collaborate, or just share ideas on security, systems, or innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
                size="lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                Explore Projects
                <ArrowDown className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Right side - Animated cyber elements */}
          <div className="relative flex items-center justify-center">
            <CyberShield />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
