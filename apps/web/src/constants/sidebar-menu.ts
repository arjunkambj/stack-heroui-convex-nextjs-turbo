export interface MenuItem {
  name: string
  href: string
  icon: string
}

export interface MenuCategory {
  name: string
  icon: string
  items: MenuItem[]
}

export const sidebarMainItems: MenuItem[] = [
  {
    name: "Overview",
    href: "/overview",
    icon: "solar:home-2-linear",
  },
]

export const sidebarCategories: MenuCategory[] = [
  {
    name: "Socials",
    icon: "solar:global-linear",
    items: [
      {
        name: "Accounts",
        href: "/socials/accounts",
        icon: "solar:users-group-two-rounded-linear",
      },
      {
        name: "Videos",
        href: "/socials/videos",
        icon: "solar:clapperboard-linear",
      },
    ],
  },
  {
    name: "Links",
    icon: "solar:link-circle-linear",
    items: [
      {
        name: "Manage Links",
        href: "/links",
        icon: "solar:link-linear",
      },
      {
        name: "Analytics",
        href: "/analytics",
        icon: "solar:chart-linear",
      },
    ],
  },
]

export const sidebarFooterItems: MenuItem[] = [
  {
    name: "Teams",
    href: "/teams",
    icon: "solar:users-group-rounded-linear",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "solar:settings-linear",
  },
]

// Map routes to breadcrumb-friendly labels
export const routeLabels: Record<string, string> = {
  "/overview": "Overview",
  "/socials": "Socials",
  "/socials/accounts": "Accounts",
  "/socials/videos": "Videos",
  "/links": "Links",
  "/analytics": "Analytics",
  "/teams": "Teams",
  "/settings": "Settings",
}
