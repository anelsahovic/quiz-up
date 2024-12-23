'use client';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type Props = {
  chartData: { month: string; players: number }[]; // Format: { date: 'YYYY-MM-DD', players: 100 }
};

// Chart configuration for players
const chartConfig = {
  players: {
    label: 'Players',
    color: 'hsl(var(--primary))', // Primary color defined in your CSS variables
  },
} satisfies ChartConfig;

// Helper function to format dates for display
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // Example: 'Jan 1'
};

export function PlayersOverTimeChart({ chartData }: Props) {
  // Ensure the chart data is correctly formatted (optional)
  const formattedChartData = chartData.map((data) => ({
    ...data,
    date: formatDate(data.month), // Format the date for better display
  }));

  return (
    <ChartContainer className="w-full h-full md:h-60" config={chartConfig}>
      <LineChart
        data={formattedChartData}
        width={undefined} // Allow the chart to be responsive
        height={160} // Fixed height for a less tall chart
        margin={{
          top: 12,
          left: 12,
          right: 12,
          bottom: 12,
        }}
      >
        {/* Grid for chart */}
        <CartesianGrid vertical={false} strokeDasharray="3 3" />

        {/* X Axis */}
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 6)} // Show only 'MMM dd' format
        />

        {/* Y Axis */}
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `${value}`} // Format Y axis tick values
        />

        {/* Tooltip */}
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />

        {/* Line chart for players */}
        <Line
          dataKey="players"
          type="monotone"
          stroke="hsl(var(--primary))" // Primary color for the line stroke
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
