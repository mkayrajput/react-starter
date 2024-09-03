import {
  Home,
  LineChart,
  LucideIcon,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

export interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  badge?: number;
}

export const navLinks: NavLinkProps[] = [
  { to: "/", icon: Home, label: "Dashboard" },
  { to: "/orders", icon: ShoppingCart, label: "Orders", badge: 6 },
  { to: "/products", icon: Package, label: "Products" },
  { to: "/customers", icon: Users, label: "Customers" },
  { to: "/analytics", icon: LineChart, label: "Analytics" },
];
