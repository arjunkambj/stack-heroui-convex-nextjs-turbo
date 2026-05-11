"use client";

import { Avatar, Dropdown, Label } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { stackClientApp } from "@/stack/client";

const menuRoutes = {
  settings: "/settings",
} as const;

type ProfileUser = {
  displayName: string | null;
  primaryEmail: string | null;
  profileImageUrl: string | null;
};

const getInitials = (value: string | null) =>
  value
    ?.split(/\s|@/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

export function UserProfileMenu({ user }: { user: ProfileUser }) {
  const router = useRouter();
  const initials =
    getInitials(user.displayName) || getInitials(user.primaryEmail);

  return (
    <Dropdown>
      <Dropdown.Trigger
        aria-label="Open user profile"
        className="group size-9 cursor-pointer rounded-full border border-border bg-surface p-0 items-center flex justify-center transition-colors hover:border-accent/40 hover:bg-surface-secondary"
      >
        <Avatar className="size-7.5 rounded-full">
          {user.profileImageUrl && (
            <Avatar.Image
              src={user.profileImageUrl}
              alt={user.displayName ?? ""}
            />
          )}
          <Avatar.Fallback className="text-xs font-medium">
            {initials}
          </Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover
        className="w-64 rounded-4xl py-2"
        placement="bottom end"
      >
        <div className="flex items-center gap-2 px-2  py-2 ">
          <Avatar className="size-10 rounded-full">
            {user.profileImageUrl && (
              <Avatar.Image
                src={user.profileImageUrl}
                alt={user.displayName ?? ""}
              />
            )}
            <Avatar.Fallback className="text-sm font-semibold">
              {initials}
            </Avatar.Fallback>
          </Avatar>
          <div className="min-w-0">
            {user.displayName && (
              <div className="truncate text-sm font-semibold text-foreground">
                {user.displayName}
              </div>
            )}
            {user.primaryEmail && (
              <div className="truncate text-xs text-muted">
                {user.primaryEmail}
              </div>
            )}
          </div>
        </div>
        <Dropdown.Menu
          className="pt-1 flex flex-col gap-0"
          onAction={async (key) => {
            if (key === "settings") {
              router.push(menuRoutes[key]);
            }

            if (key === "logout") {
              await stackClientApp.signOut();
            }
          }}
        >
          <Dropdown.Item id="settings" textValue="Settings">
            <Icon icon="hugeicons:settings-02" className="size-5" />
            <Label>Settings</Label>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout">
            <Icon icon="hugeicons:logout-03" className="size-5" />
            <Label>Logout</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
