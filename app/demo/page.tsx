import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { MainLayout } from '@/app/components/MainLayout';

export default function DemoPage() {
  return (
    <MainLayout landingPage="/demo">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Book a Demo
              </h1>
              <p className="text-lg text-muted-foreground">
                We look forward to showing you how Terrano MRP can transform your manufacturing operations. Schedule a demo using the link below.
              </p>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-blue-primary text-white hover:bg-blue-secondary" asChild>
                <Link href="https://tally.so/r/mV4kej">
                  Schedule Demo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
