import { Card } from "@/components/ui/card"
import { Bell, MapPin, CheckCircle2, ClipboardList, FileText } from "lucide-react"

export function OutcomeFeatures() {
  const features = [
    {
      icon: Bell,
      title: "Instant In-App Alerts",
      description: "Send emergency messages to everyone in seconds",
      benefits: [
        "In-app notifications only - if our app pings, it's important",
        "No confusion with other apps or notifications",
        "Template library for common scenarios",
        "Delivery confirmation tracking",
      ],
    },
    {
      icon: MapPin,
      title: "Location Tracking (When Needed)",
      description: "See employee location only when they summon help",
      benefits: [
        "Location only shared when user summons help",
        "No constant tracking - privacy first",
        "GPS accuracy for emergency response",
        "Specific circumstances only",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Smart Check-Ins",
      description: "Automated 'Are you OK?' prompts",
      benefits: [
        "Scheduled check-ins for lone workers",
        "Missed check-in escalation",
        "Panic button for emergencies",
        "Customisable check-in intervals",
      ],
    },
    {
      icon: ClipboardList,
      title: "Roll Call & Accountability",
      description: "Digital attendance tracking",
      benefits: [
        "Instant headcount during evacuations",
        "Identify who's safe, missing, or needs help",
        "QR code check-in at muster points",
        "Real-time status dashboard",
      ],
    },
    {
      icon: FileText,
      title: "Compliance & Reporting",
      description: "Audit trail for HSE inspections",
      benefits: [
        "Automated incident reports",
        "Duty of care evidence library",
        "Exportable compliance records",
        "Timeline of all actions taken",
      ],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need to Protect Your People</h2>
            <p className="text-xl text-muted-foreground">
              Purpose-built features that deliver real outcomes in crisis situations
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-black">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
