"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

import Logo from "@/components/layout/Logo";

const footerLinks = [
  {
    links: [
      { href: "#features", name: "Features" },
      { href: "#pricing", name: "Pricing" },
    ],
    title: "Company",
  },
  {
    links: [
      { href: "#faq", name: "FAQ" },
      { href: "/overview", name: "Overview" },
    ],
    title: "Resources",
  },
  {
    links: [
      { href: "#terms", name: "Terms" },
      { href: "#privacy", name: "Privacy Policy" },
    ],
    title: "Legal",
  },
] as const;

const socialLinks = [
  { href: "#", icon: "ph:x-logo", label: "X" },
  { href: "#", icon: "ph:instagram-logo", label: "Instagram" },
  { href: "#", icon: "ph:telegram-logo", label: "Telegram" },
] as const;

export function FooterCTA() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-3 overflow-hidden rounded-[2rem] bg-surface-secondary px-6 py-20 text-center md:px-12">
      <h3 className="relative text-4xl font-bold">
        Ready to track your next creator campaign?
      </h3>
      <p className="relative max-w-xl text-lg text-muted">
        Bring performance, attribution, contracts, and reporting into one
        workspace.
      </p>
      <Link href="/sign-in">
        <Button className="mt-4" size="lg">
          Get Started
        </Button>
      </Link>
    </div>
  );
}

export function Footer() {
  return (
    <div className="flex flex-col gap-18 px-4 pt-24">
      <FooterCTA />
      <footer className="w-full bg-background">
        <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {footerLinks.map((section) => (
              <div className="flex flex-col gap-4" key={section.title}>
                <h4 className="text-sm font-semibold">{section.title}</h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        className="text-sm text-muted transition-colors hover:text-accent"
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold">Stay connected</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    aria-label={social.label}
                    className="text-muted transition-colors hover:text-accent"
                    href={social.href}
                    key={social.label}
                  >
                    <Icon icon={social.icon} width={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border" />

          <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="flex max-w-xs flex-col gap-3">
              <Logo />
              <p className="text-sm text-muted">
                Creator campaign intelligence for brands, agencies, and teams
                scaling social partnerships.
              </p>
            </div>
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Unifeed. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
