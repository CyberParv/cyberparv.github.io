
import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const skills = [
    // First row (moving right)
    ['Network Security', 'Penetration Testing', 'Threat Analysis', 'Incident Response', 'Vulnerability Assessment'],
    // Second row (moving left)
    ['React', 'Node.js', 'Python', 'TypeScript', 'JavaScript', 'MongoDB'],
    // Third row (moving right)
    ['TCP/IP', 'Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'OWASP'],
    // Fourth row (moving left)
    ['AWS Security', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux Administration']
  ];

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Core <span className="text-primary neon-text">Skills</span>
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
                rowIndex % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left'
              }`}
            >
              {/* Duplicate the skills to create seamless loop */}
              {[...skillRow, ...skillRow, ...skillRow].map((skill, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className="inline-flex items-center justify-center mx-4 px-6 py-3 bg-card border border-primary/20 rounded-full text-lg font-medium whitespace-nowrap hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
