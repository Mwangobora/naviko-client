import type { OrderItem } from "@/src/features/Dashboard/types/types";

type RecentOrdersTableProps = {
  orders: OrderItem[];
};

const statusClasses: Record<OrderItem["status"], string> = {
  Paid: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Refunded: "bg-rose-100 text-rose-700",
};

export function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-orange-100">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-orange-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Order</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-orange-100 bg-white">
                <td className="px-4 py-3 font-medium text-slate-800">{order.id}</td>
                <td className="px-4 py-3 text-slate-600">{order.customer}</td>
                <td className="px-4 py-3 text-slate-600">{order.date}</td>
                <td className="px-4 py-3 font-medium text-slate-800">{order.amount}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusClasses[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
