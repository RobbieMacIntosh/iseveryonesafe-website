import { Card } from "@/components/ui/card"

export function FounderStory() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {"We're New & We're Honest About It"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why We Built This</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="space-y-6">
                <p className="text-xl text-foreground leading-relaxed">
                  After managing incidents globally for years—from natural disasters to security threats to medical
                  emergencies and increasingly, cyber attacks—we discovered that effective crisis communication comes
                  down to four things:
                </p>

                <div className="text-center py-4">
                  <p className="text-2xl font-bold text-foreground">Warn. Inform. Connect. Locate.</p>
                </div>

                <div className="space-y-4 text-lg">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Warn</strong> people of immediate threats before they take
                    harmful action
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Inform</strong> people what to do to stay safe or prevent
                    further damage
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Connect</strong> with people to get their response and account
                    for everyone
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Locate</strong> people so you know where to send help when they
                    need it
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed italic">Sounds simple, right?</p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  But in every incident we managed, we struggled with all four:
                </p>

                <div className="space-y-2 text-lg text-muted-foreground pl-4">
                  <p>We couldn't warn people fast enough before they clicked malicious emails.</p>
                  <p>We couldn't inform everyone simultaneously when evacuation was needed.</p>
                  <p>We couldn't connect with people to confirm they'd received critical instructions.</p>
                  <p>We couldn't locate lone workers who'd stopped responding.</p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Traditional communication tools—email, WhatsApp, Slack, social media—simply weren't designed for
                  crisis moments when every second counts and you need absolute certainty about who's been reached.
                </p>

                <p className="text-lg font-semibold text-foreground leading-relaxed">
                  That communication gap? It's what turns manageable incidents into disasters.
                </p>

                <p className="text-lg text-foreground leading-relaxed">
                  So we built what should have existed all along.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're a startup. We're building in public. And we're looking for early adopters who understand the
                  critical importance of duty of care and want to help us prove this works.
                </p>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">— Robbie MacIntosh & Clive White</p>
                  <p className="text-sm text-muted-foreground">Co-Founders, Is Everyone Safe</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
