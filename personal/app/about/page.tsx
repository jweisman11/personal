import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, GraduationCap, MapPin, Calendar, Briefcase, Award } from "lucide-react";

export default function About() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Briefcase className="w-4 h-4" />
                Professional Journey
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                About <span className="text-primary">Jeff Weisman</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
                Manager at Deloitte | Former Data Scientist & Senior Consultant
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              With over 13 years of experience in consulting and data science, I&apos;ve helped organizations transform 
              their operations through strategic insights and innovative solutions. My journey spans from accounting 
              to data science to management, always focused on delivering value and driving growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Projects
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/jeff-weisman-050a322b/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Connect on LinkedIn
                </Button>
              </Link>
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

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
              <p className="text-muted-foreground">A career built on strategic thinking and data-driven solutions</p>
            </div>

            <div className="space-y-8">
              {/* Deloitte - Current */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Manager</h3>
                      <p className="text-lg font-medium">Deloitte</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Aug 2022 - Present
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Arlington, VA
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Leading strategic initiatives and managing cross-functional teams to deliver comprehensive consulting solutions. 
                    Overseeing project delivery, client relationships, and team development in a fast-paced consulting environment.
                  </p>
                </div>
              </div>

              {/* Deloitte - Data Scientist */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary/70 rounded-full"></div>
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Data Scientist - Senior Consultant</h3>
                      <p className="text-lg font-medium">Deloitte</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Mar 2019 - Jul 2022
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Washington D.C. Metro
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized in advanced analytics and machine learning solutions for enterprise clients. 
                    Developed data-driven insights and predictive models to solve complex business challenges across various industries.
                  </p>
                </div>
              </div>

              {/* Kearney & Company - Consultant */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary/50 rounded-full"></div>
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Consultant</h3>
                      <p className="text-lg font-medium">Kearney & Company</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        May 2017 - Mar 2019
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Washington D.C. Metro
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Provided strategic consulting services to government and commercial clients. 
                    Focused on process improvement, organizational transformation, and strategic planning initiatives.
                  </p>
                </div>
              </div>

              {/* Kearney & Company - Senior Accountant */}
              <div className="relative pl-8 border-l-2 border-muted/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full"></div>
                <div className="bg-card p-6 rounded-lg border shadow-sm opacity-90">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Senior Accountant</h3>
                      <p className="text-lg font-medium">Kearney & Company</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        May 2014 - May 2017
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Managed financial reporting, analysis, and compliance for consulting engagements. 
                    Developed expertise in financial systems and process optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground">Academic foundation in business and accounting</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* George Mason University */}
              <div className="bg-card p-8 rounded-lg border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">George Mason University</h3>
                    <p className="text-primary font-medium mb-2">Master of Business Administration (M.B.A.)</p>
                    <div className="flex items-center gap-1 text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>2012 - 2015</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Advanced business education focusing on strategic management, finance, and organizational leadership.
                    </p>
                  </div>
                </div>
              </div>

              {/* Christopher Newport University */}
              <div className="bg-card p-8 rounded-lg border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Christopher Newport University</h3>
                    <p className="text-primary font-medium mb-2">Bachelor of Science, Business Administration</p>
                    <div className="flex items-center gap-1 text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>2007 - 2011</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground"><strong>Concentration:</strong> Accounting</p>
                      <p className="text-muted-foreground"><strong>Activities:</strong> Accounting Club, Altered Xpressionz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-muted-foreground">Core competencies developed over 13+ years of professional experience</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Management & Leadership</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Team management, strategic planning, client relationship management, and organizational transformation.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Data Science & Analytics</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Machine learning, predictive modeling, data visualization, and advanced statistical analysis.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Business Strategy</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Strategic consulting, process improvement, financial analysis, and business development.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-6 text-center">Technical Proficiencies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Python", "R", "SQL", "Tableau", "Power BI", "Excel", 
                  "Machine Learning", "Statistical Analysis", "Project Management",
                  "Financial Modeling", "Data Visualization", "Strategic Planning"
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}