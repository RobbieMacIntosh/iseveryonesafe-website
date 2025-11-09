interface StatsProps {
  content?: Array<{
    value: string
    label: string
    description: string
  }>
}

export function Stats({ content }: StatsProps) {
  const defaultStats = [
    {
      value: "< 60s",
      label: "Average alert delivery time",
      description: "Critical alerts reach users instantly",
    },
    {
      value: "99.9%",
      label: "Platform uptime",
      description: "Always available when you need it most",
    },
  ]

  const stats = content || defaultStats

  return (
    <section className="border-b border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">{stat.value}</div>
              <div className="mb-1 text-sm font-medium">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
