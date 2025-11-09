import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Careers | Is Everyone Safe - Join Our Mission",
  description:
    "Join Is Everyone Safe in building a more resilient society. Explore career opportunities and help us provide trusted crisis communication to communities across the UK.",
  openGraph: {
    title: "Careers | Is Everyone Safe",
    description: "Join our mission to build a more resilient society through trusted crisis communication",
    url: "https://iseveryonesafe.com/careers",
  },
}

export default function CareersPage() {
  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with equity options for all employees.",
    },
    {
      title: "Flexible Working",
      description: "Hybrid and remote options available. Work from home or our offices in London and Manchester.",
    },
    {
      title: "Health & Wellbeing",
      description: "Comprehensive private healthcare, mental health support, and wellness programmes.",
    },
    {
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and professional development opportunities.",
    },
    {
      title: "Generous Holiday",
      description: "25 days annual leave plus bank holidays, with additional days for long service.",
    },
    {
      title: "Pension Scheme",
      description: "Employer-matched pension contributions to help you plan for the future.",
    },
  ]

  const values = [
    {
      title: "Mission-Driven",
      description:
        "We're building technology that saves lives. Every line of code, every design decision, every customer interaction contributes to a more resilient society.",
    },
    {
      title: "Collaborative Culture",
      description:
        "We believe the best solutions come from diverse perspectives. Our team works together across disciplines to solve complex challenges.",
    },
    {
      title: "Innovation & Impact",
      description:
        "We move fast and iterate quickly. You'll have the autonomy to make decisions and see the direct impact of your work on communities across the UK.",
    },
    {
      title: "Work-Life Balance",
      description:
        "We're in this for the long haul. Sustainable pace, flexible working, and respect for personal time are core to how we operate.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-muted/20 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Build the Future of Crisis Communication
              </h1>
              <p className="text-xl text-muted-foreground text-balance mb-8">
                Join our mission to provide trusted, real-time information to every citizen when it matters most
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Speak to us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Join Is Everyone Safe?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefits & Perks</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg border">
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Joining Us?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented people who share our mission. Send us your CV and tell us how you'd
                like to contribute to building a more resilient society.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Speak to us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join a team that's building technology to keep communities safe and informed when it matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Speak to us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
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
