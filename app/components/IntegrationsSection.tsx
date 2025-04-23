import Image from 'next/image';

export function IntegrationsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Integrate with all your tools. Automate your workflows.
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Connect your existing systems and create seamless workflows across your entire business
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Image
            src="/images/integrations.png"
            alt="Integration Partners"
            width={900}
            height={378}
          />
        </div>
      </div>
    </section>
  );
}
