import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { X, Check, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies | Is Everyone Safe",
  description:
    "Real-world examples of the cost of non-compliance and how Is Everyone Safe helps organisations meet their duty of care obligations.",
  openGraph: {
    title: "Case Studies | Is Everyone Safe",
    description: "The cost of not knowing when crisis strikes",
    url: "https://iseveryonesafe.com/case-studies",
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-background to-muted/20 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">The Cost of Not Knowing</h1>
              <p className="text-xl text-muted-foreground">
                When crisis strikes, can you account for every employee in 60 seconds?
              </p>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="p-8 md:p-12 mb-12 bg-destructive/5 border-destructive/20">
                <div className="flex items-start gap-4 mb-8">
                  <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-black">The Real Cost of Non-Compliance</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-black">HSE prosecution:</span>
                          <span className="text-muted-foreground">
                            {" "}
                            £180,000 - £700,000+ per incident (unlimited maximum)
                          </span>
                          <br />
                          <a
                            href="https://www.cieh.org/media/1881/health-and-safety-sentencing-guidelines-adrian-mansbridge.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted-foreground underline hover:no-underline"
                          >
                            Source: Health and Safety Sentencing Guidelines
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-black">Reputational damage:</span>
                          <span className="text-muted-foreground"> Unmeasurable long-term impact</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-black">Personal liability:</span>
                          <span className="text-muted-foreground"> Directors can face jail time</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-black">Insurance invalidation:</span>
                          <span className="text-muted-foreground"> Claims rejected for non-compliance</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-black">Employee wellbeing:</span>
                          <span className="text-muted-foreground"> Lasting trauma and legal action</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-destructive/20 pt-6">
                  <div className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-lg">
                      <span className="font-bold text-black">Our Solution:</span> Complete duty of care compliance for{" "}
                      <span className="font-bold text-primary">£2.99/user/month or less</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-8 text-black">Before vs After</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Without */}
                <Card className="p-6 bg-muted/50">
                  <h4 className="text-xl font-bold mb-6 text-destructive flex items-center gap-2">
                    <X className="h-6 w-6" />
                    Without Is Everyone Safe
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📞</span>
                      <div>
                        <p className="font-semibold text-black">Manual phone calls</p>
                        <p className="text-sm text-muted-foreground">20+ minutes to reach everyone</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">❓</span>
                      <div>
                        <p className="font-semibold text-black">&quot;I think everyone&apos;s safe&quot;</p>
                        <p className="text-sm text-muted-foreground">No real-time visibility</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📋</span>
                      <div>
                        <p className="font-semibold text-black">Paper registers & clipboards</p>
                        <p className="text-sm text-muted-foreground">Slow, error-prone, outdated</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🚨</span>
                      <div>
                        <p className="font-semibold text-black">Delayed emergency response</p>
                        <p className="text-sm text-muted-foreground">Critical minutes lost</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📄</span>
                      <div>
                        <p className="font-semibold text-black">No audit trail</p>
                        <p className="text-sm text-muted-foreground">Can&apos;t prove compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="font-semibold text-black">£100k+ HSE fines</p>
                        <p className="text-sm text-muted-foreground">Plus reputational damage</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* With */}
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h4 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                    <Check className="h-6 w-6" />
                    With Is Everyone Safe
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <p className="font-semibold text-black">One-button alert</p>
                        <p className="text-sm text-muted-foreground">Reach everyone in 10 seconds</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <p className="font-semibold text-black">Live dashboard shows all</p>
                        <p className="text-sm text-muted-foreground">Real-time status updates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <p className="font-semibold text-black">Real-time digital check-ins</p>
                        <p className="text-sm text-muted-foreground">Automated and accurate</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <p className="font-semibold text-black">Instant location & status</p>
                        <p className="text-sm text-muted-foreground">GPS tracking and geofencing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📈</span>
                      <div>
                        <p className="font-semibold text-black">Complete compliance records</p>
                        <p className="text-sm text-muted-foreground">Full audit trail for HSE</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🛡️</span>
                      <div>
                        <p className="font-semibold text-black">Full legal protection</p>
                        <p className="text-sm text-muted-foreground">Demonstrate duty of care</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Don&apos;t Wait for a Crisis</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join our early adopter programme and get 20% off for life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/landing-test#early-adopter">Apply for Founding Customer Status</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
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
