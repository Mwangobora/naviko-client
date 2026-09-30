import { ArrowRight, CalendarDays, Sparkles, TrendingUp } from "lucide-react";
import { activityFeed, quickActions, recentOrders, revenueData, statItems, teamMembers } from "@/src/features/Dashboard/data/dashboardData";
import { Header } from "@/src/features/Dashboard/components/Header";
import { PerformanceChart } from "@/src/features/Dashboard/components/PerformanceChart";
import { RecentOrdersTable } from "@/src/features/Dashboard/components/RecentOrdersTable";
import { SectionCard } from "@/src/features/Dashboard/components/SectionCard";
import { Sidebar } from "@/src/features/Dashboard/components/Sidebar";
import { StatCard } from "@/src/features/Dashboard/components/StatCard";
import { navItems } from "@/src/features/Dashboard/data/dashboardData";

export function DashboardView() {
  return (
    <div className="min-h-screen bg-orange-50 text-slate-800">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar
          items={navItems}
          isCollapsed={false}
          mobileOpen={false}
          onToggleCollapse={() => undefined}
          onMobileClose={() => undefined}
        />

        <main className="flex-1">
          <Header onMenuToggle={() => undefined} />

          <div className="space-y-6 p-4 md:p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Good morning, Alicia</p>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard overview</h1>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-2.5 text-sm font-medium text-orange-700 transition hover:bg-orange-50"
              >
                <CalendarDays className="h-4 w-4" />
                This week
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {statItems.map((item) => (
                <StatCard key={item.title} {...item} />
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
              <SectionCard title="Revenue trend" action={<span className="text-xs text-orange-600">Updated 5m ago</span>}>
                <PerformanceChart data={revenueData} />
              </SectionCard>

              <SectionCard title="Activity" action={<button type="button" className="text-xs font-medium text-orange-600">View all</button>}>
                <div className="space-y-4">
                  {activityFeed.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                      <div
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${
                          item.tone === "positive"
                            ? "bg-emerald-500"
                            : item.tone === "warning"
                              ? "bg-amber-500"
                              : "bg-slate-400"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                        <p className="mt-1 text-xs text-slate-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
              <SectionCard title="Recent orders" action={<button type="button" className="text-xs font-medium text-orange-600">Export</button>}>
                <RecentOrdersTable orders={recentOrders} />
              </SectionCard>

              <SectionCard title="Team progress" action={<Sparkles className="h-4 w-4 text-orange-500" />}>
                <div className="space-y-5">
                  {teamMembers.map((member) => (
                    <div key={member.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <div>
                          <p className="font-medium text-slate-800">{member.name}</p>
                          <p className="text-xs text-slate-500">{member.role}</p>
                        </div>
                        <span className="font-semibold text-slate-700">{member.progress}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-orange-100">
                        <div className={`h-full rounded-full ${member.color}`} style={{ width: `${member.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </div>

            <SectionCard title="Quick actions" action={<TrendingUp className="h-4 w-4 text-orange-500" />}>
              <div className="grid gap-4 md:grid-cols-3">
                {quickActions.map(({ title, description, icon: Icon }) => (
                  <button
                    key={title}
                    type="button"
                    className="flex items-center justify-between rounded-2xl border border-orange-100 bg-orange-50 p-4 text-left transition hover:border-orange-200 hover:bg-orange-100"
                  >
                    <div>
                      <p className="text-base font-semibold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm text-slate-600">{description}</p>
                    </div>
                    <div className="rounded-xl bg-white p-2 text-orange-600">
                      <Icon className="h-4 w-4" />
                    </div>
                  </button>
                ))}
              </div>
            </SectionCard>
          </div>
        </main>
      </div>
    </div>
  );
}
