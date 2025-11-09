import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTAProps {
  content?: {
    headline: string
    description: string
    buttonText: string
  }
}

export function CTA({ content }: CTAProps) {
  const defaultContent = {
    headline: "Ready to enhance your safety communication?",
    description:
      "Join organisations and individuals who trust Is Everyone Safe to keep them informed during critical moments.",
    buttonText: "Start Free Trial",
  }

  const data = content || defaultContent

  return (
    <section className="border-b border-border py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">{data.description}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/signup">{data.buttonText}</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
