import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Building2, Shield, Radio, CheckCircle2, AlertTriangle, Heart, CloudRain } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Public Services & Emergency Response | Is Everyone Safe",
  description:
    "Crisis communication for government agencies, emergency responders, healthcare providers, and public services. Real-time alerts for citizens and staff.",
  keywords:
    "public services, emergency response, government alerts, healthcare communication, emergency services, public safety",
  openGraph: {
    title: "Public Services & Emergency Response | Is Everyone Safe",
    description: "Crisis communication for government agencies, emergency responders, and healthcare providers.",
    type: "website",
  },
}

export default function PublicServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
                <Shield className="h-4 w-4" />
                <span>Public Services Solutions</span>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Crisis Communication for Public Services & Emergency Response
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Empower government agencies, emergency responders, healthcare providers, and public services to
                communicate critical information to citizens and staff instantly.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/demo">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Alert Delivery Rate</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">&lt;60s</div>
                <div className="text-sm text-muted-foreground">Average Alert Time</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">2-Way</div>
                <div className="text-sm text-muted-foreground">Customer Confirmation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
                Pushing Out Alerts from Trusted Sources
              </h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Delivering real-time alerts from Met Office, Foreign Office, Environment Agency, and UK security
                services
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <Building2 className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Government Agencies</h3>
                <p className="text-muted-foreground">
                  Communicate with citizens and staff during emergencies, service disruptions, and critical updates from
                  local and national government bodies.
                </p>
              </Card>

              <Card className="p-6">
                <Radio className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Emergency Responders</h3>
                <p className="text-muted-foreground">
                  Coordinate fire, police, ambulance, and rescue services with real-time incident alerts and resource
                  deployment notifications.
                </p>
              </Card>

              <Card className="p-6">
                <Heart className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Healthcare Providers</h3>
                <p className="text-muted-foreground">
                  Alert patients and staff about service changes, health advisories, emergency department status, and
                  critical care updates.
                </p>
              </Card>

              <Card className="p-6">
                <CloudRain className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Environment Agency</h3>
                <p className="text-muted-foreground">
                  Distribute flood warnings, environmental hazards, and severe weather alerts to affected communities
                  and stakeholders.
                </p>
              </Card>

              <Card className="p-6">
                <AlertTriangle className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Met Office Integration</h3>
                <p className="text-muted-foreground">
                  Receive and relay official weather warnings, severe weather alerts, and meteorological updates to
                  citizens and organisations.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Citizen Safety</h3>
                <p className="text-muted-foreground">
                  Protect citizens with timely alerts about public safety threats, service disruptions, and emergency
                  response instructions.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Public Services Alert Scenarios</h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Emergency Response Coordination</h3>
                <p className="text-muted-foreground">
                  Coordinate multi-agency responses to major incidents, natural disasters, and public safety threats
                  with real-time updates to all responders and affected citizens.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Healthcare Service Alerts</h3>
                <p className="text-muted-foreground">
                  Notify patients of appointment changes, service disruptions, health advisories, and emergency
                  department wait times to manage capacity and patient flow.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Flood & Weather Warnings</h3>
                <p className="text-muted-foreground">
                  Distribute Environment Agency flood warnings and Met Office severe weather alerts to at-risk
                  communities and stakeholders.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Public Service Disruptions</h3>
                <p className="text-muted-foreground">
                  Communicate transport delays, facility closures, service interruptions, and alternative arrangements
                  to citizens and service users.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Public Health Emergencies</h3>
                <p className="text-muted-foreground">
                  Rapidly disseminate public health information, disease outbreak alerts, vaccination programmes, and
                  health protection advice to communities.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Security & Terror Threats</h3>
                <p className="text-muted-foreground">
                  Alert citizens and staff about security incidents, terror threat level changes, and safety
                  instructions from UK security services and government agencies.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
                Ready to Enhance Public Safety Communication?
              </h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Join government agencies, emergency services, and healthcare providers protecting citizens with Is
                Everyone Safe.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
