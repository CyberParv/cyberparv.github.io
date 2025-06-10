
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
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Soft grey outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-muted/20 via-muted/30 to-muted/20 animate-pulse blur-2xl" style={{ animationDuration: '4s' }}></div>
              
              {/* Rotating orbital rings - much slower */}
              <div className="absolute inset-8 border-2 border-dashed border-muted/20 rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
              <div className="absolute inset-12 border border-dashed border-muted/15 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '35s' }}></div>
              
              {/* Soft grey ring behind image */}
              <div className="absolute inset-16 bg-gradient-to-r from-muted/15 via-muted/20 to-muted/15 rounded-full animate-pulse blur-lg" style={{ animationDuration: '5s' }}></div>
              
              {/* Profile photo container with subtle hover effects */}
              <div className="relative z-10 w-64 h-64 rounded-full flex items-center justify-center border-2 border-muted/30 neon-glow animate-gentle-float hover:scale-105 transition-all duration-300 ease-out group">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-muted/5 to-muted/10 group-hover:from-muted/10 group-hover:to-muted/15 transition-all duration-300"></div>
                
                {/* Image container */}
                <div className="relative w-56 h-56 rounded-full overflow-hidden bg-gradient-to-br from-card to-card/90">
                  <img 
                    src="/lovable-uploads/ab46c05d-3bf9-492c-a88d-0078e4e08820.png" 
                    alt="Parv" 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-muted/5 rounded-full"></div>
                </div>
              </div>
              
              {/* Slow floating particles */}
              <div className="absolute top-12 left-12 w-3 h-3 bg-muted rounded-full animate-gentle-float opacity-40" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
              <div className="absolute top-20 right-16 w-2 h-2 bg-muted/70 rounded-full animate-gentle-float opacity-30" style={{ animationDelay: '2s', animationDuration: '7s' }}></div>
              <div className="absolute bottom-20 left-20 w-2.5 h-2.5 bg-muted/80 rounded-full animate-gentle-float opacity-35" style={{ animationDelay: '4s', animationDuration: '9s' }}></div>
              <div className="absolute bottom-16 right-12 w-2 h-2 bg-muted/60 rounded-full animate-gentle-float opacity-25" style={{ animationDelay: '1s', animationDuration: '6s' }}></div>
              <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-muted/50 rounded-full animate-gentle-float opacity-20" style={{ animationDelay: '3s', animationDuration: '10s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
