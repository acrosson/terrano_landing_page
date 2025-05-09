import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { HeroGraphic } from '@/app/components/HeroGraphic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ChevronRight, ArrowDown, Database, LineChart, Users, DollarSign, Lock, ShieldCheckIcon } from 'lucide-react';
import { MainLayout } from '@/app/components/MainLayout';

export default function BankingLandingPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 w-full">
              <div className="space-y-2 w-full">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none">
                  Double revenue without doubling headcount
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground lg:text-xl">
                  <b>Enterprise-grade AI</b> Agents built specifically for banks and credit unions. Supercharge your team with AI Agents. Free up human capital by automating repetitive tasks and consolidating fragmented data.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-primary text-white hover:bg-blue-secondary" asChild>
                  <Link href="https://tally.so/r/mV4kej" target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://tally.so/r/mV4kej" target="_blank" rel="noopener noreferrer">
                    Schedule a Demo
                  </Link>
                </Button>
              </div>
            </div>
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Problems
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Banks and credit unions face a myriad of operational challenges
              </h2>
            </div>
          </div>
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-grey-light-two to-grey-light-one p-8 mt-8 mb-0 rounded-lg flex justify-center items-center">
            <Image
              src="/images/problem_map_image.png"
              alt="Problem Map"
              width={926}
              height={914}
              className="w-auto max-h-[400px] mt-3 mb-3"
            />
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Tech Stack Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Not all software talks to each other (Core)</p>
                    <p>• Existing software has functionality gaps</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Labor Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Finding, training and retaining quality talent is difficult &amp; expensive</p>
                    <p>• Scaling operations is costly with human labor</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Operational Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Processing capacity per employee is limited</p>
                    <p>• Humans often perform repetitive and duplicative tasks</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-12 space-y-4 hidden">
            <h3 className="text-xl font-bold text-center">
              Existing solutions lack intelligence and aren&apos;t purpose built for banking:
            </h3>
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-lg border">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Solution</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Description</th>
                      <th className="px-4 py-3 text-center text-sm font-medium">Viability</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-t">
                      <td className="px-4 py-3 text-sm font-medium">Generalized AI Solution</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">Generalized AI solutions aren&apos;t flexible enough, and don&apos;t understand the deep complexities within banking.</td>
                      <td className="px-4 py-3 text-center">❌</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 text-sm font-medium">RPA Solution</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">RPA can&apos;t handle complex workflows and UI changes.</td>
                      <td className="px-4 py-3 text-center">❌</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 text-sm font-medium">Outsource Labor Solution</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">Outsourced teams are difficult to manage and still fairly expensive.</td>
                      <td className="px-4 py-3 text-center">❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Solution
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center">
                We built enterprise-grade AI Agents to help
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our AI Agents are purpose built for banking operations. These AI Agents can perform a variety of operational tasks. They fill the gaps that exist in your current software tech stack, ensuring data is synced between systems. They provide a secure, reliable, and cost-effective way to scale your operations.
              </p>
            </div>
          </div>
          {/* Benefits */}
          <div className="mx-auto max-w-5xl py-12">
            <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <ArrowDown className="h-6 w-6 text-white" />
                </div>
                <div className="text-base">Reduce duplicate work</div>
              </div>
              <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="text-base">Reduce data fragmentation</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                <div className="text-base">Improve operational efficiency</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-base">Improve user experience</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="text-base">Improve profit margins</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <ArrowDown className="h-6 w-6 text-white" />
                </div>
                <div className="text-base">Reduced error rates</div>
              </div>
            </div>
          </div>

          {/* Key Features Table */}
          <div className="mx-auto max-w-xs py-12">
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <tbody>
                  <tr className="bg-black">
                    <td className="p-4 text-center">
                      <span className="text-md font-bold text-white">Trust & Safety</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="flex items-center gap-4 p-4">
                      <Image
                        src="/images/soc2-badge.png"
                        alt="SOC 2"
                        width={100}
                        height={100}
                        className="h-10 w-10"
                      />
                      <span className="text-sm font-semibold">SOC 2 Compliance</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="flex items-center gap-4 p-4">
                      <Lock className="h-10 w-10 text-black-500" />
                      <span className="text-sm font-semibold">128 bit encryption</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="flex items-center gap-4 p-4">
                      <ShieldCheckIcon className="h-10 w-10 text-black-500" />
                      <span className="text-sm font-semibold">Enterprise-grade security</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Team Background Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Built by experts in AI and Banking
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Our team combines deep expertise in artificial intelligence with decades of financial services experience
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
      </section>

      {/* How You Will Work With Us Section */}
      <section id="partnering" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Partnering
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How you&apos;ll work with us</h2>
            </div>
          </div>

          <div className="mx-auto max-w-7xl py-12 grid gap-8 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Technology + Service Model</h3>
              <p className="text-muted-foreground text-lg">
                Our blended technology + service model enables us to design innovative, yet scalable solutions tailored to each client&apos;s unique needs.
              </p>
              <p className="text-muted-foreground text-lg">
                By combining cutting-edge AI with hands-on expertise, we ensure seamless implementation and long-term success.
              </p>
              <p className="text-muted-foreground text-lg">
                We don&apos;t just deliver solutions—we build lasting partnerships and work closely with our customers to drive continuous growth and efficiency.
              </p>
              <div className="mt-6 p-4 bg-white rounded-lg border border-green">
                <p className="text-lg font-bold italic">
                  &ldquo;We&apos;ll start with a quick-win project to unlock value using our Agentic AI technology, delivering measurable impact within weeks.&rdquo;</p>
              </div>
            </div>

            {/* Right Column - Cards */}
            <div className="grid gap-4">
              <Card className="border-green">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Current State Diagnosis
                    <span className="ml-auto text-sm text-muted-foreground">2 weeks</span>
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="border-green">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Solution Design
                    <span className="ml-auto text-sm text-muted-foreground">1 week</span>
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="border-green">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    Training AI Workers
                    <span className="ml-auto text-sm text-muted-foreground">2 weeks</span>
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="border-green">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    Testing & Deployment
                    <span className="ml-auto text-sm text-muted-foreground">2 weeks</span>
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="border-green">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                    Monitoring & Refinement
                    <span className="ml-auto text-sm text-muted-foreground">Indefinite</span>
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
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
            <div className="grid gap-6 md:grid-cols-2 max-w-md mx-auto">
              <Card className="h-full">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-3xl">5-15x</CardTitle>
                  <CardDescription>the throughput for your employees</CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-3xl">50%</CardTitle>
                  <CardDescription>reduction in efficiency ratio</CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-3xl">2x</CardTitle>
                  <CardDescription>your loan book without adding headcount</CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-3xl">$XXk</CardTitle>
                  <CardDescription>reduction in software vendors</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="max-w-[900px] md:text-xl">
              <span className="box-decoration-clone bg-green-light text-black px-2 py-1 rounded">
                  We&apos;ll help you <b>unlock $1M+ in value</b> through revenue growth and cost reduction with AI Agent technology.
                </span>
            </p>
          </div>
        </div>
      </section>

      {/* Application Areas Section */}
      <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Use Cases
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Apply our AI Agents across many departments
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                We can help unlock value in a variety of functional areas
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Relationship Mgt</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Loan Operations</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Underwriting</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Documentation</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Closing</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Loan Servicing</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Portfolio Management</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Loan Renewals</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Annual Reviews</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Deposit Operations</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Collateral Management</CardTitle>
                </CardHeader>
              </Card>
              <Card className="h-full border-blue-primary">
                <CardHeader>
                  <CardTitle>Covenant Monitoring</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold"><span className="box-decoration-clone bg-green-light text-black px-2 py-1 rounded">No process or workflow is too big or complex for our AI Agents.</span></h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Hear what people are saying</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                See what banks and credit unions are saying about how our AI Agents can impact their operations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Game-Changing Platform</CardTitle>
                <CardDescription>Sarah Johnson, Marketing Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  &quot;Terrano has completely transformed how our marketing team collaborates. We&apos;ve reduced meeting
                  time by 30% and increased our campaign output by 50%.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Boosted Productivity</CardTitle>
                <CardDescription>Michael Chen, Product Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  &quot;The automation features alone have saved our team countless hours. Our product development cycle is
                  now 40% faster than before we started using Terrano.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seamless Integration</CardTitle>
                <CardDescription>Alex Rivera, CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  &quot;What impressed me most was how easily Terrano integrated with our existing tools. The transition
                  was smooth, and the ROI was immediate.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to transform your bank or credit union?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Let us help you revolutionize your banking and lending operations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="https://tally.so/r/mV4kej" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://tally.so/r/mV4kej" target="_blank" rel="noopener noreferrer">
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
