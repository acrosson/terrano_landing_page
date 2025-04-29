'use client';

import { useEffect } from 'react';
import { MainLayout } from '@/app/components/MainLayout';
import { sendGTMEvent } from '@next/third-parties/google';

export default function SignupPage() {
  useEffect(() => {
    console.log('Loading success page');
    const sendConversionEvent = () => {
      console.log('Sending conversion event');
      try {
        sendGTMEvent({ event: 'conversion_event_submit_lead_form'});
      } catch (error) {
        console.error('Failed to send GA event:', error);
      }
    };

    let attempts = 0;
    const maxAttempts = 5;

    const trySendEvent = () => {
      if (typeof window !== 'undefined') {
        sendConversionEvent();
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(trySendEvent, 1000);
      }
    };

    trySendEvent();
  }, []);
  return (
    <MainLayout landingPage="/mrp">
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
