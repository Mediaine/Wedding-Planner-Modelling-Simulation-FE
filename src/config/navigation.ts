import {
  LayoutDashboard,
  HeartHandshake,
  BarChart3,
  Scale,
  Store,
  Sparkles,
  Settings,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Scenario Builder",
    href: "/scenario-builder",
    icon: HeartHandshake,
  },
  {
    title: "Scenario Result",
    href: "/scenario-result",
    icon: BarChart3,
  },
  {
    title: "Scenario Comparison",
    href: "/scenario-comparison",
    icon: Scale,
  },
  {
    title: "Vendor Explorer",
    href: "/vendors",
    icon: Store,
  },
  {
    title: "AI Insight",
    href: "/ai-insight",
    icon: Sparkles,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];