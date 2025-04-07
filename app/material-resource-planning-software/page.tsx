import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { HeroGraphicERP } from '@/app/components/HeroGraphicERP';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ChevronRight, Database, LineChart, Users, DollarSign, Lock, ShieldCheckIcon, Rocket, Cpu } from 'lucide-react';
import { MainLayout } from '@/app/components/MainLayout';

export const metadata = {
  title: 'Free Material Resource Planning Software',
  description: 'AI-powered cloud-based MRP software built for manufacturers. Run your factory smarter with real-time inventory, production tools, and no monthly fees. Get started.',
};

export default function MRPLandingPage() {
  return (
    <MainLayout landingPage="/mrp">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 w-full">
              <div className="space-y-2 w-full">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none">
                Material Resource Planning Software (MRP). <br />For Free. No Monthly Fees.
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground lg:text-xl">
                  Run your factory smarter with <b>AI-powered planning</b>, real-time inventory, and production tools. No monthly fees. No steep learning curves.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-primary text-white hover:bg-blue-secondary" asChild>
                  <Link href="/signup">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/demo">
                    Book a Demo
                  </Link>
                </Button>
              </div>
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Say Goodbye to Expensive and Overcomplicated MRP Tools
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-4xl py-12">
            <p className="text-sm text-muted-foreground text-center mb-4 md:hidden">
              ← Swipe to see more →
            </p>
            <div className="overflow-x-auto relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-muted/50 to-transparent pointer-events-none md:hidden" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-muted/50 to-transparent pointer-events-none md:hidden" />
              <div className="min-w-[800px]">
                <div className="overflow-hidden rounded-xl border bg-white shadow">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 text-lg font-medium">Feature</th>
                        <th className="text-center p-4 text-lg font-medium">
                          <div className="flex flex-col items-center">
                            <span className="text-blue-primary">Terrano</span>
                            <span className="text-sm text-muted-foreground font-normal">Modern MRP</span>
                          </div>
                        </th>
                        <th className="text-center p-4 text-lg font-medium">
                          <div className="flex flex-col items-center">
                            <span>Katana</span>
                            <span className="text-sm text-muted-foreground font-normal">Legacy MRP</span>
                          </div>
                        </th>
                        <th className="text-center p-4 text-lg font-medium">
                          <div className="flex flex-col items-center">
                            <span>MRPeasy</span>
                            <span className="text-sm text-muted-foreground font-normal">Legacy MRP</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr className="border-t hover:bg-muted/50 transition-colors">
                        <td className="text-left p-4">Free Monthly Plan</td>
                        <td className="text-center p-4"><span className="text-green-600 text-xl">$0/user/month</span></td>
                        <td className="text-center p-4"><span className="text-red-500 text-xl">$399/month</span></td>
                        <td className="text-center p-4"><span className="text-red-500 text-xl">$79/user/month</span></td>
                      </tr>
                      <tr className="border-t hover:bg-muted/50 transition-colors">
                        <td className="text-left p-4">Free Monthly Plan</td>
                        <td className="text-center p-4"><span className="text-green-600 text-xl">✓</span></td>
                        <td className="text-center p-4"><span className="text-red-500 text-2xl">×</span></td>
                        <td className="text-center p-4"><span className="text-red-500 text-2xl">×</span></td>
                      </tr>
                      <tr className="border-t hover:bg-muted/50 transition-colors">
                        <td className="text-left p-4">AI Features</td>
                        <td className="text-center p-4"><span className="text-green-600 text-xl">✓</span></td>
                        <td className="text-center p-4"><span className="text-red-500 text-2xl">×</span></td>
                        <td className="text-center p-4"><span className="text-red-500 text-2xl">×</span></td>
                      </tr>
                      <tr className="border-t hover:bg-muted/50 transition-colors">
                        <td className="text-left p-4">Implementation Time</td>
                        <td className="text-center p-4"><span className="font-medium text-green-600">2 weeks</span></td>
                        <td className="text-center p-4"><span className="text-muted-foreground">8 weeks</span></td>
                        <td className="text-center p-4"><span className="text-muted-foreground">8 weeks</span></td>
                      </tr>
                      <tr className="border-t hover:bg-muted/50 transition-colors">
                        <td className="text-left p-4">Real-Time Inventory</td>
                        <td className="text-center p-4"><span className="text-green-600 text-xl">✓</span></td>
                        <td className="text-center p-4"><span className="text-green-600 text-xl">✓</span></td>
                        <td className="text-center p-4"><span className="text-green-600 text-xl">✓</span></td>
                      </tr>
                      <tr className="border-t hover:bg-muted/50 transition-colors">
                        <td className="text-left p-4">Production Scheduling</td>
                        <td className="text-center p-4"><span className="text-green-600 text-xl">✓</span></td>
                        <td className="text-center p-4"><span className="text-green-600 text-xl">✓</span></td>
                        <td className="text-center p-4"><span className="text-green-600 text-xl">✓</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <Link href="/signup">
                  Start Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
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
