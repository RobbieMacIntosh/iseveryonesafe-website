import { Card } from "@/components/ui/card"
import { X, Check, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PainPoints() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Pain Point */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Cost of Not Knowing</h2>
            <p className="text-xl text-muted-foreground mb-8">
              When crisis strikes, can you account for every employee in 60 seconds?
            </p>
          </div>

          {/* Cost Breakdown */}
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
                  <span className="font-bold text-primary">£2-5 per employee/month</span>
                </p>
              </div>
            </div>
          </Card>

          {/* Before/After Comparison */}
          <div className="mb-12">
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
                      <p className="font-semibold text-black">"I think everyone's safe"</p>
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
                      <p className="text-sm text-muted-foreground">Can't prove compliance</p>
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

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Free 30-Day Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
