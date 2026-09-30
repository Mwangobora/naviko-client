import { Bell, Menu, Plus, Search } from "lucide-react";

type HeaderProps = {
  onMenuToggle: () => void;
};

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-orange-100 bg-white/80 px-4 py-3 backdrop-blur md:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open sidebar"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-orange-100 bg-white text-slate-700 md:hidden"
            onClick={onMenuToggle}
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search"
              className="h-10 w-full min-w-[220px] rounded-xl border border-orange-100 bg-orange-50 pl-10 pr-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-orange-300"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-orange-100 bg-white text-slate-600 transition hover:bg-orange-50"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-orange-500" />
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 rounded-xl bg-orange-500 px-3 py-2 text-sm font-medium text-white shadow-md shadow-orange-200 transition hover:bg-orange-600 md:inline-flex"
          >
            <Plus className="h-4 w-4" />
            New report
          </button>

          <div className="flex items-center gap-3 rounded-xl border border-orange-100 bg-orange-50 px-2 py-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-semibold text-white">
              AJ
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-900">Alicia</p>
              <p className="text-[11px] text-slate-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
