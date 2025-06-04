'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { MainLayout } from '@/app/components/MainLayout';

function SignupContent() {
  let landingPage = useSearchParams().get('landingPage');
  if (!landingPage) {
    landingPage = '/';
  } else {
    landingPage = `/${landingPage}`;
  }

  return (
    <MainLayout landingPage={landingPage}>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get Started with Terrano
              </h1>
              <p className="text-lg text-muted-foreground">
                Setting up your account is easy. Complete the signup form and schedule a quick onboarding call with our team.
              </p>
            </div>

            {/* Steps */}
            <div className="grid gap-8 w-full md:grid-cols-2">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-blue-primary">1</span>
                  </div>
                  <CardTitle>Complete the Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fill out your basic information to create your account. It takes less than 2 minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-blue-primary">2</span>
                  </div>
                  <CardTitle>Schedule Onboarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Book a 30-minute call with our team to set up your workspace and get started.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-blue-primary text-white hover:bg-blue-secondary" asChild>
                <Link href="https://tally.so/r/3NReZ0">
                  Start Signup
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

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
}
