import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Jeff Weisman",
  description: "Random thoughts, written down.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-4xl font-bold sm:text-5xl">
        Random <span className="text-primary">thoughts</span>
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Unfiltered, unpolished and occasionally correct.
      </p>

      <ul className="mt-10 divide-y rounded-xl border bg-card">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-accent/50 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="text-lg font-semibold">{post.title}</span>
              <time dateTime={post.date} className="font-mono text-sm text-muted-foreground">
                {formatDate(post.date)}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
