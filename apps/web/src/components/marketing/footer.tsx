"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "@/components/layout/Logo";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Security"],
};

export function MarketingFooter() {
  return (
    <footer className="w-full border-t border-border bg-background py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          <div className="md:w-1/3">
            <Link href="/" className="mb-6 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              The all-in-one platform for creator analytics and campaign
              management.
            </p>
          </div>
          <div className="flex flex-1 justify-between gap-8 md:gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground tracking-wide">
            &copy; {new Date().getFullYear()} Unifeed. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Icon icon="ph:x-logo" width={20} />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Icon icon="ph:instagram-logo" width={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
