import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'SecurGeek',
      description: 'A comprehensive cybersecurity learning platform with interactive video courses, real-time assessments, and admin dashboard, built using React, Supabase, Tailwind CSS, JavaScript, and cybersecurity education principles.',
      image: '/Images/securgeek.png',
      liveUrl: 'https://securgeek.vercel.app/',
      sourceUrl: 'https://github.com/CyberParv/SecurGeek_v2',
      tags: ['React', 'Supabase', 'Tailwind CSS', 'JavaScript', 'Cybersecurity Training', 'Full-Stack Development']
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Automated vulnerability assessment tool for web applications with detailed reporting.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop&crop=center',
      liveUrl: 'https://example.com/project2',
      sourceUrl: 'https://github.com/example/project2',
      tags: ['Node.js', 'Security', 'Automation', 'Testing']
    },
    {
      title: 'Crypto Portfolio Tracker',
      description: 'Secure cryptocurrency portfolio management with advanced analytics and alerts.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop&crop=center',
      liveUrl: 'https://example.com/project3',
      sourceUrl: 'https://github.com/example/project3',
      tags: ['React', 'TypeScript', 'Blockchain', 'Security']
    },
    {
      title: 'AI Threat Classifier',
      description: 'Machine learning model to classify and predict cybersecurity threats in real-time.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop&crop=center',
      liveUrl: 'https://example.com/project4',
      sourceUrl: 'https://github.com/example/project4',
      tags: ['Python', 'TensorFlow', 'AI/ML', 'Cybersecurity']
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cybersecurity tools and applications I've built
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:neon-glow"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                  <Button
                    onClick={() => window.open(project.sourceUrl, '_blank')}
                    variant="outline"
                    className="border-border text-foreground hover:bg-muted hover:text-foreground bg-muted/50"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
