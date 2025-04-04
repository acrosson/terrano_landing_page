'use client';

import { useEffect } from 'react';
import { MainLayout } from '@/app/components/MainLayout';
import { sendGAEvent } from '@next/third-parties/google';

export default function SignupPage() {
  useEffect(() => {
    const sendConversionEvent = () => {
      console.log('Sending conversion event');
      sendGAEvent('event', 'conversion_event_submit_lead_form', {
        'value': 1.0,
        'currency': 'USD'
      });
    };

    // Try to send immediately, fall back to delayed send if GA isn't ready
    if (typeof window !== 'undefined' && window.gtag) {
      sendConversionEvent();
    } else {
      setTimeout(sendConversionEvent, 1000);
    }
  }, []);
  return (
    <MainLayout landingPage="/signup">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <div className="space-y-4 min-h-[300px]">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Success!
              </h1>
              <p className="text-lg text-muted-foreground">
                Someone will reach out in the next 24 hours to schedule a call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
