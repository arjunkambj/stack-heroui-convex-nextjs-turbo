"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ThemeProvider } from "next-themes";
import { clientEnv } from "@/env";
import { stackClientApp } from "@/stack/client";

const convex = new ConvexReactClient(clientEnv.NEXT_PUBLIC_CONVEX_URL);

convex.setAuth(stackClientApp.getConvexClientAuth({}));

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </ConvexProvider>
  );
}
