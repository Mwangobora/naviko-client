import type { RevenuePoint } from "@/src/features/Dashboard/types/types";

type PerformanceChartProps = {
  data: RevenuePoint[];
};

export function PerformanceChart({ data }: PerformanceChartProps) {
  const maxValue = Math.max(...data.map((point) => point.value));

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-sm text-slate-500">Performance</p>
          <h3 className="text-2xl font-bold text-slate-900">$84.2K</h3>
        </div>
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">+18.2%</span>
      </div>

      <div className="flex h-52 items-end gap-3 rounded-2xl bg-gradient-to-b from-orange-50 to-white p-4">
        {data.map((point) => (
          <div key={point.label} className="flex flex-1 flex-col items-center justify-end gap-2">
            <div className="w-full rounded-t-2xl bg-gradient-to-t from-orange-600 via-orange-500 to-orange-300" style={{ height: `${(point.value / maxValue) * 100}%` }} />
            <span className="text-xs font-medium text-slate-500">{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
