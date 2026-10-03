import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { SOCIAL_LINKS } from "@/lib/links"

const navigationItems = [
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/blog" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight hover:text-primary">
          Jeff Weisman<span className="text-primary">_</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.name}
            </Link>
          ))}
          <div className="mx-1 hidden h-6 w-px bg-border sm:block" />
          <div className="hidden items-center sm:flex">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="size-[1.1rem]" />
                <span className="sr-only">{name}</span>
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
