"use client"

import { useEffect } from "react"
import { initAnalytics, initPerformance } from "@/lib/firebase"

export function Analytics() {
  useEffect(() => {
    initAnalytics()
    initPerformance()
  }, [])

  return null
}
