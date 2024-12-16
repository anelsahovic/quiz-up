'use client';

import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type Props = {
  chartData: { category: string; questions: number }[];
};

// Configuration for ShadCN
const chartConfig = {
  questions: {
    label: 'Questions',
  },
  Science: {
    label: 'Science',
    color: 'hsl(var(--chart-1))',
  },
  Math: {
    label: 'Math',
    color: 'hsl(var(--chart-2))',
  },
  History: {
    label: 'History',
    color: 'hsl(var(--chart-3))',
  },
  Sports: {
    label: 'Sports',
    color: 'hsl(var(--chart-4))',
  },
  Art: {
    label: 'Art',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function QuestionsByCategoryChart({ chartData }: Props) {
  // Calculate the total number of questions
  const totalQuestions = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.questions, 0);
  }, [chartData]);

  return (
    <div className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="questions"
            nameKey="category"
            innerRadius={60}
            outerRadius={100}
            strokeWidth={5}
            isAnimationActive
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalQuestions.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Total Questions
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}
