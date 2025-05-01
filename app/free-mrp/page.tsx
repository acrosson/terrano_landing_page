import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { HeroGraphicERP } from '@/app/components/HeroGraphicERP';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ChevronRight, Database, LineChart, Users, DollarSign, Lock, ShieldCheckIcon, Rocket, Cpu } from 'lucide-react';
import { MainLayout } from '@/app/components/MainLayout';
import { ComparisonTable } from '@/app/components/ComparisonTable';
import { ProductRating } from '@/app/components/ProductRating';
import { LeadEmailCapture } from '@/app/components/LeadEmailCapture';
import { FeaturesSection } from '@/app/components/FeaturesSection';
import { IntegrationsSection } from '@/app/components/IntegrationsSection';

export const metadata = {
  title: 'Free MRP Software for Manufacturers',
  description: 'Plan materials, track jobs, and schedule production in one easy-to-use FREE MRP software',
};

export default function FreeMRPLandingPage() {
  return (
    <MainLayout landingPage="/free-mrp">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 w-full">
              <div className="space-y-2 w-full">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none">
                  Free MRP Software for Manufacturers. <br />Cloud-based. All in one solution.
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground lg:text-xl">
                  Plan materials, track jobs, and schedule production in one easy-to-use FREE MRP software. Powerful software for MRP, BOM, and production scheduling.
                </p>
              </div>
              <ProductRating />
              <LeadEmailCapture landingPage="free-mrp" />
            </div>
            <HeroGraphicERP />
          </div>
        </div>
      </section>

      {/* Free Cloud MRP Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-br from-blue-400 to-blue-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
              Cloud-based MRP Software for Free. Absolutely!
            </h2>
            <p className="max-w-[900px] text-white/80 md:text-xl">
              We believe every manufacturer deserves access to powerful tools. That&apos;s why we offer a completely free plan with no time limits or hidden fees. Get all the core features you need to run your factory efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* The one app to run your entire business Section */}
      <FeaturesSection landingPage="mrp" />

      {/* Integrations Section */}
      <IntegrationsSection />

      {/* Challenges Section - Update to "What Makes Us Different" */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image */}
            <div className="relative h-[600px] w-full">
              <Image
                src="/images/warehouse.jpg"
                alt="Modern Factory Floor"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What Makes Us Different
                </h2>
              </div>
              <div className="grid gap-6">
                <Card className="h-full">
                  <div className="flex items-start p-6 gap-4">
                    <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                      <DollarSign className="h-6 w-6 text-blue-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">No Monthly SaaS Fees</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Keep costs low with our free plan—perfect for small shops and growing ops.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="h-full">
                  <div className="flex items-start p-6 gap-4">
                    <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                      <Rocket className="h-6 w-6 text-blue-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Faster Implementation</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Get started in hours, not weeks. Simple onboarding, no consultants required.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="h-full">
                  <div className="flex items-start p-6 gap-4">
                    <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                      <Cpu className="h-6 w-6 text-blue-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Built-In AI Features</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Smarter forecasting, optimized workflows, and predictive maintenance—out of the box.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center">
                Everything You Need to Run a Leaner, Smarter Factory
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Manage inventory, production, purchasing, and reporting—all in one place.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Database className="h-6 w-6 mb-2 text-blue-primary" />
                  <CardTitle>Real-Time Inventory Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Track stock levels, movements, and locations in real-time.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <LineChart className="h-6 w-6 mb-2 text-blue-primary" />
                  <CardTitle>AI-Powered Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Predict demand and optimize inventory with machine learning.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Users className="h-6 w-6 mb-2 text-blue-primary" />
                  <CardTitle>Shop Floor Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Schedule production and manage work orders efficiently.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <DollarSign className="h-6 w-6 mb-2 text-blue-primary" />
                  <CardTitle>Purchase Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Handle suppliers, orders, and procurement in one place.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Lock className="h-6 w-6 mb-2 text-blue-primary" />
                  <CardTitle>Lot Tracking & Traceability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Track batches and maintain quality control standards.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <ShieldCheckIcon className="h-6 w-6 mb-2 text-blue-primary" />
                  <CardTitle>Accounting Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Sync with QuickBooks, Xero, and other accounting tools.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Small Manufacturers Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Built for Small & Medium Sized Manufacturers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Whether you&apos;re building furniture, electronics, food, or automotive products—we&apos;ve got you covered.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="h-full">
                <Image
                  src="/images/factory_owner.jpg"
                  alt="Factory Owner"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <CardHeader>
                  <CardTitle>For Factory Owners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get full visibility and control over your operations
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
              <Image
                  src="/images/ops_manager.jpg"
                  alt="Factory Owner"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <CardHeader>
                  <CardTitle>For Ops Managers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automate repetitive workflows and streamline processes
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
              <Image
                  src="/images/accountant.jpg"
                  alt="Factory Owner"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <CardHeader>
                  <CardTitle>For Accountants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sync with the tools you already use
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Unlock massive impact you can measure</h2>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
              <Card className="h-full">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-4xl text-blue-primary font-bold">60%</CardTitle>
                  <CardDescription className="text-lg">Increase in sales volume</CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-4xl text-blue-primary font-bold">1.2x</CardTitle>
                  <CardDescription className="text-lg">increase in inventory turnover</CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-4xl text-blue-primary font-bold">2 week</CardTitle>
                  <CardDescription className="text-lg">to fully implement</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section - New */}
      <ComparisonTable price="19" />

      {/* Team Background Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Built by experts in Manufacturing & Technology
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our team combines deep expertise in manufacturing and technology with decades of financial services experience
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl py-12">
            <Card className="relative overflow-hidden">
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center p-8">
                  <Image
                    src="/images/companies/rbc_logo.png"
                    alt="RBC Logo"
                    width={120}
                    height={120}
                    className="h-12 w-auto object-contain"
                  />
                  <Image
                    src="/images/companies/jpm_logo.png"
                    alt="JP Morgan Logo"
                    width={120}
                    height={120}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/images/companies/gs_logo.png"
                    alt="Goldman Sachs Logo"
                    width={120}
                    height={120}
                    className="h-12 w-auto object-contain"
                  />
                  <Image
                    src="/images/companies/merrill_logo.png"
                    alt="Merrill Lynch Logo"
                    width={120}
                    height={120}
                    className="h-14 w-auto object-contain"
                  />
                  <Image
                    src="/images/companies/meta_logo.png"
                    alt="Meta Logo"
                    width={120}
                    height={120}
                    className="h-6 w-auto object-contain"
                  />
                  <Image
                    src="/images/companies/mudflap_logo.png"
                    alt="Mudflap Logo"
                    width={120}
                    height={120}
                    className="h-12 w-auto object-contain"
                  />
                  <Image
                    src="/images/companies/polymath_logo.png"
                    alt="Polymath Robotics Logo"
                    width={120}
                    height={120}
                    className="h-12 w-auto object-contain"
                  />
                  <Image
                    src="/images/companies/mainstreet_logo.png"
                    alt="Mainstreet Logo"
                    width={120}
                    height={120}
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Simplify Your Production?
              </h2>
              <p className="text-xl text-muted-foreground">
                Get started today—<span className="font-bold">free forever</span> for small teams
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-blue-primary text-white hover:bg-blue-secondary" asChild>
                <Link href="/signup?landingPage=free-mrp">
                  Start Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo?landingPage=free-mrp">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
