
import { Shield } from 'lucide-react';

const CyberShield = () => {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Rotating dotted orbit */}
      <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-rotate"></div>
      <div className="absolute inset-4 border border-dashed border-secondary/20 rounded-full animate-rotate" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
      
      {/* Glowing cyber security shield background */}
      <div className="absolute inset-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse-glow blur-xl"></div>
      
      {/* Central shield icon with photo placeholder */}
      <div className="relative z-10 w-48 h-48 bg-card rounded-full flex items-center justify-center border-2 border-primary/50 animate-float neon-glow">
        {/* This would be replaced with actual photo */}
        <div className="w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center border border-primary/30">
          <Shield className="w-16 h-16 text-primary animate-pulse-glow" />
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-20 right-12 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default CyberShield;
