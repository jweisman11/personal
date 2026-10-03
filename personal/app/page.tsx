import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BenderArt } from "@/components/bender/bender-art";
import { TalkingBender } from "@/components/bender/talking-bender";
import { formatDate, getAllPosts } from "@/lib/blog";
import { SOCIAL_LINKS } from "@/lib/links";

const FACTS = [
  { label: "Day job", value: "Manager at Deloitte" },
  { label: "Experience", value: "13+ years in consulting & data science" },
  { label: "Path", value: "Accounting → data science → management" },
  { label: "Off the clock", value: "Building things, making videos, writing" },
];

export default function Home() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Hero */}
      <section className="grid items-center gap-16 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        <div className="space-y-6">
          <p className="inline-block -rotate-2 rounded-md bg-accent px-3 py-1 font-mono text-sm font-bold text-accent-foreground">
            hello, world.
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl">
            I&apos;m Jeff.
            <br />
            <span className="text-primary">This is my corner of the internet.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            A bit about me, plus a blog where I dump random thoughts. A slightly
            judgmental robot is in charge of the vibes.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/blog">
                Read the blog <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#about">About me</Link>
            </Button>
          </div>
        </div>

        <div className="pt-24">
          <TalkingBender>
            <BenderArt name="hero" pose="wave" alt="A Bender-style robot waving hello" />
          </TalkingBender>
        </div>
      </section>

      {/* Latest posts */}
      <section className="pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Latest thoughts</h2>
          <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
            All posts →
          </Link>
        </div>
        <ul className="divide-y rounded-xl border bg-card">
          {latest.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-accent/50 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-semibold">{post.title}</span>
                <time dateTime={post.date} className="font-mono text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 pb-24">
        <h2 className="mb-6 text-2xl font-bold">About me</h2>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              I&apos;m a consultant and data person who started out in accounting, wandered
              into data science, and ended up managing teams at Deloitte. I like turning
              messy problems into something useful.
            </p>
            <p>
              Outside of work I build side projects, make videos and write down whatever
              is rattling around in my head. This site is where it all ends up.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                <Button key={name} asChild variant="outline" size="sm">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon /> {name}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <dl className="space-y-4 rounded-xl border bg-card p-6">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
