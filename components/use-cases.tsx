import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface UseCasesProps {
  content?: {
    headline: string
    subheadline: string
    items: Array<{
      icon: string
      title: string
      description: string
      link: string
    }>
  }
}

export function UseCases({ content }: UseCasesProps) {
  const defaultContent = {
    headline: "Built for everyone who values safety",
    subheadline:
      "Whether you're at work, school, an event, or in your community, Is Everyone Safe keeps you informed and protected.",
    items: [
      {
        icon: "🏢",
        title: "Employers and Employees",
        description:
          "Workplace emergencies, lone worker safety, building evacuations, security threats, weather alerts, and operational updates.",
        link: "/solutions/workplace",
      },
      {
        icon: "🎓",
        title: "Students & Faculty",
        description: "Campus safety alerts, emergency notifications, class cancellations, and security updates.",
        link: "/solutions/education",
      },
      {
        icon: "📅",
        title: "Event Attendees",
        description: "Real-time updates for conferences, concerts, sports events, and large gatherings.",
        link: "/solutions/events",
      },
      {
        icon: "⚡",
        title: "Service Providers",
        description:
          "Customer communication for utilities, airlines, and service companies. Alert customers to outages, delays, and service restoration.",
        link: "/solutions/service-providers",
      },
      {
        icon: "🏛️",
        title: "Public Services",
        description:
          "Government agencies, emergency responders, healthcare providers, Environment Agency, Met Office, and public safety organizations.",
        link: "/solutions/public-services",
      },
    ],
  }

  const data = content || defaultContent

  return (
    <section id="use-cases" className="border-b border-border bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">{data.subheadline}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {data.items.map((useCase, index) => {
            return (
              <Link key={index} href={useCase.link}>
                <Card className="border-border transition-all hover:border-accent hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-3xl">
                      {useCase.icon}
                    </div>
                    <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
