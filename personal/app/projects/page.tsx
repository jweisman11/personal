import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github, Code, Rocket, Clock } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  status: "Completed" | "In Progress";
  techUsed: string[];
  liveLink?: string;
  githubRepo?: string;
  featured?: boolean;
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: "personal-site",
      name: "Personal Portfolio Website",
      description: "A modern, responsive personal website built with Next.js and shadcn/ui. Features dynamic theming, professional layout, and optimized performance. Showcases my professional journey, projects, and technical expertise.",
      status: "Completed",
      techUsed: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Firebase Hosting"],
      liveLink: "https://jeffweisman.com",
      githubRepo: "https://github.com/jweisman11/personal-site",
      featured: true
    },
    {
      id: "upcoming-project",
      name: "Coming Soon",
      description: "Exciting new project in development. Stay tuned for updates on my latest work involving data science, web development, and innovative solutions.",
      status: "In Progress",
      techUsed: ["TBD"],
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" 
      ? "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800"
      : "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800";
  };

  const getStatusIcon = (status: string) => {
    return status === "Completed" ? <Rocket className="w-3 h-3" /> : <Clock className="w-3 h-3" />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Code className="w-4 h-4" />
                Portfolio Showcase
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                My <span className="text-primary">Projects</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
                Building solutions that make a difference
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore my portfolio of projects showcasing technical expertise, creative problem-solving, 
              and passion for building innovative solutions. Each project represents a journey of learning and growth.
            </p>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[50%] top-0 ml-[-40rem] h-[25rem] w-[81.25rem] opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`group relative bg-card border rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    project.featured ? "ring-2 ring-primary/20 border-primary/30" : ""
                  }`}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute -top-3 left-6">
                      <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                        Featured Project
                      </div>
                    </div>
                  )}

                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors mb-2">
                        {project.name}
                      </h3>
                      
                      {/* Status Badge */}
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        <span>{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.liveLink && (
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="group/btn">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                    
                    {project.githubRepo && (
                      <Link href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="group/btn">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Source Code
                        </Button>
                      </Link>
                    )}

                    {!project.liveLink && !project.githubRepo && (
                      <div className="text-sm text-muted-foreground italic">
                        More details coming soon...
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-60">
                    <div className={`w-3 h-3 rounded-full ${project.featured ? "bg-primary" : "bg-accent"}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">More Projects Coming Soon</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I&apos;m constantly working on new projects and exploring innovative solutions. 
                  Follow my journey and connect with me to stay updated on my latest work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://github.com/jweisman11" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <Github className="w-5 h-5 mr-2" />
                      View GitHub Profile
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" className="w-full sm:w-auto">
                      Learn More About Me
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}