"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react"
import { sidebarMainItems, sidebarCategories, sidebarFooterItems } from "@/constants/sidebar-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { UserProfile } from "./UserProfile"
import Logo from "./Logo"

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader>
        <div className="flex h-14 items-center px-3">
          <Logo />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Main navigation items */}
        <SidebarMenu>
          {sidebarMainItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                tooltip={item.name}
                isActive={pathname === item.href}
              >
                <Link href={item.href}>
                  <Icon icon={item.icon} className="size-[18px]" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {/* Collapsible category groups */}
        {sidebarCategories.map((category) => {
          const isCategoryActive = category.items.some((item) =>
            pathname.startsWith(item.href)
          )

          return (
            <Collapsible
              key={category.name}
              defaultOpen={isCategoryActive || true}
              className="group/collapsible"
            >
              <SidebarGroup className="p-0 py-1">
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors">
                    <span className="flex-1 text-left">{category.name}</span>
                    {!isCollapsed && (
                      <Icon
                        icon="solar:alt-arrow-down-linear"
                        className="size-3.5 transition-transform duration-200 group-data-[state=closed]/collapsible:rotate-[-90deg]"
                      />
                    )}
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {category.items.map((item) => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            tooltip={item.name}
                            isActive={pathname === item.href}
                          >
                            <Link href={item.href}>
                              <Icon icon={item.icon} className="size-[18px]" />
                              <span>{item.name}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )
        })}
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          {sidebarFooterItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                tooltip={item.name}
                isActive={pathname === item.href}
              >
                <Link href={item.href}>
                  <Icon icon={item.icon} className="size-[18px]" />
                  <span>{item.name}</span>
                </Link>
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
