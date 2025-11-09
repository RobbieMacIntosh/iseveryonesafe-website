import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/test-landing/pricing-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | Is Everyone Safe",
  description:
    "Simple, transparent pricing. £2.99/user/month or less. The more users you have, the less you pay per user. Free to download and receive alerts from authoritative sources.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PricingSection />
      </div>
      <Footer />
    </main>
  )
}
