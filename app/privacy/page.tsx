import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Is Everyone Safe",
  description:
    "Learn how Is Everyone Safe Limited collects, uses, and protects personal data for the mobile and web safety platform in line with UK GDPR, UK DPA 2018, and international requirements.",
  robots: "index, follow",
}

const accentLink =
  "font-semibold text-foreground underline decoration-primary underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:text-primary";

const dataCategories = [
  {
    category: "Identity & contact details",
    dataPoints: ["Name and display name", "Email addresses provided (personal and organisational)", "Phone number (optional)"],
    purpose: "Account creation, cohort membership, administrator controls, and support communications.",
    legalBasis: "Performance of a contract; legitimate interests in operating the service.",
  },
  {
    category: "Account & safety activity",
    dataPoints: [
      "Organisation or cohort membership, roles, and permissions",
      "Alert history, responses, escalation actions, and audit timestamps",
      "Notification preferences, device tokens, and Flic button metadata",
    ],
    purpose: "Deliver emergency alerts, demonstrate audit history, enforce acceptable use, and provide diagnostics.",
    legalBasis: "Performance of a contract; vital interests; legitimate interests in safeguarding our users.",
  },
  {
    category: "Location & device information",
    dataPoints: [
      "Foreground and background location (only when granted)",
      "Bluetooth and device identifiers related to personal safety buttons",
      "App diagnostics, crash logs, and analytics (Expo, Supabase, Firebase)",
    ],
    purpose: "Deliver proximity-based alerts, confirm notification delivery, detect and remediate crashes or abuse.",
    legalBasis: "Explicit consent (location/background Bluetooth); legitimate interests in securing the platform.",
  },
  {
    category: "Support & compliance data",
    dataPoints: ["Support tickets", "Abuse reports", "Regulatory correspondence"],
    purpose: "Respond to requests, fulfil legal obligations, and maintain records for regulators and law enforcement when required.",
    legalBasis: "Legal obligation; legitimate interests in defending legal claims.",
  },
]

const processors = [
  {
    name: "Supabase (PostgreSQL, authentication, storage) – EU/UK regions",
    reason: "Primary application database, authentication, and edge functions.",
  },
  {
    name: "Expo & Apple/Google push notification services",
    reason: "Delivery of device notifications and dev-client diagnostics.",
  },
  {
    name: "Flic / Shortcut Labs SDK",
    reason: "Bluetooth integration for personal safety buttons, including encrypted button IDs.",
  },
  {
    name: "Payment or billing processors (only for licensed customers)",
    reason: "Subscription and invoice management.",
  },
]

const userRights = [
  "Access: request a copy of the personal data we hold about you.",
  "Rectification: update inaccurate or incomplete details from inside the app or by contacting us.",
  "Erasure: delete your account via the in-app settings or by emailing us; we remove data unless retention is required by law.",
  "Restriction and objection: limit or object to processing carried out on legitimate-interest grounds.",
  "Data portability: request export of the personal data you provided to us in a structured format.",
  "Consent withdrawal: revoke consent for background location, Bluetooth, or marketing at any time in device settings.",
  "Complaint: lodge a complaint with the UK Information Commissioner’s Office (ICO) or your local supervisory authority.",
]

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString("en-GB")} &middot; Effective for all Is Everyone Safe mobile and web experiences.
            </p>

            <div className="prose prose-lg max-w-none space-y-10">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Who we are and how to reach us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Is Everyone Safe Limited (company number <strong>15261287</strong>) provides crisis-alert coordination tools across the web, iOS,
                  and Android. We are the data controller for personal data processed through the platform. Contact our privacy team at{" "}
                  <a href="mailto:dataprotection@iseveryonesafe.com" className={accentLink}>
                    dataprotection@iseveryonesafe.com
                  </a>{" "}
                  or in writing at Is Everyone Safe Limited, 8 Mercia Business Village, Torwood Close, Westwood Business Park, Coventry, CV4 8HX,
                  United Kingdom.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Data we collect</h2>
                <p className="text-muted-foreground mb-4">
                  The exact data collected depends on the features you use, the permissions you grant, and whether you are a community or enterprise
                  customer. We only collect data necessary to deliver the requested service.
                </p>
                <div className="grid gap-6">
                  {dataCategories.map((item) => (
                    <div key={item.category} className="rounded-xl border border-border/60 p-6 bg-card shadow-sm">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{item.category}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Data examples:</strong> {item.dataPoints.join(", ")}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Why we collect it:</strong> {item.purpose}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Legal basis:</strong> {item.legalBasis}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How we use your information</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, customise, and maintain the safety platform, including personal safety button onboarding.</li>
                  <li>Deliver push notifications, in-app alerts, and SMS/email escalations requested by your organisation.</li>
                  <li>Operate Bluetooth/Flic integrations so button presses work in the background when you enable alerts.</li>
                  <li>Monitor for abuse, fraud, or misuse and enforce our Terms and Acceptable Use Policy.</li>
                  <li>Comply with legal obligations, respond to lawful requests, and maintain disaster-recovery records.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Sharing and international transfers</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell personal data. We share it only with processors that help us deliver the service or when legally required. Where
                  data leaves the UK/EEA, we rely on UK adequacy decisions, Standard Contractual Clauses, or equivalent safeguards.
                </p>
                <div className="rounded-xl border border-border/60 p-6 bg-card shadow-sm">
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    {processors.map((processor) => (
                      <li key={processor.name}>
                        <strong>{processor.name}:</strong> {processor.reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain account and alert data while you maintain an active profile and for up to 12 months afterward to support regulatory
                  enquiries and incident reviews. Aggregated analytics may be retained longer in anonymised form. You can request deletion sooner, and
                  we will honour it unless law enforcement, litigation holds, or contractual obligations require us to keep certain records.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Your rights and choices</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {userRights.map((right) => (
                    <li key={right}>{right}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Exercise these rights from the profile/settings screens or by emailing{" "}
                  <a href="mailto:dataprotection@iseveryonesafe.com" className={accentLink}>
                    dataprotection@iseveryonesafe.com
                  </a>
                  . If we cannot resolve your concern, you may contact the Information Commissioner’s Office at{" "}
                  <a href="https://ico.org.uk/make-a-complaint/" className={accentLink}>
                    ico.org.uk/make-a-complaint
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Account deletion & push/bt permissions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You can delete your account any time from Settings &gt; Account &gt; Delete Account in the mobile app or by emailing{" "}
                  <a href="mailto:superadmin@iseveryonesafe.com" className={accentLink}>
                    superadmin@iseveryonesafe.com
                  </a>{" "}
                  from the registered email. Device-level permissions for location, Bluetooth background monitoring, and notifications can be changed
                  via system settings. Disabling these features may limit the functionality of safety alerts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Children’s privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are designed for adults and authorised corporate responders. We do not intentionally collect data from children under
                  16. If you believe a child has provided information, contact us so we can delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement defence-in-depth controls including encryption at rest and in transit, least-privilege access, logging, and automated
                  alerting. Despite our efforts, no system is perfectly secure, and we encourage you to use strong passwords, device biometrics, and
                  promptly install software updates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Changes to this policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We update this policy when our practices change or to reflect legal requirements. Material changes will be communicated via in-app
                  notice or email. Continued use after the effective date constitutes acceptance of the updated terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
