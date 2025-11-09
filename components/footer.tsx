import Link from "next/link"
import Image from "next/image"

export async function Footer() {
  const defaultContent = {
    tagline: "Keeping communities safe through intelligent incident communication.",
    sections: [
      {
        title: "Product",
        links: [
          { label: "Features", url: "#features" },
          { label: "Use Cases", url: "#use-cases" },
          { label: "Pricing", url: "/pricing" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", url: "/about" },
          { label: "Blog", url: "/blog" },
          { label: "Contact", url: "/contact" },
          { label: "Careers", url: "/careers" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", url: "/privacy" },
          { label: "Terms of Service", url: "/terms" },
          { label: "Security", url: "/security" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Is Everyone Safe. All rights reserved.`,
  }

  const data = defaultContent

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image src="/ies-logo.svg" alt="Is Everyone Safe" width={36} height={36} className="h-9 w-9" />
              <span className="text-xl font-semibold">Is Everyone Safe</span>
            </Link>
            <p className="text-sm text-muted-foreground">{data.tagline}</p>
          </div>

          {data.sections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-3 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.url} className="text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>{data.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
