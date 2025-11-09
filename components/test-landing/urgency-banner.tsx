import { AlertTriangle } from "lucide-react"

export function UrgencyBanner() {
  return (
    <div className="bg-destructive text-destructive-foreground py-3 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base text-center">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <p className="font-semibold">
            HSE fines are UNLIMITED for duty of care failures.{" "}
            <a
              href="https://www.cieh.org/media/1881/health-and-safety-sentencing-guidelines-adrian-mansbridge.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline"
            >
              Learn more from HSE Sentencing Guidelines
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
