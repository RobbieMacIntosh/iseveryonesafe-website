import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

export function EarlyAdopterProgram() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="h-4 w-4" />
              Limited Spots Available
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Founding Customer</h2>
            <p className="text-xl text-muted-foreground">
              Help us make everyone feel safer. Get lifetime early-adopter pricing.
            </p>
          </div>

          <Card className="p-8 md:p-12 border-2 border-primary/20 bg-primary/5">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2 text-foreground">Founding Customer Offer</h3>
              <p className="text-muted-foreground">Lock in special pricing forever</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-foreground">What You Get:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">20% off standard pricing for life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Direct access to founders (we respond personally)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Influence product roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Featured as case study (optional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority support forever</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4 text-foreground">What We Ask:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Give us honest feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Tell us what's working (and what's not)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Help us understand your use case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Be patient as we improve</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">£2.39</span>
                <span className="text-muted-foreground">/user/month or less</span>
                <span className="text-sm text-muted-foreground line-through">£2.99</span>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Founding customer rate (20% off) • Locked in forever • Decreases with volume
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" className="text-base md:text-lg px-4 py-4 md:px-8 md:py-6 mb-4 w-full md:w-auto">
                Apply for Founding Customer Status
              </Button>
              <p className="text-xs text-muted-foreground">
                Limited to first 50 organisations • We&apos;ll respond within 24 hours
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
