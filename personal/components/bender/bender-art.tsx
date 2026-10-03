import fs from "node:fs"
import path from "node:path"
import { Bender } from "@/components/bender/bender"
import { cn } from "@/lib/utils"

const EXTENSIONS = ["gif", "webp", "png", "jpg", "svg"]

function findImage(name: string): string | null {
  const dir = path.join(process.cwd(), "public", "bender")
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(dir, `${name}.${ext}`))) return `/bender/${name}.${ext}`
  }
  return null
}

interface BenderArtProps {
  /** Looks for public/bender/<name>.(gif|webp|png|jpg|svg); falls back to the SVG robot. */
  name: string
  alt: string
  pose?: "idle" | "wave"
  className?: string
}

/**
 * Slot for Bender art. A file named after `name` in public/bender/ is picked
 * up automatically at build time; otherwise the built-in animated SVG renders.
 */
export function BenderArt({ name, alt, pose, className }: BenderArtProps) {
  const src = findImage(name)

  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={cn("h-auto w-full object-contain", className)} />
  }

  return <Bender pose={pose} title={alt} className={className} />
}
