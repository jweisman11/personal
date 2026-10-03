import type { ComponentType, SVGProps } from "react"
import { Github, Linkedin, Youtube } from "@/components/brand-icons"

export const SOCIAL_LINKS: {
  name: string
  href: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}[] = [
  { name: "GitHub", href: "https://github.com/jweisman11", Icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jeff-weisman-050a322b/", Icon: Linkedin },
  { name: "YouTube", href: "https://www.youtube.com/@jeff-wizard-11", Icon: Youtube },
]
