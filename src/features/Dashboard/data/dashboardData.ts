import {
  ArrowUpRight,
  Bell,
  Briefcase,
  CreditCard,
  Gauge,
  LayoutDashboard,
  MessageSquareText,
  Package,
  Settings,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import type { ActivityItem, NavItem, OrderItem, RevenuePoint, StatItem, TeamMember } from "@/src/features/Dashboard/types/types";

export const navItems: NavItem[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard, active: true },
  { id: "customers", label: "Customers", icon: Users },
  { id: "orders", label: "Orders", icon: ShoppingCart, badge: "12" },
  { id: "products", label: "Products", icon: Package },
  { id: "campaigns", label: "Campaigns", icon: Sparkles },
  { id: "messages", label: "Messages", icon: MessageSquareText },
  { id: "team", label: "Team", icon: Briefcase },
  { id: "settings", label: "Settings", icon: Settings },
];

export const statItems: StatItem[] = [
  {
    title: "Net revenue",
    value: "$24.8K",
    change: "+12.4%",
    trend: "up",
    detail: "vs last month",
    icon: TrendingUp,
  },
  {
    title: "Orders",
    value: "1,284",
    change: "+8.1%",
    trend: "up",
    detail: "new this week",
    icon: ShoppingCart,
  },
  {
    title: "Conversion",
    value: "6.42%",
    change: "+1.3%",
    trend: "up",
    detail: "last 7 days",
    icon: Gauge,
  },
  {
    title: "Refunds",
    value: "1.8%",
    change: "-0.6%",
    trend: "down",
    detail: "below target",
    icon: CreditCard,
  },
];

export const revenueData: RevenuePoint[] = [
  { label: "Mon", value: 42 },
  { label: "Tue", value: 65 },
  { label: "Wed", value: 58 },
  { label: "Thu", value: 82 },
  { label: "Fri", value: 76 },
  { label: "Sat", value: 92 },
  { label: "Sun", value: 68 },
];

export const activityFeed: ActivityItem[] = [
  {
    title: "New sales milestone",
    detail: "Revenue crossed $25K for the first time this month.",
    time: "12 min ago",
    tone: "positive",
  },
  {
    title: "Campaign check-in",
    detail: "Q3 launch campaign is trending above forecast by 14%.",
    time: "1 hour ago",
    tone: "neutral",
  },
  {
    title: "Refund review",
    detail: "Two customer refunds need approval before Friday.",
    time: "3 hours ago",
    tone: "warning",
  },
];

export const recentOrders: OrderItem[] = [
  { id: "#1042", customer: "Alicia James", date: "Sep 28, 2026", amount: "$1,240.00", status: "Paid", channel: "Website" },
  { id: "#1043", customer: "Nina Baker", date: "Sep 28, 2026", amount: "$640.00", status: "Pending", channel: "Mobile" },
  { id: "#1044", customer: "Oliver Wu", date: "Sep 27, 2026", amount: "$890.00", status: "Paid", channel: "Partner" },
  { id: "#1045", customer: "Hannah Lee", date: "Sep 27, 2026", amount: "$210.00", status: "Refunded", channel: "Support" },
  { id: "#1046", customer: "Marcus Hill", date: "Sep 26, 2026", amount: "$1,980.00", status: "Paid", channel: "Website" },
];

export const teamMembers: TeamMember[] = [
  { name: "Maya Singh", role: "Growth lead", progress: 84, color: "bg-orange-500" },
  { name: "Daniel Cruz", role: "Retention", progress: 71, color: "bg-amber-500" },
  { name: "Rina Patel", role: "Operations", progress: 63, color: "bg-orange-300" },
];

export const quickActions = [
  { title: "Create campaign", description: "Launch a fresh promo run", icon: ArrowUpRight },
  { title: "Add customer", description: "Onboard a new account", icon: Users },
  { title: "Review payouts", description: "Check settlement status", icon: Bell },
];
