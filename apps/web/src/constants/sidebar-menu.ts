import type { Route } from "next";

export interface MenuItem {
  name: string;
  href: Route;
  icon: string;
}

export interface MenuCategory {
  name: string;
  icon: string;
  items: MenuItem[];
}

export const sidebarMainItems: MenuItem[] = [
  {
    name: "Overview",
    href: "/overview",
    icon: "hugeicons:home-03",
  },
];

export const sidebarCategories: MenuCategory[] = [
  {
    name: "Socials",
    icon: "hugeicons:global",
    items: [
      {
        name: "Accounts",
        href: "/socials/accounts",
        icon: "hugeicons:user-group",
      },
      {
        name: "Videos",
        href: "/socials/videos",
        icon: "hugeicons:video-01",
      },
      {
        name: "Trends",
        href: "/socials/trends",
        icon: "hugeicons:trending-up-down",
      },
    ],
  },
  {
    name: "Links",
    icon: "hugeicons:link-circle",
    items: [
      {
        name: "Manage Links",
        href: "/links",
        icon: "hugeicons:link-03",
      },
      {
        name: "Analytics",
        href: "/analytics",
        icon: "hugeicons:chart-line-data-01",
      },
    ],
  },
];

export const sidebarFooterItems: MenuItem[] = [
  {
    name: "Agent & API",
    href: "/agent-api",
    icon: "hugeicons:ai-programming",
  },
  {
    name: "Teams",
    href: "/teams",
    icon: "hugeicons:user-group-03",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "hugeicons:settings-02",
  },
];

export const routeLabels: Record<string, string> = {
  "/overview": "Overview",
  "/socials": "Socials",
  "/socials/accounts": "Accounts",
  "/socials/videos": "Videos",
  "/socials/trends": "Trends",
  "/links": "Links",
  "/analytics": "Analytics",
  "/agent-api": "Agent & API",
  "/teams": "Teams",
  "/settings": "Settings",
};
