import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Lightbulb, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  <Lightbulb className="w-4 h-4" />
                  Available for opportunities
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-primary">Jeff Weisman</span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed">
                  Software Engineer & Digital Creator
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I craft innovative software solutions and share knowledge through content creation. 
                Passionate about building products that make a difference and helping others grow in tech.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Learn More About Me
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View My Work
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Code className="w-4 h-4 text-primary" />
                  <span>Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Rocket className="w-4 h-4 text-primary" />
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span>Content Creator</span>
                </div>
              </div>
            </div>
            
            {/* Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-accent/20 rounded-full blur-2xl opacity-40"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                    {/* Placeholder Content */}
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                        <Code className="w-12 h-12 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-muted-foreground">Photo Coming Soon</div>
                        <div className="text-sm text-muted-foreground/70">Professional headshot placeholder</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                    <Rocket className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-lg animate-pulse delay-1000">
                    <Lightbulb className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[50%] top-0 ml-[-40rem] h-[25rem] w-[81.25rem] opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Color palette demo section - moved here for testing purposes */}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 border rounded-2xl bg-card">
              <h2 className="text-2xl font-semibold mb-4 text-center">Theme Showcase</h2>
              <p className="text-muted-foreground mb-8 text-center">
                Experience the dynamic theming system. Use the theme toggle in the header to switch between different color palettes and watch the magic happen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-primary text-primary-foreground">Primary Action</Button>
                <Button variant="outline" className="border-primary text-primary">Secondary Action</Button>
                <Button variant="ghost">Ghost Button</Button>
                <div className="px-6 py-3 bg-primary/10 text-primary rounded-lg border border-primary/20 font-medium">
                  Themed Element
                </div>
                <div className="w-12 h-12 bg-primary rounded-xl border-2 border-primary/30 flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
