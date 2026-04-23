"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";

const navigationSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "/integrations" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
    ],
  },
];

const socialLinks = [
  { icon: "ri:twitter-x-line", href: "https://x.com/unifeed", label: "X" },
  {
    icon: "mdi:linkedin",
    href: "https://linkedin.com/company/unifeed",
    label: "LinkedIn",
  },
  {
    icon: "ic:baseline-discord",
    href: "https://discord.gg/unifeed",
    label: "Discord",
  },
  { icon: "mdi:youtube", href: "https://youtube.com/@unifeed", label: "YouTube" },
];

const Footer = () => {
  return (
    <section className="relative pt-20 pb-16 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <footer>
          {/* CTA Section */}
          <div className="mb-16 sm:mb-24 rounded-2xl max-w-7xl mx-auto p-8 sm:p-10 md:p-12 lg:p-16 transition-all duration-300 bg-gradient-to-br from-muted/40 to-muted/20 border border-border/20">
            <div className="flex flex-col items-center text-center gap-5">
              <h2 className="max-w-[700px] text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl text-foreground">
                Revolutionize social media tracking with Unifeed.
              </h2>
              <p className="max-w-[600px] text-base text-muted-foreground sm:text-lg">
                Track any account. Analyze trends. Grow faster.
              </p>
              <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group w-full sm:w-auto font-medium"
                >
                  <Link href="/signin">
                    <span className="flex items-center gap-2">
                      Start 14-day trial
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto font-medium"
                  variant="outline"
                >
                  <a href="mailto:hey@unifeed.io">
                    Email hey@unifeed.io
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="border-border grid grid-cols-1 gap-y-8 border-b border-t py-10 sm:gap-y-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-x-16 lg:py-16 max-w-7xl mx-auto">
            <div className="max-w-sm">
              <Logo />
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Unifeed centralizes your social media insights so you can track any account, analyze trends, and grow your audience faster.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 sm:gap-x-12 lg:gap-x-14">
              {navigationSections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-3 sm:mb-5 text-base sm:text-lg font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        {link.href?.startsWith("/") ? (
                          <Link
                            href={link.href}
                            className="inline-block text-sm sm:text-base text-muted-foreground transition-colors duration-300 hover:text-primary"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <a
                            href={link.href || "#"}
                            className="inline-block text-sm sm:text-base text-muted-foreground transition-colors duration-300 hover:text-primary"
                          >
                            {link.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Bottom Section */}
          <div className="mx-auto mt-4 pt-8 max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
              <p className="text-sm sm:text-base text-muted-foreground">
                © 2025 Unifeed Inc. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5 sm:justify-end">
                {socialLinks.map((link) => (
                  <a
                    aria-label={link.label}
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                  >
                    <Icon
                      icon={link.icon}
                      width={20}
                      className="transition-transform hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
