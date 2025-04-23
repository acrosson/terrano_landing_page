'use client';

import { Card, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function FeaturesSection({ landingPage }: { landingPage: string }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The one app to run your entire business
              </h2>
              <p className="text-muted-foreground md:text-xl">
                From inventory to production, sales to accounting - manage everything in one place
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Order Management</CardTitle>
                  <div className="h-8 w-8 bg-green-primary rounded-full flex items-center justify-center shadow-sm">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </CardHeader>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Planning & Scheduling</CardTitle>
                  <div className="h-8 w-8 bg-green-primary rounded-full flex items-center justify-center shadow-sm">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </CardHeader>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Supply Chain Management</CardTitle>
                  <div className="h-8 w-8 bg-green-primary rounded-full flex items-center justify-center shadow-sm">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </CardHeader>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Procurement</CardTitle>
                  <div className="h-8 w-8 bg-green-primary rounded-full flex items-center justify-center shadow-sm">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </CardHeader>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold">CRM & Marketing</CardTitle>
                  <div className="h-8 w-8 bg-green-primary rounded-full flex items-center justify-center shadow-sm">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </CardHeader>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Insights & Analytics</CardTitle>
                  <div className="h-8 w-8 bg-green-primary rounded-full flex items-center justify-center shadow-sm">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </CardHeader>
              </Card>
            </div>
            <Link
              href={`/features?landingPage=${landingPage}`}
              className="h-12 border border-gray-300 hover:bg-gray-50 rounded-md flex items-center justify-center text-blue-primary"
            >
              See All Features
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[600px] w-full">
            <Image
              src="/images/factory_floor_green.jpg"
              alt="Platform Overview"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
