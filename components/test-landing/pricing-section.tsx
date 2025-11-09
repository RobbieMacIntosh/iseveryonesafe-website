"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const tiers = [
    { users: "50-99", perUserMonth: 2.99, minUsers: 50, maxUsers: 99 },
    { users: "100-499", perUserMonth: 2.84, minUsers: 100, maxUsers: 499 },
    { users: "500-1,999", perUserMonth: 2.7, minUsers: 500, maxUsers: 1999 },
    { users: "2,000-4,999", perUserMonth: 2.56, minUsers: 2000, maxUsers: 4999 },
    { users: "5,000-9,999", perUserMonth: 2.44, minUsers: 5000, maxUsers: 9999 },
    { users: "10,000-19,999", perUserMonth: 2.31, minUsers: 10000, maxUsers: 19999 },
    { users: "20,000+", perUserMonth: 2.2, minUsers: 20000, maxUsers: 20000 },
  ]

  function handleDownload() {
    const userAgent = navigator.userAgent || navigator.vendor

    // Detect iOS
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = "https://apps.apple.com/app/is-everyone-safe"
      return
    }

    // Detect Android
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.iseveryonesafe"
      return
    }

    // Default fallback - could show a modal with both options
    window.location.href = "https://apps.apple.com/app/is-everyone-safe"
  }

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground mb-8">
              £2.99/user/month or less. The more users you have, the less you pay per user.
            </p>
          </div>

          <Card className="p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-black">Volume-Based Pricing</h3>
            <p className="text-center text-muted-foreground mb-8">
              The more users you have, the less you pay per user. Simple as that.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-black">Users</th>
                    <th className="text-right py-3 px-4 font-semibold text-black">Price per User/Month</th>
                    <th className="text-right py-3 px-4 font-semibold text-black">Annual Cost Range</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((tier, index) => {
                    const minAnnual = Math.round(tier.minUsers * tier.perUserMonth * 12)
                    const maxAnnual = Math.round(tier.maxUsers * tier.perUserMonth * 12)
                    const showRange = tier.minUsers !== tier.maxUsers

                    return (
                      <tr key={index} className="border-b border-border">
                        <td className="py-3 px-4">{tier.users} users</td>
                        <td className="text-right py-3 px-4 font-semibold text-primary">
                          £{tier.perUserMonth.toFixed(2)}
                        </td>
                        <td className="text-right py-3 px-4">
                          {showRange ? (
                            <>
                              £{minAnnual.toLocaleString()} - £{maxAnnual.toLocaleString()}
                            </>
                          ) : (
                            <>£{minAnnual.toLocaleString()}</>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-black">Less than the price of a high street coffee.</strong> Below 50 users,
                fixed rate of £2.99/user applies. Above 20,000 users, fixed rate of £2.20/user applies.
              </p>
            </div>
          </Card>

          <Card className="p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-black">
              Everything Included. No Tiers. No Upsells.
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Unlimited in-app alerts</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Free alerts from authoritative sources</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Smart check-ins</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Location tracking (when summoned)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Roll call & accountability</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Compliance reporting</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Unlimited admin users</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Email support</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">GDPR compliant</span>
              </div>
            </div>
          </Card>

          {/* ROI Calculator */}
          <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center text-black">The Numbers Don't Lie</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Potential HSE Fine</p>
                <p className="text-4xl font-bold text-destructive">UNLIMITED</p>
                <p className="text-xs text-muted-foreground mt-2">
                  <a
                    href="https://www.cieh.org/media/1881/health-and-safety-sentencing-guidelines-adrian-mansbridge.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    Source: HSE Sentencing Guidelines
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Your Annual Cost (50 employees)</p>
                <p className="text-4xl font-bold text-primary">£1,794</p>
                <p className="text-xs text-muted-foreground mt-2">£2.99/user/month</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Peace of Mind</p>
                <p className="text-4xl font-bold text-black">Priceless</p>
                <p className="text-xs text-muted-foreground mt-2">Protect your people and your business</p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6" onClick={handleDownload}>
              Download Free App
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
