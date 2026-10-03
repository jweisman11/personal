import { SOCIAL_LINKS } from "@/lib/links"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} Jeff Weisman. Bender-style robot is an original drawing,
          not affiliated with Futurama.
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
