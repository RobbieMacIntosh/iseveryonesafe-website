"use client"

import { useEffect } from "react"

export function BlogScrollHandler() {
  useEffect(() => {
    // Scroll to the article title section when the page loads
    const titleSection = document.getElementById("article-title")
    if (titleSection) {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        titleSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }, [])

  return null
}
