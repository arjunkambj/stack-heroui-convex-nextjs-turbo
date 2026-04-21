import type React from "react";
import Link from "next/link";

import Logo from "@/components/layout/Logo";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-dvh bg-[#fafaf9] p-4 lg:grid lg:grid-cols-2">
      <aside className="relative hidden h-full overflow-hidden rounded-3xl bg-stone-900 text-white lg:flex">
        {/* Soft gradient orbs */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-orange-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative flex w-full flex-col justify-between p-10">
          <HomeLink />

          <div className="space-y-6">
            <blockquote className="font-display text-3xl font-bold tracking-tight leading-snug">
              "Unifeed cut our reporting time by 80%. We finally see everything in one place."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-orange-500/30 flex items-center justify-center text-sm font-bold">
                SL
              </div>
              <div>
                <p className="text-sm font-semibold">Sarah Lin</p>
                <p className="text-xs text-stone-400">Head of Growth, Bloom</p>
              </div>
            </div>
          </div>

          <footer className="flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-sm text-stone-400">
              Track creators across every social platform.
            </p>
          </footer>
        </div>
      </aside>

      <main className="relative flex h-full items-center justify-center px-6 py-10 sm:px-8 lg:px-12">
        <div className="absolute left-6 top-6 lg:hidden">
          <HomeLink />
        </div>

        <div className="flex w-full justify-center pt-14 lg:pt-0">
          {children}
        </div>
      </main>
    </div>
  );
}

function HomeLink() {
  return (
    <Link href="/">
      <Logo className="gap-2" />
    </Link>
  );
}
