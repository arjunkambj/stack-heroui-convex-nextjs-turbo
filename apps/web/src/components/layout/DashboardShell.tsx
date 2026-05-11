"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-dvh gap-0 bg-background">
      <AppSidebar collapsed={collapsed} />
      <div className="my-2 mr-2 flex min-w-0 flex-1 flex-col rounded-4xl bg-surface">
        <DashboardHeader onToggle={() => setCollapsed((value) => !value)} />
        <main className="flex flex-1 flex-col gap-4 px-4 py-6">{children}</main>
      </div>
    </div>
  );
}
