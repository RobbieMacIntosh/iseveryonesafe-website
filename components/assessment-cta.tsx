import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function AssessmentCTA() {
  return (
    <section className="border-b border-border bg-accent/5 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-accent">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <CardTitle className="text-3xl md:text-4xl">How ready is your team for a crisis?</CardTitle>
              <CardDescription className="text-lg mt-4">
                Take our quick 60-second assessment to understand your current crisis communication capabilities and
                discover practical ways to strengthen them.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">7</div>
                  <div className="text-sm text-muted-foreground">Quick Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">60s</div>
                  <div className="text-sm text-muted-foreground">To Complete</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">UK Employers Assessed</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">See where you stand across seven key crisis communication areas</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">
                    Understand your readiness for protecting remote workers, lone workers, and traveling staff
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Get practical suggestions tailored to your current situation</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">View your results instantly with a visual breakdown</span>
                </div>
              </div>

              <Button asChild size="lg" className="w-full">
                <Link href="/assessment">Start Your Assessment</Link>
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                No email required to see results. Your responses are confidential.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
