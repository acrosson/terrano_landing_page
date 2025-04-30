export function ComparisonTable({ price = '0' }: { price: string }) {
  const companies = [
    {
      name: 'Terrano',
      subtitle: 'Modern MRP',
      monthlyPlan: `$${price}/user/mn`,
      hasFreePlan: true,
      hasAIFeatures: true,
      implementationTime: '2 wk',
      hasRealTimeInventory: true,
      hasProductionScheduling: true,
    },
    {
      name: 'Oracle Netsuite',
      subtitle: 'Enterprise ERP',
      monthlyPlan: '$120/user/mn',
      hasFreePlan: false,
      hasAIFeatures: false,
      implementationTime: '6 mn',
      hasRealTimeInventory: true,
      hasProductionScheduling: true,
    },
    {
      name: 'Microsoft Dynamics',
      subtitle: 'Enterprise ERP',
      monthlyPlan: '$100/user/mn',
      hasFreePlan: false,
      hasAIFeatures: false,
      implementationTime: '6 mn',
      hasRealTimeInventory: true,
      hasProductionScheduling: true,
    },
    {
      name: 'Katana',
      subtitle: 'Legacy MRP',
      monthlyPlan: '$399/mn',
      hasFreePlan: false,
      hasAIFeatures: false,
      implementationTime: '8 wk',
      hasRealTimeInventory: true,
      hasProductionScheduling: true,
    },
    {
      name: 'MRPeasy',
      subtitle: 'Legacy MRP',
      monthlyPlan: '$79/user/mn',
      hasFreePlan: false,
      hasAIFeatures: false,
      implementationTime: '8 wk',
      hasRealTimeInventory: true,
      hasProductionScheduling: true,
    },
    {
      name: 'MIE',
      subtitle: 'Legacy MRP',
      monthlyPlan: '$299/mn',
      hasFreePlan: false,
      hasAIFeatures: false,
      implementationTime: '12 wk',
      hasRealTimeInventory: true,
      hasProductionScheduling: true,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
              Say Goodbye to Expensive and Overcomplicated ERP / MRP Tools
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="overflow-hidden rounded-xl border bg-white shadow">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-2 md:p-4 text-sm md:text-lg font-medium">Feature</th>
                      <th className="text-left p-2 md:p-4 text-sm md:text-lg font-medium">Monthly Plan</th>
                      <th className="text-center p-2 md:p-4 text-sm md:text-lg font-medium">Free Plan</th>
                      <th className="text-center p-2 md:p-4 text-sm md:text-lg font-medium">AI</th>
                      <th className="text-center p-2 md:p-4 text-sm md:text-lg font-medium">Setup</th>
                      <th className="text-center p-2 md:p-4 text-sm md:text-lg font-medium">Inventory</th>
                      <th className="text-center p-2 md:p-4 text-sm md:text-lg font-medium">Scheduling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {companies.map((company, index) => (
                      <tr key={company.name} className={`border-t hover:bg-muted/50 transition-colors ${index === 0 ? 'bg-blue-50' : ''}`}>
                        <td className="p-2 md:p-4">
                          <div className="flex flex-col">
                            <span className={`text-sm md:text-base font-medium ${index === 0 ? 'text-blue-primary' : ''}`}>
                              {company.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-2 md:p-4">
                          <span className={`text-sm md:text-base ${index === 0 ? 'text-green-600' : 'text-red-500'}`}>
                            {company.monthlyPlan}
                          </span>
                        </td>
                        <td className="text-center p-2 md:p-4">
                          {company.hasFreePlan ? (
                            <span className="text-green-600 text-lg md:text-xl">✓</span>
                          ) : (
                            <span className="text-red-500 text-xl md:text-2xl">×</span>
                          )}
                        </td>
                        <td className="text-center p-2 md:p-4">
                          {company.hasAIFeatures ? (
                            <span className="text-green-600 text-lg md:text-xl">✓</span>
                          ) : (
                            <span className="text-red-500 text-xl md:text-2xl">×</span>
                          )}
                        </td>
                        <td className="text-center p-2 md:p-4">
                          <span className={`text-sm md:text-base ${index === 0 ? 'font-medium text-green-600' : 'text-muted-foreground'}`}>
                            {company.implementationTime}
                          </span>
                        </td>
                        <td className="text-center p-2 md:p-4">
                          {company.hasRealTimeInventory ? (
                            <span className="text-green-600 text-lg md:text-xl">✓</span>
                          ) : (
                            <span className="text-red-500 text-xl md:text-2xl">×</span>
                          )}
                        </td>
                        <td className="text-center p-2 md:p-4">
                          {company.hasProductionScheduling ? (
                            <span className="text-green-600 text-lg md:text-xl">✓</span>
                          ) : (
                            <span className="text-red-500 text-xl md:text-2xl">×</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
