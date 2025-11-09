import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestHero } from "@/components/test-landing/test-hero"
import { UrgencyBanner } from "@/components/test-landing/urgency-banner"
import { SocialProof } from "@/components/test-landing/social-proof"
import { EarlyAdopterProgram } from "@/components/test-landing/early-adopter"
import { OutcomeFeatures } from "@/components/test-landing/outcome-features"
import { UseCases } from "@/components/use-cases"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Is Everyone Safe | Crisis Communication Platform",
  description:
    "Free to download and receive alerts. £2.99/user/month or less for organisations. Built by UK founders who understand duty of care.",
  robots: "noindex, nofollow", // Test page - don't index
}

export default function LandingTest() {
  return (
    <main className="min-h-screen">
      <Header />
      <UrgencyBanner />
      <TestHero />
      <SocialProof />
      <UseCases />
      <OutcomeFeatures />
      <EarlyAdopterProgram />
      <Footer />
    </main>
  )
}
