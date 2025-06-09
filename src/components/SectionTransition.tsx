
import { Shield, Lock, Globe, Brain } from 'lucide-react';

interface SectionTransitionProps {
  type: 'shield' | 'lock' | 'network' | 'brain';
}

const SectionTransition = ({ type }: SectionTransitionProps) => {
  const getIcon = () => {
    switch (type) {
      case 'shield':
        return Shield;
      case 'lock':
        return Lock;
      case 'network':
        return Globe;
      case 'brain':
        return Brain;
      default:
        return Shield;
    }
  };

  const getAnimation = () => {
    switch (type) {
      case 'shield':
        return 'animate-rotate';
      case 'lock':
        return 'animate-pulse-glow';
      case 'network':
        return 'animate-float';
      case 'brain':
        return 'animate-glow';
      default:
        return 'animate-pulse-glow';
    }
  };

  const IconComponent = getIcon();

  return (
    <div className="relative py-16 flex items-center justify-center">
      {/* Background circuit lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 100">
          <path
            d="M0,50 Q100,20 200,50 T400,50"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary animate-circuit-flow"
            strokeDasharray="10,5"
          />
          <path
            d="M0,30 Q100,60 200,30 T400,30"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-secondary animate-circuit-flow"
            strokeDasharray="8,3"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>
      
      {/* Central icon */}
      <div className="relative z-10">
        <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center border-2 border-primary/30 neon-glow">
          <IconComponent className={`w-8 h-8 text-primary ${getAnimation()}`} />
        </div>
        
        {/* Surrounding particles */}
        {type === 'network' && (
          <>
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -top-4 -right-4 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </>
        )}
        
        {type === 'brain' && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
                style={{
                  top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}px`,
                  left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 30}px`,
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SectionTransition;
