"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Filter, Star, ExternalLink, Wrench } from "lucide-react";
import { useState, useMemo } from "react";
import toolsData from "@/data/tools.json";

interface Tool {
  name: string;
  category: string;
  useCase: string;
  rating: number;
  link: string;
  notes: string;
}

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  const tools: Tool[] = toolsData;

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(tools.map(tool => tool.category))];
    return uniqueCategories.sort();
  }, [tools]);

  // Filter tools based on search and filters
  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.notes.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
      const matchesRating = selectedRating === "all" || tool.rating >= parseInt(selectedRating);
      
      return matchesSearch && matchesCategory && matchesRating;
    });
  }, [tools, searchQuery, selectedCategory, selectedRating]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Wrench className="w-4 h-4" />
                Favorite Tools
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                My <span className="text-primary">Tool Stack</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
                Curated collection of tools that boost my productivity
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From development and design to productivity and analytics, these are the tools I rely on daily 
              to deliver high-quality work efficiently. Each tool has been battle-tested in real projects.
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

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search tools by name, category, or use case..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                </div>
                
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors min-w-[150px]"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                {/* Rating Filter */}
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors min-w-[150px]"
                >
                  <option value="all">All Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                </select>
              </div>
              
              {/* Results count */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredTools.length} of {tools.length} tools
                </p>
                
                {/* Clear filters */}
                {(searchQuery || selectedCategory !== "all" || selectedRating !== "all") && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedRating("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTools.map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="group bg-card border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Tool Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-1">
                        {tool.name}
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {tool.category}
                      </span>
                    </div>
                    <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="group/btn">
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(tool.rating)}
                    <span className="text-sm text-muted-foreground ml-2">
                      {tool.rating}/5
                    </span>
                  </div>

                  {/* Use Case */}
                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-1">Use Case</h4>
                    <p className="text-sm text-muted-foreground">{tool.useCase}</p>
                  </div>

                  {/* Notes */}
                  <div>
                    <h4 className="text-sm font-medium mb-1">Notes</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.notes}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* No results message */}
            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <Filter className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No tools found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search query or filters to find what you&apos;re looking for.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedRating("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Discover More Tools</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This is just a selection of my favorite tools. I&apos;m always exploring new technologies 
              and tools to improve my workflow. Check out my tech stack to see what I&apos;m currently using for development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tech-stack">
                <Button size="lg" className="w-full sm:w-auto">
                  View Tech Stack
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  See Projects in Action
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}