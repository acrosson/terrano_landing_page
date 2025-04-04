'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: 'T1', efficiencyRatio: 70, profitMargin: 18 },
  { time: 'T2', efficiencyRatio: 60, profitMargin: 24 },
  { time: 'T3', efficiencyRatio: 50, profitMargin: 28 },
  { time: 'T4', efficiencyRatio: 45, profitMargin: 32 },
  { time: 'T5', efficiencyRatio: 35, profitMargin: 37 },
];

export function DualAxisChart() {
  return (
    <div className="bg-gradient-to-br from-chart-blue-primary to-chart-blue-secondary p-2.5 sm:p-8 mt-5">
      <div className="w-full h-[400px] p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Results you can measure</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="time"
            />
            <YAxis
              yAxisId="left"
              label={{
                value: 'Efficiency Ratio (%)',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle' },
              }}
              domain={[30, 75]}
              tickCount={6}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: 'Profit Margin (%)',
                angle: 90,
                position: 'insideRight',
                style: { textAnchor: 'middle' },
              }}
              domain={[16, 40]}
              tickCount={6}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <Legend verticalAlign="bottom" height={60} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="efficiencyRatio"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ strokeWidth: 2 }}
              name="Efficiency Ratio"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="profitMargin"
              stroke="#16a34a"
              strokeWidth={2}
              dot={{ strokeWidth: 2 }}
              name="Profit Margin"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
