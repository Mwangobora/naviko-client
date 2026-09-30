import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NavItem } from "@/src/features/Dashboard/types/types";

type SidebarProps = {
  items: NavItem[];
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
};

export function Sidebar({ items, isCollapsed, onToggleCollapse, mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      {mobileOpen ? (
        <button
          aria-label="Close sidebar"
          className="fixed inset-0 z-30 bg-slate-900/30 md:hidden"
          onClick={onMobileClose}
        />
      ) : null}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 flex flex-col border-r border-orange-100 bg-white shadow-lg transition-all duration-300 md:static",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          isCollapsed ? "w-[88px]" : "w-[270px]",
          "md:translate-x-0",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b border-orange-100 px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-lg font-bold text-white shadow-md shadow-orange-200">
              N
            </div>
            {!isCollapsed ? <span className="text-lg font-bold text-slate-900">Naviko</span> : null}
          </div>

          <button
            type="button"
            aria-label="Collapse sidebar"
            className="hidden rounded-lg border border-orange-100 p-1.5 text-slate-500 hover:bg-orange-50 md:inline-flex"
            onClick={onToggleCollapse}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {items.map(({ id, label, icon: Icon, badge, active }) => (
            <button
              key={id}
              type="button"
              className={[
                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors",
                active ? "bg-orange-500 text-white shadow-md shadow-orange-200" : "text-slate-600 hover:bg-orange-50 hover:text-orange-700",
                isCollapsed ? "justify-center" : "",
              ].join(" ")}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!isCollapsed ? <span className="flex-1">{label}</span> : null}
              {!isCollapsed && badge ? (
                <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold text-orange-700">{badge}</span>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="border-t border-orange-100 p-3">
          <div className={`flex items-center gap-3 rounded-xl bg-orange-50 px-3 py-3 ${isCollapsed ? "justify-center" : ""}`}>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">AJ</div>
            {!isCollapsed ? (
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">Alicia James</p>
                <p className="text-xs text-slate-500">Product Lead</p>
              </div>
            ) : null}
          </div>
        </div>
      </aside>
    </>
  );
}
