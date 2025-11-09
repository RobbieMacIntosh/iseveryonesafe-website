import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Zap, MessageSquare, CheckCircle2, Clock, Users, Bell } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Service Provider Customer Communication | Is Everyone Safe",
  description:
    "Enhance customer communication for utilities, airlines, and service companies. Alert customers to outages, delays, and service restoration with real-time notifications.",
  keywords:
    "customer communication, utility alerts, airline notifications, service outages, customer notifications, service restoration",
  openGraph: {
    title: "Service Provider Customer Communication | Is Everyone Safe",
    description: "Real-time customer communication for utilities, airlines, and service companies.",
    type: "website",
  },
}

export default function ServiceProvidersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
                <Zap className="h-4 w-4" />
                <span>Service Provider Solutions</span>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Communicate More Effectively with Your Customers
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Keep customers informed during service disruptions, delays, and restorations. Build trust through
                transparent, real-time communication.
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
                <div className="text-sm text-muted-foreground">Message Delivery Rate</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">&lt;60s</div>
                <div className="text-sm text-muted-foreground">Average Notification Time</div>
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
                Why Service Providers Choose Is Everyone Safe
              </h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Comprehensive customer communication designed for modern service providers
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <MessageSquare className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Proactive Communication</h3>
                <p className="text-muted-foreground">
                  Alert customers before they experience issues. Notify them of planned maintenance, service
                  disruptions, and expected resolution times.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Service Restoration Confirmation</h3>
                <p className="text-muted-foreground">
                  Get positive confirmation from customers that service has been restored, reducing unnecessary support
                  calls and site visits.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Targeted Notifications</h3>
                <p className="text-muted-foreground">
                  Send location-based alerts to only affected customers, reducing notification fatigue and improving
                  customer experience.
                </p>
              </Card>

              <Card className="p-6">
                <Clock className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Real-Time Updates</h3>
                <p className="text-muted-foreground">
                  Keep customers informed with live status updates as situations evolve, from initial outage to full
                  restoration.
                </p>
              </Card>

              <Card className="p-6">
                <Bell className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Reduce Support Volume</h3>
                <p className="text-muted-foreground">
                  Decrease inbound calls and support tickets by proactively informing customers about service issues and
                  resolutions.
                </p>
              </Card>

              <Card className="p-6">
                <Zap className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Multi-Channel Delivery</h3>
                <p className="text-muted-foreground">
                  Reach customers through their preferred channels with consistent messaging across all platforms.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Common Service Provider Scenarios</h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Utility Outages</h3>
                <p className="text-muted-foreground">
                  Alert customers to power, water, or gas outages with estimated restoration times. Get confirmation
                  when service is restored to reduce unnecessary field visits.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Airline Delays & Cancellations</h3>
                <p className="text-muted-foreground">
                  Notify passengers of flight delays, gate changes, or cancellations due to weather, technical issues,
                  or system outages. Provide rebooking information and updates.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Planned Maintenance</h3>
                <p className="text-muted-foreground">
                  Inform customers in advance of scheduled maintenance windows, expected service interruptions, and
                  completion times.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">System Outages</h3>
                <p className="text-muted-foreground">
                  Communicate IT system outages, online service disruptions, or payment processing issues with real-time
                  status updates.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Emergency Service Disruptions</h3>
                <p className="text-muted-foreground">
                  Rapidly notify customers of unexpected service interruptions due to accidents, natural disasters, or
                  infrastructure failures.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Service Quality Issues</h3>
                <p className="text-muted-foreground">
                  Alert customers to temporary service degradation, reduced capacity, or quality issues with transparent
                  communication about resolution efforts.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="border-t border-border py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Industries We Serve</h2>
            </div>

            <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Utilities</h3>
                <p className="text-muted-foreground">
                  Electric, gas, water, telecommunications, and internet service providers
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Transportation</h3>
                <p className="text-muted-foreground">Airlines, railways, bus services, and logistics companies</p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Financial Services</h3>
                <p className="text-muted-foreground">Banks, payment processors, and financial technology platforms</p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Technology Services</h3>
                <p className="text-muted-foreground">Cloud providers, SaaS platforms, and IT service companies</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
                Ready to Improve Customer Communication?
              </h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Join leading service providers using Is Everyone Safe to keep customers informed and satisfied.
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
