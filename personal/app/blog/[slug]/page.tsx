import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Jeff Weisman's Blog`,
    description: post.excerpt || `Read ${post.title} by Jeff Weisman`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Estimate reading time (rough calculation: 200 words per minute)
  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
    const wordCount = textContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  const readingTime = estimateReadingTime(post.content);

  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="text-center mb-12 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  {post.category}
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{readingTime} min read</span>
                  </div>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    <div className="flex flex-wrap gap-2 justify-center">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium border border-accent/30"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="[&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-12 [&>h1]:mb-6
                          [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-10 [&>h2]:mb-4
                          [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3
                          [&>p]:mb-6 [&>p]:leading-relaxed
                          [&>ul]:mb-6 [&>ul]:space-y-2
                          [&>ol]:mb-6 [&>ol]:space-y-2
                          [&>li]:leading-relaxed
                          [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:my-6
                          [&>pre]:bg-accent/20 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-6
                          [&>code]:bg-accent/30 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono
                          [&>pre_code]:bg-transparent [&>pre_code]:p-0 [&>pre_code]:text-sm
                          [&>hr]:my-8 [&>hr]:border-border
                          [&>a]:text-primary [&>a]:underline [&>a]:decoration-primary/30 [&>a:hover]:decoration-primary
                          [&>strong]:font-semibold
                          [&>em]:italic"
              />
            </div>
          </div>
        </div>
      </article>

      {/* Article Footer */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Author Bio */}
            <div className="bg-card border rounded-xl p-8 mb-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">JW</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Jeff Weisman</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Manager at Deloitte with 13+ years of experience in consulting and data science. 
                    Passionate about helping organizations transform through strategic insights and innovative solutions.
                  </p>
                  <div className="flex gap-3">
                    <Link href="https://www.linkedin.com/in/jeff-weisman-050a322b/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        LinkedIn
                      </Button>
                    </Link>
                    <Link href="https://github.com/jweisman11" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        GitHub
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Link href="/blog">
                <Button variant="outline" className="w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All Blog Posts
                </Button>
              </Link>
              <div className="flex gap-2">
                <Link href="/projects">
                  <Button variant="outline" size="sm">
                    View Projects
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="sm">
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}