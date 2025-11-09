import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AssessmentForm } from "@/components/assessment/assessment-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crisis Communication Maturity Assessment",
  description:
    "Discover how prepared your organisation is for emergencies. Take our 60-second assessment to identify gaps in your crisis communication strategy.",
}

export default function AssessmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 md:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Crisis Communication Maturity Assessment
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Discover how prepared your organisation is for emergencies. Answer 7 quick questions to receive a
              personalised maturity report with actionable recommendations.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                60 seconds
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                7 questions
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                No spam promise
              </span>
            </div>
          </div>
          <AssessmentForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
