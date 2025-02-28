import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Linkedin, Youtube } from "lucide-react"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/Terrano_logo_black.png"
                alt="Terrano Logo"
                width={127}
                height={32}
                priority
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#solution" className="text-sm font-medium hover:text-primary">
              Solution
            </Link>
            <Link href="#partnering" className="text-sm font-medium hover:text-primary">
              Work With Us
            </Link>
            <Link href="#use-cases" className="text-sm font-medium hover:text-primary">
              Use Cases
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-4">
                <Link href="#solution" className="text-sm font-medium hover:text-primary">
                  Solution
                </Link>
                <Link href="#partnering" className="text-sm font-medium hover:text-primary">
                  Work With Us
                </Link>
                <Link href="#applications" className="text-sm font-medium hover:text-primary">
                  Applications
                </Link>
                <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
                  Testimonials
                </Link>
                <Link href="#contact" className="text-sm font-medium hover:text-primary">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-blue-primary text-white hover:bg-blue-secondary">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-darkgrey text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo Column */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <Link href="/">
                <Image
                  src="/images/Terrano_logo_white.png"
                  alt="Terrano Logo"
                  width={127}
                  height={32}
                  priority
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Business Column */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="text-sm font-semibold">Business</h3>
              <nav className="flex flex-col gap-2 items-center md:items-start">
                <Link href="#solution" className="text-sm text-gray-400 hover:text-white">
                  Solution
                </Link>
                <Link href="#partnering" className="text-sm text-gray-400 hover:text-white">
                  Work With Us
                </Link>
                <Link href="#use-cases" className="text-sm text-gray-400 hover:text-white">
                  Use Cases
                </Link>
                <Link href="#testimonials" className="text-sm text-gray-400 hover:text-white">
                  Testimonials
                </Link>
                <Link href="#contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="text-sm font-semibold">Company</h3>
              <nav className="flex flex-col gap-2 items-center md:items-start">
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                  Terms
                </Link>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy
                </Link>
              </nav>
            </div>

            {/* Connect Column */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="text-sm font-semibold">Connect</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Terrano. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 