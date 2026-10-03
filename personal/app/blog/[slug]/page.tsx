import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BenderArt } from "@/components/bender/bender-art";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post ? `${post.title} | Jeff Weisman` : "Post not found" };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" /> All posts
      </Link>

      <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
      <time dateTime={post.date} className="mt-3 block font-mono text-sm text-muted-foreground">
        {formatDate(post.date)}
      </time>

      <div className="prose-post mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="mt-16 flex items-center gap-4 border-t pt-8 text-muted-foreground">
        <div className="w-16 shrink-0">
          <BenderArt name="post-footer" alt="A Bender-style robot" />
        </div>
        <p className="text-sm">That&apos;s the post. Go do something productive. Or don&apos;t.</p>
      </div>
    </article>
  );
}
