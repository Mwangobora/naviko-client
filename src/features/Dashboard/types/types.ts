import type { LucideIcon } from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
  active?: boolean;
};

export type StatItem = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  detail: string;
  icon: LucideIcon;
};

export type RevenuePoint = {
  label: string;
  value: number;
};

export type ActivityItem = {
  title: string;
  detail: string;
  time: string;
  tone: "positive" | "warning" | "neutral";
};

export type OrderStatus = "Paid" | "Pending" | "Refunded";

export type OrderItem = {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: OrderStatus;
  channel: string;
};

export type TeamMember = {
  name: string;
  role: string;
  progress: number;
  color: string;
};
