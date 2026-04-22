"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export function MarketingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/80 px-5 py-3">
        <Link href="/">
          <Logo className="shrink-0" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/sign-in">Get Started</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Icon
            icon={
              mobileOpen
                ? "solar:close-circle-linear"
                : "solar:hamburger-menu-linear"
            }
            width={22}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mt-2 rounded-2xl border border-border/50 bg-background/95 p-4  backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-border pt-3">
            <Button size="sm" className="w-full" asChild>
              <Link href="/sign-in">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
