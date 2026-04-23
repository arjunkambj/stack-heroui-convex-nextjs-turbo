"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react"
import { sidebarMainItems, sidebarFooterItems } from "@/constants/sidebar-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { UserProfile } from "./UserProfile"
import Logo from "./Logo"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex h-14 items-center px-3">
          <Logo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sidebarMainItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.name}
                isActive={pathname === item.href}
              >
                <a href={item.href}>
                  <Icon icon={item.icon} />
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {sidebarFooterItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.name}
                isActive={pathname === item.href}
              >
                <a href={item.href}>
                  <Icon icon={item.icon} />
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator />
        <UserProfile />
      </SidebarFooter>
    </Sidebar>
  )
}