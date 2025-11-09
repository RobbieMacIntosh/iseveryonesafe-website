import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://iseveryonesafe.com"),
  title: {
    default: "Is Everyone Safe",
    template: "%s | Is Everyone Safe",
  },
  description:
    "Keep employees, students, event attendees, and citizens safe with real-time crisis alerts from employers, educational institutions, government agencies, and emergency responders. Trusted emergency notification system.",
  keywords: [
    "crisis communication",
    "emergency alerts",
    "incident notification",
    "workplace safety",
    "campus safety",
    "event safety",
    "government alerts",
    "emergency management",
    "mass notification",
    "public safety",
    "emergency notification system",
    "crisis management software",
  ],
  authors: [{ name: "Is Everyone Safe" }],
  creator: "Is Everyone Safe",
  publisher: "Is Everyone Safe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iseveryonesafe.com",
    siteName: "Is Everyone Safe",
    title: "Is Everyone Safe",
    description:
      "Keep your people safe with real-time crisis alerts and emergency notifications. Trusted by organisations worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Is Everyone Safe Crisis Communication Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Everyone Safe",
    description:
      "Keep your people safe with real-time crisis alerts and emergency notifications. Trusted by organisations worldwide.",
    images: ["/og-image.jpg"],
    creator: "@iseveryonesafe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://iseveryonesafe.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
