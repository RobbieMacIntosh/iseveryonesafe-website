import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { UseCases } from "@/components/use-cases"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AssessmentCTA } from "@/components/assessment-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  description:
    "Is Everyone Safe delivers real-time emergency alerts to employees, students, event attendees, and citizens. Multi-channel crisis communication platform. Keep your people safe and informed.",
  keywords: [
    "crisis communication platform",
    "emergency notification system",
    "mass alert system",
    "workplace emergency alerts",
    "campus safety alerts",
    "event safety communication",
    "government emergency alerts",
    "incident management software",
    "emergency response system",
  ],
  openGraph: {
    description:
      "Keep your people safe with real-time crisis alerts and emergency notifications. Multi-channel delivery, geographic targeting, and instant response.",
    url: "https://iseveryonesafe.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Is Everyone Safe Crisis Communication Platform Dashboard",
      },
    ],
  },
  alternates: {
    canonical: "https://iseveryonesafe.com",
  },
}

export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Is Everyone Safe",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
    },
    description:
      "Crisis and incident communication platform for real-time emergency alerts to employees, students, event attendees, and citizens.",
  }

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Is Everyone Safe",
    url: "https://iseveryonesafe.com",
    logo: "https://iseveryonesafe.com/logo.png",
    description: "Leading crisis communication and emergency notification platform",
    sameAs: [
      "https://twitter.com/iseveryonesafe",
      "https://linkedin.com/company/iseveryonesafe",
      "https://facebook.com/iseveryonesafe",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-SAFE-ALERT",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Stats />
        <Features />
        <UseCases />
        <AssessmentCTA />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
