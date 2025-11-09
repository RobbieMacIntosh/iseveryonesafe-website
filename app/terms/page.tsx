import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Is Everyone Safe",
  description:
    "Read the Terms of Service and Acceptable Use Policy governing access to the Is Everyone Safe mobile and web safety platform.",
  robots: "index, follow",
}

const linkStyle =
  "font-semibold text-foreground underline decoration-primary underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 dark:text-primary";

const prohibitedUses = [
  "Using the platform for marketing, sales, or unsolicited communications.",
  "Attempting to probe, scan, or test the vulnerability of any Is Everyone Safe system.",
  "Interfering with or disrupting the service, including deploying malware or scraping data without consent.",
  "Sharing login credentials or enrolling unauthorised devices/flic buttons under another person’s account.",
  "Submitting unlawful, defamatory, hateful, or threatening content.",
  "Using location, background monitoring, or alert data in ways that infringe privacy or labour laws.",
  "Reverse engineering, decompiling, or otherwise attempting to derive source code except where permitted by law.",
  "Using the platform in violation of export controls or to support illegal activity.",
]

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-2">
              Last updated: {new Date().toLocaleDateString("en-GB")}
            </p>
            <p className="text-muted-foreground mb-10">
              These Terms of Service (“Terms”) govern your access to the Is Everyone Safe platform provided by Is Everyone Safe Limited (“IES”, “we”,
              “us”). Is Everyone Safe Limited is registered in England and Wales under company number <strong>15261287</strong> with its registered
              office at 8 Mercia Business Village, Torwood Close, Westwood Business Park, Coventry, CV4 8HX, United Kingdom. By downloading the app,
              creating an account, or using the website you agree to these Terms. If you are entering into this agreement on behalf of an organisation,
              you represent that you have authority to bind that organisation.
            </p>

            <div className="prose prose-lg max-w-none space-y-10">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Eligibility and accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account. You agree to provide accurate
                  registration information, maintain the confidentiality of your credentials, and promptly update any changes. Organisations may
                  deactivate accounts that are no longer authorised to receive alerts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Subscriptions and payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Community access is provided free of charge with feature limits. Enterprise or licensed tiers require a separate order form or
                  subscription agreement. Paid subscriptions renew automatically unless cancelled in accordance with the governing order. Taxes,
                  carrier fees, and third-party charges are your responsibility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Acceptable use</h2>
                <p className="text-muted-foreground mb-4">
                  You may use the service solely for situational awareness, duty-of-care, or emergency communications. The following activities are
                  prohibited, and we may suspend or terminate accounts engaging in them:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {prohibitedUses.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  Please report any misuse or suspected security incident to{" "}
                  <a href="mailto:support@iseveryonesafe.com" className={linkStyle}>
                    support@iseveryonesafe.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. User content & data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of the messages, alerts, and files you submit. You grant IES a worldwide, non-exclusive licence to host,
                  process, transmit, and display that content solely to provide the service. Organisations are responsible for obtaining consent from
                  invitees and ensuring that any uploaded data complies with applicable privacy laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Safety, notifications, and devices</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The service relies on third-party networks and device permissions (including background location, Bluetooth, and push
                  notifications). You are responsible for maintaining compatible hardware, keeping applications up to date, and acknowledging that
                  alerts may be delayed or blocked by factors outside our control. Personal safety buttons must only be paired with accounts that are
                  authorised to trigger alerts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Intellectual property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All software, documentation, logos, and trademarks remain the property of IES or its licensors. Except for the limited licence
                  granted in these Terms, no rights are transferred. You may not remove proprietary notices or attempt to register trademarks that
                  are confusingly similar to ours.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Third-party services & links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Integrations (such as Supabase, Expo, Flic, or SMS gateways) are provided “as is”. Your use of those services may be governed by the
                  respective provider’s terms, and we are not responsible for their availability or security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Suspension and termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may suspend or terminate your access if you breach these Terms, violate the Acceptable Use Policy, fail to pay fees when due, or
                  expose us to legal risk. You may terminate by deleting your account or, for paid plans, by giving notice in accordance with the
                  governing agreement. Upon termination we will delete or return your data as described in our Privacy Policy, subject to legal
                  retention requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE”. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                  IMPLIED, INCLUDING FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT ALERTS WILL BE
                  DELIVERED OR THAT THE SERVICE WILL BE ERROR-FREE OR UNINTERRUPTED.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Limitation of liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the extent permitted by law, IES, its directors, employees, and suppliers will not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or for any loss of profits, data, or goodwill arising from your use of the service.
                  Our aggregate liability for all claims will not exceed the greater of (a) £100 or (b) the amounts paid by you to IES in the prior
                  six months.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Indemnity</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless IES and its affiliates from any claims, damages, losses, liabilities, costs, and expenses
                  (including legal fees) arising from your breach of these Terms, your content, or your misuse of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Governing law & disputes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of England and Wales. The parties submit to the exclusive jurisdiction of the courts of England
                  and Wales, without prejudice to IES seeking injunctive relief in any jurisdiction to protect its intellectual property or
                  confidential information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Changes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms to reflect changes in our services or legal requirements. If changes are material, we will provide notice
                  via email, in-app message, or on this page. Your continued use after the effective date constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about these Terms or the Acceptable Use Policy can be sent to{" "}
                  <a href="mailto:support@iseveryonesafe.com" className={linkStyle}>
                    support@iseveryonesafe.com
                  </a>{" "}
                  or by post to Is Everyone Safe Limited, 8 Mercia Business Village, Torwood Close, Westwood Business Park, Coventry, CV4 8HX, United
                  Kingdom.
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
