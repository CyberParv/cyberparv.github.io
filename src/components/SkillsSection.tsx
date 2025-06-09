
import { useState } from 'react';
import { Shield, Network, Code, Brain, ExternalLink } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skills = [
    {
      category: 'Cybersecurity',
      icon: Shield,
      progress: 90,
      skills: ['Network Security', 'Threat Analysis', 'Penetration Testing', 'Security Auditing'],
      certificateUrl: 'https://example.com/cybersecurity-cert'
    },
    {
      category: 'Computer Networking',
      icon: Network,
      progress: 85,
      skills: ['TCP/IP', 'Network Architecture', 'Routing & Switching', 'Network Monitoring'],
      certificateUrl: 'https://example.com/networking-cert'
    },
    {
      category: 'Web Development',
      icon: Code,
      progress: 88,
      skills: ['React', 'Node.js', 'TypeScript', 'Full-Stack Development'],
      certificateUrl: 'https://example.com/webdev-cert'
    },
    {
      category: 'AI/ML',
      icon: Brain,
      progress: 75,
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'Data Analysis'],
      certificateUrl: 'https://example.com/ai-cert'
    }
  ];

  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Core <span className="text-primary neon-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Expertise across cybersecurity, networking, and modern development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.category}
                className={`group relative p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                  hoveredSkill === index ? 'neon-glow' : ''
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => window.open(skill.certificateUrl, '_blank')}
              >
                <div className="text-center space-y-4">
                  <div className="relative">
                    <IconComponent className="w-12 h-12 text-primary mx-auto animate-float" />
                    <ExternalLink className="w-4 h-4 absolute -top-2 -right-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span className="text-primary">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    {skill.skills.map((s, i) => (
                      <div key={i} className="text-sm text-muted-foreground">
                        • {s}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
