import { Card } from "@/components/ui/card"
import { Shield, Lock, Server, Eye, FileCheck, Database } from "lucide-react"

export function TrustSecurity() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Security & Privacy You Can Trust</h2>
            <p className="text-xl text-muted-foreground">
              Built and managed in the UK, hosted in the EU, fully GDPR compliant
            </p>
          </div>

          {/* Security Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">HTTPS Encryption</h3>
                  <p className="text-sm text-muted-foreground">All data encrypted in transit using TLS 1.3</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">EU Hosting</h3>
                  <p className="text-sm text-muted-foreground">Built and managed in UK, hosted in EU data centres</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">Access Controls</h3>
                  <p className="text-sm text-muted-foreground">Role-based access and secure authentication</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">Location tracking only when user summons help</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">Data Minimisation</h3>
                  <p className="text-sm text-muted-foreground">We only store what's necessary for safety</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">No Unnecessary Data</h3>
                  <p className="text-sm text-muted-foreground">No home/work addresses stored. Privacy by design.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Compliance */}
          <Card className="p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-black">GDPR Compliant</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-black">GDPR</span>
                </div>
                <p className="text-sm font-semibold text-black">GDPR Compliant</p>
                <p className="text-xs text-muted-foreground mt-1">EU/UK data protection</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-black">UK</span>
                </div>
                <p className="text-sm font-semibold text-black">UK Built & Managed</p>
                <p className="text-xs text-muted-foreground mt-1">British company</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-black">EU</span>
                </div>
                <p className="text-sm font-semibold text-black">EU Hosted</p>
                <p className="text-xs text-muted-foreground mt-1">European data centres</p>
              </div>
            </div>
          </Card>

          {/* Privacy Promises */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-black">Your Privacy Guaranteed</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-2 text-black">Data Minimisation</h4>
                <p className="text-sm text-muted-foreground">We only collect what's necessary for safety</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2 text-black">User Control</h4>
                <p className="text-sm text-muted-foreground">
                  Location only shared when user summons help in specific circumstances
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2 text-black">No Unnecessary Storage</h4>
                <p className="text-sm text-muted-foreground">No home or work addresses stored</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2 text-black">Transparent Processing</h4>
                <p className="text-sm text-muted-foreground">Clear privacy policy in plain English</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2 text-black">Right to Deletion</h4>
                <p className="text-sm text-muted-foreground">Complete data removal on request</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2 text-black">No Data Selling</h4>
                <p className="text-sm text-muted-foreground">We never sell or share your data</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
