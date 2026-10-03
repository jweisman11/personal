"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const QUIPS = [
  "Hey, sacks of meat. Welcome to my human's site.",
  "Click me again. I dare you.",
  "I'm 40% blogging, 60% procrastinating.",
  "This site is great. Mostly because I'm on it.",
  "Read the blog. Or don't. See if I care.",
  "Bite my shiny metal... scroll bar.",
]

/** Click the robot (passed in as children) to make it hop and say something new. */
export function TalkingBender({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0)
  const [hopKey, setHopKey] = useState(0)

  const next = () => {
    setIndex((i) => (i + 1) % QUIPS.length)
    setHopKey((k) => k + 1)
  }

  return (
    <div className="relative mx-auto w-56 sm:w-64 lg:w-72">
      <p
        key={index}
        aria-live="polite"
        className="animate-in fade-in zoom-in-95 absolute -top-2 left-1/2 z-10 w-60 -translate-x-1/2 -translate-y-full rounded-2xl border bg-card px-4 py-3 text-center text-sm font-medium shadow-md duration-300 sm:text-base"
      >
        {QUIPS[index]}
        <span className="absolute -bottom-2 left-1/2 size-4 -translate-x-1/2 rotate-45 border-r border-b bg-card" />
      </p>
      <button
        type="button"
        onClick={next}
        aria-label="Make the robot say something"
        className="block w-full cursor-pointer rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <div key={hopKey} className={cn(hopKey > 0 && "bender-hop")}>
          {children}
        </div>
      </button>
    </div>
  )
}
