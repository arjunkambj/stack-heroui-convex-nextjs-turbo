export interface MenuItem {
  name: string
  href: string
  icon: string
}

export const sidebarMainItems: MenuItem[] = [
  {
    name: "Overview",
    href: "/",
    icon: "solar:home-2-linear",
  },
]

export const sidebarFooterItems: MenuItem[] = [
  {
    name: "Settings",
    href: "/settings",
    icon: "solar:settings-linear",
  },
  {
    name: "Teams",
    href: "/teams",
    icon: "solar:users-group-rounded-linear",
  },
]