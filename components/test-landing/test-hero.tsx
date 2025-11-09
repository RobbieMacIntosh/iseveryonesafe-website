"use client"
import Image from "next/image"

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

export function TestHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            We&apos;re Building the Alert System <span className="text-primary">Everyone Actually Needs.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Free to download. Real-time crisis and incident alerts from your employer, educational institution,
            government agencies, and emergency responders—all in one place. £2.99/user/month.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://apps.apple.com/app/is-everyone-safe"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.iseveryonesafe"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </a>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border mb-12">
            <Image
              src="/alert-listing.png"
              alt="Is Everyone Safe Mobile App - Alert Listing"
              width={1200}
              height={600}
              className="w-full"
              priority
            />
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4 font-semibold">BUILT IN THE UK</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-black">GDPR</span>
                </div>
                <span className="text-sm font-semibold text-black">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-black">UK</span>
                </div>
                <span className="text-sm font-semibold text-black">Built & Managed in UK</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-black">EU</span>
                </div>
                <span className="text-sm font-semibold text-black">EU Hosted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
