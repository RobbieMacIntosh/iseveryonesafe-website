import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function SocialProof() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Case Study Highlight with proper citation */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                CASE STUDY: Electricity North West Fined £1.2M for Lone Worker Death
              </h3>
              <p className="text-muted-foreground">
                Real HSE prosecution highlighting the critical importance of duty of care
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-2 text-destructive text-foreground">The Incident</h4>
              <p className="text-sm text-muted-foreground">
                A lone worker was electrocuted whilst working on overhead power lines. No adequate check-in system was
                in place.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary text-foreground">HSE Findings</h4>
              <p className="text-sm text-muted-foreground">
                Company failed to implement adequate lone worker protection systems and risk assessments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">The Penalty</h4>
              <p className="text-sm text-muted-foreground">
                £1.2 million fine plus costs. Company reputation severely damaged. Family devastated.
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              Source:{" "}
              <a
                href="https://www.hse.gov.uk/enforce/prosecutions.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                HSE Prosecutions Database
              </a>
              . Read more in our{" "}
              <a href="/blog" className="underline hover:no-underline">
                blog article on lone worker protection
              </a>
              .
            </p>
          </div>
        </Card>

        {/* Free Alert Sources */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Trusted Alert Sources (More Added Regularly)
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Receive real-time alerts from authorised UK sources—protecting both employees and citizens
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-2 text-foreground">Met Office</h3>
              <p className="text-sm text-muted-foreground">
                Severe weather warnings to protect your workforce and help citizens stay safe during extreme conditions.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2 text-foreground">Environment Agency</h3>
              <p className="text-sm text-muted-foreground">
                Flood warnings for sites near waterways and alerts to help communities prepare for environmental risks.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2 text-foreground">Foreign Office (FCDO)</h3>
              <p className="text-sm text-muted-foreground">
                Travel advisories for employees abroad and security updates for UK citizens travelling internationally.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2 text-foreground">UK Security Status</h3>
              <p className="text-sm text-muted-foreground">
                National threat level updates to keep organisations and the public informed of security risks.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
