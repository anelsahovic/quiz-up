import { TrendingUp } from 'lucide-react';
import { PlayersOverTimeChart } from './PlayersOverTimeChart';
import { getUsersChartData } from '@/lib/queries/users/queries';

export default async function TotalPlayers() {
  // const dummyData = [
  //   { date: '2024-01', players: 50 },
  //   { date: '2024-02', players: 120 },
  //   { date: '2024-03', players: 180 },
  //   { date: '2024-04', players: 90 },
  //   { date: '2024-05', players: 150 },
  //   { date: '2024-06', players: 200 },
  // ];

  const data = await getUsersChartData();
  let chartData: { month: string; players: number }[] = [];
  if (data.length > 0) {
    chartData = data;
  }
  return (
    <div className="flex flex-col justify-between gap-1 ">
      <div>
        <h1 className="">Players Chart</h1>
        <div className="flex items-center gap-1">
          <p className="text-sm text-slate-700">
            Showing total players for the last 6 months
          </p>
          <TrendingUp className="size-4" />
        </div>
      </div>
      {data.length ? (
        <PlayersOverTimeChart chartData={chartData} />
      ) : (
        <div className="flex items-center justify-center w-full h-20">
          <p className="text-sm text-slate-700 italic">No players available</p>
        </div>
      )}
    </div>
  );
}
