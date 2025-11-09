"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/ies-logo-new.png" alt="Is Everyone Safe" width={40} height={40} className="h-10 w-10" />
          <span className="text-xl font-semibold">Is Everyone Safe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
              Solutions
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/solutions/workplace" className="w-full cursor-pointer">
                  Workplace Safety
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/education" className="w-full cursor-pointer">
                  Education
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/events" className="w-full cursor-pointer">
                  Events & Venues
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/service-providers" className="w-full cursor-pointer">
                  Service Providers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/public-services" className="w-full cursor-pointer">
                  Public Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/assessment"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Assessment
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile menu button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/#features"
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  Features
                </Link>
                <div className="flex flex-col gap-2 pl-4">
                  <span className="text-sm font-semibold text-foreground">Solutions</span>
                  <Link
                    href="/solutions/workplace"
                    className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Workplace Safety
                  </Link>
                  <Link
                    href="/solutions/education"
                    className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Education
                  </Link>
                  <Link
                    href="/solutions/events"
                    className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Events & Venues
                  </Link>
                  <Link
                    href="/solutions/service-providers"
                    className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Service Providers
                  </Link>
                  <Link
                    href="/solutions/public-services"
                    className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Public Services
                  </Link>
                </div>
                <Link
                  href="/assessment"
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  Assessment
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <Button variant="ghost" asChild>
                    <Link href="https://app.iseveryonesafe.com/signing_or_signup_app">Log In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="https://app.iseveryonesafe.com/signing_or_signup_app">Get Started</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop buttons */}
          <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
            <Link href="https://app.iseveryonesafe.com/signing_or_signup_app">Log In</Link>
          </Button>
          <Button size="sm" asChild className="hidden md:inline-flex">
            <Link href="https://app.iseveryonesafe.com/signing_or_signup_app">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
