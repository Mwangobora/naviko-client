import type { StatItem } from "@/src/features/Dashboard/types/types";

export function StatCard({ title, value, change, trend, detail, icon: Icon }: StatItem) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-[0_10px_30px_rgba(249,115,22,0.06)] transition-transform duration-200 hover:-translate-y-0.5">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
          <Icon className="h-5 w-5" />
        </div>
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
            trend === "up"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {change}
        </span>
      </div>

      <p className="text-sm text-slate-500">{title}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">{value}</h3>
      </div>
      <p className="mt-2 text-xs text-slate-500">{detail}</p>
    </div>
  );
}
