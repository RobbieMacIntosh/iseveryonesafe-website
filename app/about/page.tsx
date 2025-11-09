import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us | Is Everyone Safe - Why We Built This",
  description:
    "Learn why we built Is Everyone Safe. After managing incidents globally, we discovered safeguarding people was always the most challenging aspect.",
  openGraph: {
    title: "About Us | Is Everyone Safe",
    description: "Building better crisis communication for duty of care",
    url: "https://iseveryonesafe.com/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-muted/20 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                We&apos;re New & We&apos;re Honest About It
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Why We Built This</h1>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 md:p-12">
                <div className="space-y-6">
                  <p className="text-xl text-foreground leading-relaxed">
                    After managing incidents globally for years—from natural disasters to security threats to medical
                    emergencies and increasingly, cyber attacks—we discovered that effective crisis communication comes
                    down to four things:
                  </p>

                  <div className="text-center py-4">
                    <p className="text-2xl font-bold text-foreground">Warn. Inform. Connect. Locate.</p>
                  </div>

                  <div className="space-y-4 text-lg">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Warn</strong> people of immediate threats before they take
                      harmful action
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Inform</strong> people what to do to stay safe or prevent
                      further damage
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Connect</strong> with people to get their response and account
                      for everyone
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Locate</strong> people so you know where to send help when
                      they need it
                    </p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed italic">Sounds simple, right?</p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    But in every incident we managed, we struggled with all four:
                  </p>

                  <div className="space-y-2 text-lg text-muted-foreground pl-4">
                    <p>We couldn&apos;t warn people fast enough before they clicked malicious emails.</p>
                    <p>We couldn&apos;t inform everyone simultaneously when evacuation was needed.</p>
                    <p>We couldn&apos;t connect with people to confirm they&apos;d received critical instructions.</p>
                    <p>We couldn&apos;t locate lone workers who&apos;d stopped responding.</p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Traditional communication tools—email, WhatsApp, Slack, social media—simply weren&apos;t designed
                    for crisis moments when every second counts and you need absolute certainty about who&apos;s been
                    reached.
                  </p>

                  <p className="text-lg font-semibold text-foreground leading-relaxed">
                    That communication gap? It&apos;s what turns manageable incidents into disasters.
                  </p>

                  <p className="text-lg text-foreground leading-relaxed">
                    So we built what should have existed all along.
                  </p>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-semibold text-foreground">— Robbie MacIntosh & Clive White</p>
                    <p className="text-sm text-muted-foreground">Co-Founders, Is Everyone Safe</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Mission</h2>
              <div className="prose prose-lg max-w-none mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                  In a more uncertain world, with climate threat a reality, geo-political challenges abound, and social
                  unrest in front of us, we&apos;re embarking on a journey to make a difference for every citizen on the
                  planet.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                  Starting in the UK, we believe better informed people make better decisions about life. We intend to
                  provide trusted, real-time information to every citizen about conditions, events and situations that
                  might impact our ability to go about our lives easily and safely.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Trust</h3>
                  <p className="text-muted-foreground">
                    We provide verified, accurate information from trusted sources including emergency services,
                    government agencies, and authorised organisations.
                  </p>
                </Card>
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Speed</h3>
                  <p className="text-muted-foreground">
                    In a crisis, every second counts. Our platform delivers real-time alerts instantly to keep people
                    informed and safe.
                  </p>
                </Card>
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Everyone deserves access to critical information. Our platform works across all devices and is
                    designed for universal accessibility.
                  </p>
                </Card>
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Resilience</h3>
                  <p className="text-muted-foreground">
                    We&apos;re building infrastructure that works when it matters most, even during major incidents when
                    other systems may fail.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who We Serve</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/solutions/workplace"
                  className="group p-6 border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary text-foreground">Workplace</h3>
                  <p className="text-muted-foreground">
                    Protect your workforce with instant emergency alerts and workplace safety communications.
                  </p>
                </Link>
                <Link
                  href="/solutions/education"
                  className="group p-6 border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary text-foreground">Education</h3>
                  <p className="text-muted-foreground">
                    Keep students, staff, and parents informed during campus emergencies and critical situations.
                  </p>
                </Link>
                <Link
                  href="/solutions/events"
                  className="group p-6 border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary text-foreground">Events</h3>
                  <p className="text-muted-foreground">
                    Manage crowd safety and communicate with attendees during events and emergencies.
                  </p>
                </Link>
                <Link
                  href="/solutions/public-services"
                  className="group p-6 border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary text-foreground">Public Services</h3>
                  <p className="text-muted-foreground">
                    Government agencies, emergency responders, and healthcare providers keeping citizens safe.
                  </p>
                </Link>
                <Link
                  href="/solutions/service-providers"
                  className="group p-6 border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary text-foreground">Service Providers</h3>
                  <p className="text-muted-foreground">
                    Utilities, airlines, and service companies communicating effectively with customers.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Early Adopter Programme</h2>
              <p className="text-xl mb-8 opacity-90">
                Be part of building better crisis communication. Get 20% off for life as a founding customer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/landing-test#early-adopter">Apply Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/blog">Read Our Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
