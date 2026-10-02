import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Calendar, Tag, ArrowRight } from "lucide-react";
import { getAllBlogPosts, getAllTags, getAllCategories } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const tags = getAllTags();
  const categories = getAllCategories();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <BookOpen className="w-4 h-4" />
                Blog Posts
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                My <span className="text-primary">Blog</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
                Technical insights, personal thoughts, and learning experiences
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Welcome to my blog where I share insights from my journey through data science, consulting, 
              and technology. Here you&apos;ll find practical tutorials, career reflections, and thoughts on the latest trends.
            </p>

            {/* Blog Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{posts.length}</div>
                <div className="text-sm text-muted-foreground">Posts</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{categories.length}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{tags.length}</div>
                <div className="text-sm text-muted-foreground">Tags</div>
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

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {posts.length > 0 ? (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article 
                    key={post.slug}
                    className="group bg-card border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col space-y-4">
                      {/* Post Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors cursor-pointer leading-tight">
                              {post.title}
                            </h2>
                          </Link>
                          
                          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <time dateTime={post.date}>
                                {formatDate(post.date)}
                              </time>
                            </div>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="group/btn">
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>

                      {/* Post Excerpt */}
                      {post.excerpt && (
                        <p className="text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Post Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex items-center gap-2 pt-4 border-t border-border">
                          <Tag className="w-4 h-4 text-muted-foreground" />
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-accent/50 text-accent-foreground rounded-md text-xs font-medium hover:bg-accent/70 transition-colors cursor-pointer"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No blog posts yet</h3>
                <p className="text-muted-foreground mb-6">
                  I&apos;m working on some great content. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories & Tags Section */}
      {(categories.length > 0 || tags.length > 0) && (
        <section className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Categories */}
                {categories.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <span
                          key={category}
                          className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {tags.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.slice(0, 10).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-2 bg-accent/50 text-accent-foreground rounded-lg text-sm font-medium border border-accent/30 hover:bg-accent/70 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Want to stay in the loop? Follow me on social media for the latest updates, 
              behind-the-scenes content, and quick insights between blog posts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.linkedin.com/in/jeff-weisman-050a322b/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto">
                  Follow on LinkedIn
                </Button>
              </Link>
              <Link href="https://youtube.com/@jeffweisman" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Subscribe on YouTube
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
