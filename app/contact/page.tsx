'use client';

import { Button } from '@/app/components/ui/button';
import { MainLayout } from '@/app/components/MainLayout';
import { ChevronRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ContactContent() {
  const searchParams = useSearchParams();
  const landingPage = searchParams.get('landingPage') ?? '/';

  return (
    <MainLayout landingPage={landingPage}>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Get in Touch
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We&apos;re here to help you transform your company&apos;s operations with AI. Let&apos;s discuss how we can work together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-blue-primary text-white hover:bg-blue-secondary"
                asChild
              >
                <a href="https://tally.so/r/3NReZ0" target="_blank" rel="noopener noreferrer">
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl text-blue-primary">Loading...</div>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
