
import { Shield, Lock, Code, AlertTriangle } from 'lucide-react';

const CyberSnippetsSection = () => {
  const snippets = [
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify. Zero Trust assumes no implicit trust and continuously validates every transaction.',
      icon: Shield,
      category: 'Network Security'
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Adding multiple layers of verification significantly reduces the risk of unauthorized access to your systems.',
      icon: Lock,
      category: 'Access Control'
    },
    {
      title: 'Secure Coding Practices',
      description: 'Input validation, output encoding, and proper error handling are essential for preventing vulnerabilities.',
      icon: Code,
      category: 'Development'
    },
    {
      title: 'Incident Response Planning',
      description: 'Having a well-defined incident response plan can minimize damage and recovery time during security breaches.',
      icon: AlertTriangle,
      category: 'Risk Management'
    },
    {
      title: 'Regular Security Audits',
      description: 'Consistent security assessments help identify vulnerabilities before they can be exploited by attackers.',
      icon: Shield,
      category: 'Monitoring'
    },
    {
      title: 'Data Encryption Standards',
      description: 'Proper encryption protocols protect sensitive data both in transit and at rest from unauthorized access.',
      icon: Lock,
      category: 'Data Protection'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Cyber<span className="text-primary">Snippets</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Quick cybersecurity insights and best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snippets.map((snippet, index) => {
            const IconComponent = snippet.icon;
            return (
              <div
                key={snippet.title}
                className="group bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:neon-glow cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <IconComponent className="w-8 h-8 text-primary animate-pulse-glow" />
                    <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                      {snippet.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {snippet.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {snippet.description}
                  </p>
                </div>
                
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CyberSnippetsSection;
