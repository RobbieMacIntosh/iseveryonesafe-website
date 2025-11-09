import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AssessmentResults } from "@/components/assessment/assessment-results"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Assessment Results",
  description: "View your crisis communication maturity assessment results and get personalized recommendations.",
}

export default function ResultsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense
        fallback={
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <div className="animate-pulse space-y-4">
                  <div className="h-12 bg-muted rounded w-3/4 mx-auto" />
                  <div className="h-8 bg-muted rounded w-1/2 mx-auto" />
                </div>
              </div>
            </div>
          </section>
        }
      >
        <AssessmentResults />
      </Suspense>
      <Footer />
    </main>
  )
}
