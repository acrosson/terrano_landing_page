'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { MainLayout } from '@/app/components/MainLayout';
import { IntegrationsSection } from '@/app/components/IntegrationsSection';
import { Button } from '../components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function FeaturesPage() {
  const searchParams = useSearchParams();

  const landingPage = searchParams.get('landingPage') ?? '/';

  const features = [
    {
      title: 'Order Management',
      description: 'Streamline your order processing with our intuitive order management system. Track orders in real-time, manage customer relationships, and ensure timely deliveries with automated workflows and notifications.',
      image: '/images/order_management_product_shot.jpg',
    },
    {
      title: 'Planning & Scheduling',
      description: 'Optimize your production planning with AI-powered scheduling tools. Balance resources, manage capacity, and create efficient production schedules that adapt to changing demands and priorities.',
      image: '/images/planning_product_shot.jpg',
    },
    {
      title: 'Supply Chain Management',
      description: 'Gain complete visibility and control over your supply chain. Monitor inventory levels, track shipments, and manage supplier relationships to ensure smooth operations and minimize disruptions.',
      image: '/images/hero_graphic_4.jpg',
    },
    {
      title: 'Procurement',
      description: 'Simplify your procurement process with automated purchase orders, vendor management, and inventory tracking. Make informed purchasing decisions with real-time data and analytics.',
      image: '/images/procurement_product_shot.jpg',
    },
    {
      title: 'CRM & Marketing',
      description: 'Build stronger customer relationships with integrated CRM tools. Track customer interactions, manage marketing campaigns, and analyze customer data to drive growth and improve satisfaction.',
      image: '/images/crm_product_shot.jpg',
    },
    {
      title: 'Insights & Analytics',
      description: 'Make data-driven decisions with comprehensive analytics and reporting tools. Monitor KPIs, track performance metrics, and gain valuable insights into your operations and business growth.',
      image: '/images/analytics_product_shot.jpg',
    },
  ];

  return (
    <MainLayout landingPage={landingPage}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Powerful Features for Modern Manufacturing
            </h1>
            <p className="max-w-[900px] text-muted-foreground text-lg md:text-2xl">
              Everything you need to run your manufacturing business efficiently and effectively
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-7/12 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="w-full md:w-5/12 relative h-[420px] bg-blue-primary/30">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-left-top rounded-xl border-2 border-blue-primary"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IntegrationsSection />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to SuperCharge Your Manufacturing Operations?
              </h2>
              <p className="text-xl text-muted-foreground">
                Get started today—<span className="font-bold">free forever</span> for small teams
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-blue-primary text-white hover:bg-blue-secondary" asChild>
                <Link href={`/signup?landingPage=${landingPage}`}>
                  Start Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/demo?landingPage=${landingPage}`}>
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
