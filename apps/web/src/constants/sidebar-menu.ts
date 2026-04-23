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
    icon: "solar:dashboard-linear",
  },
]

export const sidebarCategories: MenuCategory[] = [
  {
    name: "Tracking",
    icon: "solar:chart-linear",
    items: [
      {
        name: "Tracked Accounts",
        href: "/tracking/accounts",
        icon: "solar:user-circle-linear",
      },
      {
        name: "Tracked Videos",
        href: "/tracking/videos",
        icon: "solar:video-camera-linear",
      },
      {
        name: "Tracking Links",
        href: "/tracking/links",
        icon: "solar:link-linear",
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