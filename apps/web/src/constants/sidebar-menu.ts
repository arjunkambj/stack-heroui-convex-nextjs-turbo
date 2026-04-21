import type {
  NavItemConfig,
  NavModuleConfig,
  RailIconConfig,
} from "@/types/sidebar";

export const railIcons: RailIconConfig[] = [
  {
    moduleId: "home",
    label: "Home",
    icon: "ph:house",
    defaultPath: "#",
  },
  {
    moduleId: "phone",
    label: "Phone",
    icon: "ph:phone",
    defaultPath: "#",
  },
];

export const bottomRailIcons: RailIconConfig[] = [
  {
    moduleId: "team",
    label: "Teams",
    icon: "ph:users",
    defaultPath: "#",
  },
  {
    moduleId: "settings",
    label: "Settings",
    icon: "ph:gear",
    defaultPath: "#",
  },
];

export const modules: NavModuleConfig[] = [
  {
    id: "home",
    label: "Home",
    icon: "ph:house",
    defaultPath: "#",
    sections: [
      {
        id: "main",
        items: [
          {
            id: "overview",
            label: "Overview",
icon: "ph:house",
            path: "#",
          },
        ],
      },
    ],
  },
  {
    id: "phone",
    label: "Phone",
    icon: "ph:phone",
    defaultPath: "#",
    sections: [
      {
        id: "main",
        items: [
          {
            id: "calls",
            label: "Calls",
            icon: "ph:phone",
            path: "#",
          },
          {
            id: "messages",
            label: "Messages",
            icon: "ph:chat-circle",
            path: "#",
          },
          {
            id: "contacts",
            label: "Contacts",
            icon: "ph:user",
            path: "#",
          },
        ],
      },
    ],
  },
  {
    id: "team",
    label: "Teams",
    icon: "ph:users",
    defaultPath: "#",
    sections: [
      {
        id: "main",
        items: [
          {
            id: "members",
            label: "Members",
            icon: "ph:users",
            path: "#",
          },
        ],
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "ph:gear",
    defaultPath: "#",
    sections: [
      {
        id: "main",
        items: [
          {
            id: "general",
            label: "General",
            icon: "ph:gear",
            path: "#",
          },
        ],
      },
    ],
  },
];

export const utilities: NavItemConfig[] = [];

export const sidebarData = {
  railIcons,
  bottomRailIcons,
  modules,
  utilities,
};
