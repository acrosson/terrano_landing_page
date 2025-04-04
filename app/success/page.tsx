import { MainLayout } from '@/app/components/MainLayout';

export default function SignupPage() {
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
