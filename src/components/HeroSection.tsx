
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                Hi, I'm <span className="text-primary">Parv</span> 👋
              </h1>
              <h2 className="text-2xl lg:text-3xl text-foreground font-semibold">
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
          
          {/* Right side - Profile photo and animated elements */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Rotating dotted orbit */}
              <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 border border-dashed border-secondary/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              
              {/* Glowing background */}
              <div className="absolute inset-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse blur-xl"></div>
              
              {/* Profile photo */}
              <div className="relative z-10 w-48 h-48 bg-card rounded-full flex items-center justify-center border-2 border-primary/50 neon-glow animate-float">
                <Avatar className="w-40 h-40">
                  <AvatarImage src="/lovable-uploads/05c4695a-6d9d-43c1-a7ab-245421cfe485.png" alt="Parv" />
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary/20 to-secondary/20">P</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-20 right-12 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-10 right-10 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
