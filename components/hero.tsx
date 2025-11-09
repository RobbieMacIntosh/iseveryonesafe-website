import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroProps {
  content?: {
    headline: string
    subheadline: string
    primaryCta: string
    secondaryCta: string
  }
}

export function Hero({ content }: HeroProps) {
  const defaultContent = {
    headline: "Stay safe and informed during critical moments",
    subheadline:
      "Real-time crisis and incident alerts from your employer, educational institution, government agencies, and emergency responders—all in one place.",
    primaryCta: "Get Started Free",
    secondaryCta: "Learn More",
  }

  const data = content || defaultContent

  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {data.headline}
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl lg:text-2xl">{data.subheadline}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://app.iseveryonesafe.com/signing_or_signup_app">{data.primaryCta}</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="/#features">{data.secondaryCta}</Link>
            </Button>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              <div className="relative">
                <img
                  src="/alert-listing.png"
                  alt="Is Everyone Safe app showing alert listings"
                  className="rounded-lg shadow-2xl border border-border w-full h-auto"
                />
              </div>
              <div className="relative">
                <img
                  src="/groups-location.png"
                  alt="Is Everyone Safe app showing groups and location search"
                  className="rounded-lg shadow-2xl border border-border w-full h-auto"
                />
              </div>
              <div className="relative">
                <img
                  src="/threat-level-modal.png"
                  alt="Is Everyone Safe app showing UK threat level information"
                  className="rounded-lg shadow-2xl border border-border w-full h-auto"
                />
              </div>
              <div className="relative">
                <img
                  src="/alert-feed.png"
                  alt="Is Everyone Safe app showing FCDO travel alerts"
                  className="rounded-lg shadow-2xl border border-border w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
