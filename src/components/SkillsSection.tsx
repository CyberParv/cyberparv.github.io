
import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const skills = [
    // First row (moving right)
    [
      { name: 'Network Security', url: 'https://example.com/network-security' },
      { name: 'Penetration Testing', url: 'https://example.com/penetration-testing' },
      { name: 'Threat Analysis', url: 'https://example.com/threat-analysis' },
      { name: 'Incident Response', url: 'https://example.com/incident-response' },
      { name: 'Vulnerability Assessment', url: 'https://example.com/vulnerability-assessment' }
    ],
    // Second row (moving left)
    [
      { name: 'React', url: 'https://reactjs.org' },
      { name: 'Node.js', url: 'https://nodejs.org' },
      { name: 'Python', url: 'https://python.org' },
      { name: 'TypeScript', url: 'https://typescriptlang.org' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'MongoDB', url: 'https://mongodb.com' }
    ],
    // Third row (moving right)
    [
      { name: 'TCP/IP', url: 'https://example.com/tcp-ip' },
      { name: 'Wireshark', url: 'https://wireshark.org' },
      { name: 'Nmap', url: 'https://nmap.org' },
      { name: 'Metasploit', url: 'https://metasploit.com' },
      { name: 'Burp Suite', url: 'https://portswigger.net/burp' },
      { name: 'OWASP', url: 'https://owasp.org' }
    ],
    // Fourth row (moving left)
    [
      { name: 'AWS Security', url: 'https://aws.amazon.com/security' },
      { name: 'Docker', url: 'https://docker.com' },
      { name: 'Kubernetes', url: 'https://kubernetes.io' },
      { name: 'CI/CD', url: 'https://example.com/ci-cd' },
      { name: 'Git', url: 'https://git-scm.com' },
      { name: 'Linux Administration', url: 'https://example.com/linux' }
    ]
  ];

  return (
    <section id="skills" className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Core <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and expertise I work with
          </p>
        </div>
        
        <div className="space-y-8">
          {skills.map((skillRow, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex whitespace-nowrap ${
                rowIndex % 2 === 0 
                  ? 'animate-scroll-right' 
                  : 'animate-scroll-left'
              }`}
            >
              {/* Duplicate the skills to create seamless loop */}
              {[...skillRow, ...skillRow, ...skillRow].map((skill, index) => (
                <a
                  key={`${rowIndex}-${index}`}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mx-4 px-6 py-3 bg-card border border-primary/20 rounded-full text-lg font-medium whitespace-nowrap hover:border-primary/50 hover:shadow-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                >
                  {skill.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
