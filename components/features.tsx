import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesProps {
  content?: {
    headline: string
    subheadline: string
    items: Array<{
      icon: string
      title: string
      description: string
    }>
  }
}

export function Features({ content }: FeaturesProps) {
  const defaultContent = {
    headline: "Everything you need to stay safe",
    subheadline:
      "Comprehensive crisis communication features designed for organisations and individuals who prioritise safety.",
    items: [
      {
        icon: "🔔",
        title: "Multi-Source Alerts",
        description:
          "Receive notifications from employers, schools, government agencies, and emergency services in one unified platform.",
      },
      {
        icon: "📍",
        title: "Location-Based Filtering",
        description:
          "Get alerts relevant to your current location and areas you care about. Stay informed about incidents that matter to you.",
      },
      {
        icon: "👥",
        title: "Role-Based Access",
        description:
          "Customised experiences for employees, students, event attendees, and citizens with appropriate alert types.",
      },
      {
        icon: "📢",
        title: "Broadcast & 2-Way Messaging",
        description:
          "Send broadcast-only messages when no response is required, or enable 2-way communication to receive confirmations and responses from recipients.",
      },
      {
        icon: "📱",
        title: "Cross-Platform",
        description: "Access alerts on web, iOS, and Android. Receive push notifications wherever you are.",
      },
      {
        icon: "⚡",
        title: "Instant Delivery",
        description: "60 second alert delivery ensures you receive critical information when every second counts.",
      },
    ],
  }

  const data = content || defaultContent

  return (
    <section id="features" className="border-b border-border py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">{data.subheadline}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((feature, index) => {
            return (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
