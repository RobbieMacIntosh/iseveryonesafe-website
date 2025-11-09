export function formatBlogContent(content: string): string {
  // Split content into lines
  const lines = content.trim().split("\n")
  const formatted: string[] = []
  let inList = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Skip empty lines
    if (!line) {
      // Close list if we were in one
      if (inList) {
        formatted.push("</ul>")
        inList = false
      }
      continue
    }

    // Handle H2 headings (##)
    if (line.startsWith("## ")) {
      if (inList) {
        formatted.push("</ul>")
        inList = false
      }
      const heading = line.substring(3).trim()
      formatted.push(`<h2 class="text-3xl font-bold mt-12 mb-6 tracking-tight">${heading}</h2>`)
      continue
    }

    // Handle H3 headings (###)
    if (line.startsWith("### ")) {
      if (inList) {
        formatted.push("</ul>")
        inList = false
      }
      const heading = line.substring(4).trim()
      formatted.push(`<h3 class="text-2xl font-bold mt-8 mb-4 tracking-tight">${heading}</h3>`)
      continue
    }

    // Handle bullet points (-)
    if (line.startsWith("- ")) {
      if (!inList) {
        formatted.push('<ul class="mb-6 list-disc pl-6 space-y-2">')
        inList = true
      }
      const item = line.substring(2).trim()
      const formattedItem = formatInlineStyles(item)
      formatted.push(`<li class="text-foreground/90">${formattedItem}</li>`)
      continue
    }

    // Handle regular paragraphs
    if (inList) {
      formatted.push("</ul>")
      inList = false
    }
    const formattedLine = formatInlineStyles(line)
    formatted.push(`<p class="mb-6 leading-relaxed text-foreground/90">${formattedLine}</p>`)
  }

  // Close list if still open
  if (inList) {
    formatted.push("</ul>")
  }

  return formatted.join("\n")
}

function formatInlineStyles(text: string): string {
  // Handle bold text (**text**)
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')

  // Handle italic text (*text*)
  text = text.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')

  return text
}
