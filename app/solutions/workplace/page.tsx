import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Building2, Shield, Users, Clock, CheckCircle2, AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Workplace Safety & Crisis Communication | Is Everyone Safe",
  description:
    "Keep your employees safe with real-time workplace alerts, emergency notifications, and crisis communication. Trusted by leading organizations for workplace safety.",
  keywords:
    "workplace safety, employee alerts, crisis communication, emergency notifications, workplace security, business continuity",
  openGraph: {
    title: "Workplace Safety & Crisis Communication | Is Everyone Safe",
    description: "Keep your employees safe with real-time workplace alerts and emergency notifications.",
    type: "website",
  },
}

export default function WorkplacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
                <Building2 className="h-4 w-4" />
                <span>Workplace Safety Solutions</span>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Protect Your Workforce with Real-Time Crisis Alerts
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                From active threats to severe weather, ensure every employee receives critical safety information
                instantly, no matter where they work.
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
                Why Leading Organisations Choose Is Everyone Safe
              </h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Comprehensive workplace safety communication designed for modern businesses
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Multi-Site Coverage</h3>
                <p className="text-muted-foreground">
                  Protect employees across multiple locations with location-based targeting and geo-fencing
                  capabilities.
                </p>
              </Card>

              <Card className="p-6">
                <AlertTriangle className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Emergency Response</h3>
                <p className="text-muted-foreground">
                  Activate emergency protocols instantly with pre-configured alert templates for various crisis
                  scenarios.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Two-Way Communication</h3>
                <p className="text-muted-foreground">
                  Enable employees to confirm safety status and report incidents directly through the platform.
                </p>
              </Card>

              <Card className="p-6">
                <Clock className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Shift-Based Alerts</h3>
                <p className="text-muted-foreground">
                  Target specific shifts, departments, or teams with relevant safety information and updates.
                </p>
              </Card>

              <Card className="p-6">
                <Building2 className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Business Continuity</h3>
                <p className="text-muted-foreground">
                  Maintain operations during disruptions with automated notifications about closures and schedule
                  changes.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Compliance Ready</h3>
                <p className="text-muted-foreground">
                  Meet OSHA and workplace safety regulations with comprehensive audit trails and reporting.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Common Workplace Alert Scenarios</h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Active Threat Situations</h3>
                <p className="text-muted-foreground">
                  Immediately notify all employees of security threats with lockdown procedures and safety instructions.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Cyber Attacks & Data Breaches</h3>
                <p className="text-muted-foreground">
                  Rapidly communicate security incidents, system compromises, and required actions such as password
                  resets or system shutdowns to protect company data and infrastructure.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Severe Weather Events</h3>
                <p className="text-muted-foreground">
                  Alert employees about approaching storms, facility closures, and shelter-in-place protocols.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Facility Emergencies</h3>
                <p className="text-muted-foreground">
                  Coordinate evacuations for fires, gas leaks, or other building emergencies with real-time updates.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Health & Safety Alerts</h3>
                <p className="text-muted-foreground">
                  Communicate health advisories, exposure notifications, and safety protocol updates.
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
                Ready to Enhance Your Workplace Safety?
              </h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Join organisations protecting their employees with Is Everyone Safe.
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
