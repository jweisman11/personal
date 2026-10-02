"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Youtube, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigationItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Blog", href: "/blog" },
  { name: "Tools", href: "/tools" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6 mx-auto max-w-7xl">
        
        {/* Left side - Logo/Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <span className="text-xl font-bold tracking-tight">
              Jeff Weisman
            </span>
          </Link>
        </div>

        {/* Right side - Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-2">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        pathname === item.href && "bg-accent text-accent-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="h-6 w-px bg-border mx-2" />
          <Link href="https://github.com/jweisman11/personal-site" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@jeff-wizard-11" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Youtube className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">YouTube</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/jeff-weisman-050a322b/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Linkedin className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <div className="h-6 w-px bg-border mx-2" />
          <ThemeToggle />
        </div>
        
        {/* Right side - Mobile menu button and theme toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <Link href="https://github.com/jweisman11/personal-site" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@jeff-wizard-11" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Youtube className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">YouTube</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/jeff-weisman-050a322b/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Linkedin className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <div className="h-6 w-px bg-border mx-2" />
          <ThemeToggle />
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
            <svg
              className="h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}