
import { useState } from 'react';
import { Shield, Network, Code, Brain, Database, Terminal, Lock, Globe } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skills = [
    {
      name: 'Network Security',
      icon: Shield,
      progress: 92,
      category: 'Cybersecurity'
    },
    {
      name: 'Penetration Testing',
      icon: Lock,
      progress: 88,
      category: 'Cybersecurity'
    },
    {
      name: 'TCP/IP Protocols',
      icon: Network,
      progress: 90,
      category: 'Networking'
    },
    {
      name: 'React Development',
      icon: Code,
      progress: 85,
      category: 'Web Development'
    },
    {
      name: 'Node.js',
      icon: Terminal,
      progress: 82,
      category: 'Web Development'
    },
    {
      name: 'Python',
      icon: Code,
      progress: 87,
      category: 'Programming'
    },
    {
      name: 'Machine Learning',
      icon: Brain,
      progress: 78,
      category: 'AI/ML'
    },
    {
      name: 'Database Security',
      icon: Database,
      progress: 84,
      category: 'Cybersecurity'
    },
    {
      name: 'Cloud Security',
      icon: Globe,
      progress: 80,
      category: 'Cybersecurity'
    },
    {
      name: 'TypeScript',
      icon: Code,
      progress: 83,
      category: 'Programming'
    },
    {
      name: 'Network Monitoring',
      icon: Network,
      progress: 86,
      category: 'Networking'
    },
    {
      name: 'Threat Analysis',
      icon: Shield,
      progress: 89,
      category: 'Cybersecurity'
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
            Individual expertise across cybersecurity, networking, and development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                  hoveredSkill === index ? 'neon-glow' : ''
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="text-center space-y-4">
                  <div className="relative">
                    <IconComponent className="w-10 h-10 text-primary mx-auto animate-float" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span className="text-primary">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
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
