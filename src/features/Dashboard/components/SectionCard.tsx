import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function SectionCard({ title, action, children, className = "" }: SectionCardProps) {
  return (
    <section className={`rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_10px_30px_rgba(249,115,22,0.06)] ${className}`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        {action}
      </div>
      {children}
    </section>
  );
}
