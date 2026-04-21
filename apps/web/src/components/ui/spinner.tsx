"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

function Spinner({ className }: { className?: string }) {
  return (
    <Icon
      icon="ph:circle-notch"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
    />
  );
}

export { Spinner };
