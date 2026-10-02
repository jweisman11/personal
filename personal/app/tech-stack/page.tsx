import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Database, Globe, Server, Wrench } from "lucide-react";
import { IconCloud } from "@/components/magicui/icon-cloud";

export default function TechStackPage() {
  // Tech stack icons using popular tech logos
  const techIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
  ];

  const techCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Firebase", "REST APIs"]
    },
    {
      title: "Data Science & Analytics",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Python", "Pandas", "NumPy", "Jupyter", "Statistical Analysis", "Machine Learning"]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      technologies: ["Git", "Docker", "AWS", "VS Code", "Linux", "CI/CD"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Code className="w-4 h-4" />
                Technology Stack
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                My <span className="text-primary">Tech Stack</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
                Tools and technologies I use to build amazing solutions
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From data science and machine learning to full-stack web development, 
              I leverage a diverse set of modern technologies to solve complex problems and create impactful solutions.
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

      {/* Interactive Icon Cloud Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Interactive Tech Cloud</h2>
              <p className="text-muted-foreground">
                Click and drag to explore the technologies I work with
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <IconCloud images={techIcons} />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Categories Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Technology Categories</h2>
              <p className="text-muted-foreground">
                My expertise spans across multiple domains of technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {techCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium border border-accent/30 hover:bg-accent/70 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Build Something Together</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Interested in collaborating on a project or discussing technology solutions? 
              I&apos;m always excited to explore new opportunities and tackle challenging problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Projects
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}