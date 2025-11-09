import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GraduationCap, Shield, Users, Bell, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education & Campus Safety Alerts | Is Everyone Safe",
  description:
    "Keep students, faculty, and staff safe with instant campus alerts, emergency notifications, and crisis communication for schools, colleges, and universities.",
  keywords:
    "campus safety, school alerts, student notifications, education emergency alerts, campus security, university safety",
  openGraph: {
    title: "Education & Campus Safety Alerts | Is Everyone Safe",
    description: "Keep students and faculty safe with instant campus alerts and emergency notifications.",
    type: "website",
  },
}

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
                <GraduationCap className="h-4 w-4" />
                <span>Education Safety Solutions</span>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Campus-Wide Safety Communication for Educational Institutions
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                From nursery to university, ensure every student, faculty member, and staff receives critical safety
                alerts instantly.
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
                Comprehensive Campus Safety Solutions
              </h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Purpose-built for the unique needs of educational environments
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Multi-Campus Support</h3>
                <p className="text-muted-foreground">
                  Manage alerts across multiple campuses, buildings, and facilities from a single platform.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Parent Notifications</h3>
                <p className="text-muted-foreground">
                  Automatically notify parents and guardians during emergencies with real-time updates.
                </p>
              </Card>

              <Card className="p-6">
                <Bell className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Class-Specific Alerts</h3>
                <p className="text-muted-foreground">
                  Target specific classes, departments, or residence halls with relevant safety information.
                </p>
              </Card>

              <Card className="p-6">
                <GraduationCap className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Event Management</h3>
                <p className="text-muted-foreground">
                  Communicate schedule changes, closures, and important updates for campus events.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Compliance Reporting</h3>
                <p className="text-muted-foreground">
                  Meet UK education safety requirements with comprehensive audit trails and documentation for Ofsted and
                  local authority compliance.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Campus Alert Scenarios</h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Campus Security Threats</h3>
                <p className="text-muted-foreground">
                  Instantly alert the entire campus about security incidents with lockdown procedures and safety
                  instructions.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Weather Closures</h3>
                <p className="text-muted-foreground">
                  Notify students, faculty, and parents about school closures, delays, or early dismissals due to
                  weather.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Health & Wellness Alerts</h3>
                <p className="text-muted-foreground">
                  Communicate health advisories, outbreak information, and wellness resources to the campus community.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Facility Emergencies</h3>
                <p className="text-muted-foreground">
                  Coordinate evacuations and provide updates during fires, gas leaks, or other building emergencies.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Protect Your Campus Community</h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Join nurseries, schools, colleges, and universities keeping their students safe with Is Everyone Safe.
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
