import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Shield, Users, MapPin, CheckCircle2, Radio } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Event & Venue Safety Communication | Is Everyone Safe",
  description:
    "Keep event attendees safe with real-time alerts and emergency notifications for concerts, sports venues, conferences, and large gatherings.",
  keywords:
    "event safety, venue alerts, crowd management, event notifications, concert safety, stadium alerts, conference communication",
  openGraph: {
    title: "Event & Venue Safety Communication | Is Everyone Safe",
    description: "Keep event attendees safe with real-time alerts and emergency notifications.",
    type: "website",
  },
}

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Event & Venue Solutions</span>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Real-Time Safety Communication for Events & Venues
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                From concerts to conferences, ensure every attendee receives critical safety information and updates
                instantly.
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
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Purpose-Built for Events & Venues</h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Comprehensive safety communication for any size gathering
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <MapPin className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Zone-Based Alerts</h3>
                <p className="text-muted-foreground">
                  Target specific sections, floors, or areas of your venue with location-based notifications.
                </p>
              </Card>

              <Card className="p-6">
                <Radio className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Real-Time Updates</h3>
                <p className="text-muted-foreground">
                  Send instant updates about schedule changes, delays, or important announcements to attendees.
                </p>
              </Card>

              <Card className="p-6">
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Emergency Evacuation</h3>
                <p className="text-muted-foreground">
                  Coordinate safe evacuations with clear instructions and real-time guidance for attendees.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Crowd Management</h3>
                <p className="text-muted-foreground">
                  Manage crowd flow and reduce congestion with targeted notifications and wayfinding alerts.
                </p>
              </Card>

              <Card className="p-6">
                <Calendar className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Multi-Event Support</h3>
                <p className="text-muted-foreground">
                  Manage multiple simultaneous events with separate alert channels and attendee groups.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Opt-In Registration</h3>
                <p className="text-muted-foreground">
                  Easy attendee registration via QR codes, URL links, or mobile app enrolment.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Event Alert Scenarios</h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Security Incidents</h3>
                <p className="text-muted-foreground">
                  Quickly alert attendees about security concerns and provide clear safety instructions and evacuation
                  routes.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Weather Emergencies</h3>
                <p className="text-muted-foreground">
                  Notify attendees about severe weather, event delays, or venue changes due to weather conditions.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Medical Emergencies</h3>
                <p className="text-muted-foreground">
                  Coordinate medical response and guide attendees away from affected areas during medical incidents.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Schedule Changes</h3>
                <p className="text-muted-foreground">
                  Keep attendees informed about performance times, speaker changes, or event schedule modifications.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Lost & Found</h3>
                <p className="text-muted-foreground">
                  Help reunite separated groups and assist with lost children or belongings through targeted alerts.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Venue Types */}
        <section className="border-t border-border py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Suitable for All Venue Types</h2>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Sports Stadiums & Arenas</h3>
                <p className="text-sm text-muted-foreground">Professional and collegiate sports venues</p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Concert Halls & Theaters</h3>
                <p className="text-sm text-muted-foreground">Music venues and performing arts centers</p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Convention Centers</h3>
                <p className="text-sm text-muted-foreground">Trade shows, conferences, and exhibitions</p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Outdoor Festivals</h3>
                <p className="text-sm text-muted-foreground">Music festivals, fairs, and outdoor events</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Enhance Your Event Safety</h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Join venues and event organisers keeping their attendees safe with Is Everyone Safe.
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
