import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { MainLayout } from '@/app/components/MainLayout';

export default function LandingPage() {
  return (
    <MainLayout landingPage={'/'}>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 w-full">
              <div className="space-y-2 w-full">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none">
                  Supercharge Your Manufacturing Business with AI.
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">Grow Your Revenue. Run Leaner. Scale Smarter.</h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground lg:text-xl">
                  Run your entire business from a single platform. Reduce material waste, and automate operations - all from a platform built for modern manufacturers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-primary text-white hover:bg-blue-secondary" asChild>
                  <Link href="/signup" rel="noopener noreferrer">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/demo" rel="noopener noreferrer">
                    Schedule a Demo
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-blue-primary to-green-primary bg-[length:200%_200%] opacity-80 -z-10"></div>
              <Image
                src="/images/all_in_one_super_platform.png"
                alt="All in one super platform"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to transform your business operations?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Let us help you transform your business operations with using the most advanced operating platform for manufacturers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup" rel="noopener noreferrer">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo" rel="noopener noreferrer">
                  Schedule a Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
