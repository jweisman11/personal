"use client"

import * as React from "react"
import { Moon, Sun, Palette, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const themes = [
  { name: "Light", value: "light", icon: Sun },
  { name: "Dark", value: "dark", icon: Moon },
  { name: "System", value: "system", icon: Monitor },
]

const colorPalettes = [
  { name: "Default", value: "default", color: "#09090b" },
  { name: "Emerald", value: "emerald", color: "#059669" },
  { name: "Blue", value: "blue", color: "#3b82f6" },
  { name: "Violet", value: "violet", color: "#8b5cf6" },
  { name: "Rose", value: "rose", color: "#f43f5e" },
  { name: "Orange", value: "orange", color: "#f97316" },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [colorPalette, setColorPalette] = React.useState("default")

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorPalette)
  }, [colorPalette])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          Theme Mode
        </DropdownMenuLabel>
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className={theme === themeOption.value ? "bg-accent" : ""}
            >
              <Icon className="h-4 w-4 mr-2" />
              {themeOption.name}
            </DropdownMenuItem>
          )
        })}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Color Palette
        </DropdownMenuLabel>
        {colorPalettes.map((palette) => (
          <DropdownMenuItem
            key={palette.value}
            onClick={() => setColorPalette(palette.value)}
            className={colorPalette === palette.value ? "bg-accent" : ""}
          >
            <div 
              className="h-4 w-4 rounded-full mr-2 border border-border"
              style={{ backgroundColor: palette.color }}
            />
            {palette.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}