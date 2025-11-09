"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { createLead } from "@/lib/actions/leads"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const result = await createLead({
      email: formData.email,
      name: formData.name,
      company: formData.organisation,
      phone: formData.phone,
      source: "contact",
      message: formData.message,
    })

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error || "Failed to submit form. Please try again.")
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">We'd love to hear from you. Let us know how we can help.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                {submitted ? (
                  <div className="bg-primary/10 border border-primary rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Thank you for your message!</h3>
                    <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-destructive/10 border border-destructive rounded-lg p-4">
                        <p className="text-destructive text-sm">{error}</p>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="organisation">Organisation</Label>
                      <Input
                        id="organisation"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="Your organisation"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 20 1234 5678"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:hello@iseveryonesafe.com" className="hover:text-primary">
                        hello@iseveryonesafe.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Support</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:support@iseveryonesafe.com" className="hover:text-primary">
                        support@iseveryonesafe.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      United Kingdom
                      <br />
                      Serving organisations across the UK
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM GMT
                      <br />
                      Emergency Support Available
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-bold mb-2">For Media Enquiries</h3>
                  <p className="text-muted-foreground mb-2">Please contact our press team:</p>
                  <a href="mailto:press@iseveryonesafe.com" className="text-primary hover:underline">
                    press@iseveryonesafe.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
