"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { Icon } from "@iconify/react";

type IntegrationLogo =
  | { name: string; className?: string; icon: string; image?: never }
  | { name: string; className?: string; icon?: never; image: string };

const howItWorks = [
  {
    number: "01",
    title: "Add accounts to track",
    description:
      "Simply paste any TikTok, Instagram, YouTube, or X profile URL. No passwords or access required — just the username.",
    icon: "solar:user-plus-bold-duotone",
    imageOrder: "order-1",
    contentOrder: "order-2",
  },
  {
    number: "02",
    title: "Get instant analytics",
    description:
      "See engagement rates, follower growth, content performance, and viral trends in real-time across all platforms.",
    icon: "solar:chart-bold-duotone",
    imageOrder: "order-2",
    contentOrder: "order-1",
  },
  {
    number: "03",
    title: "Track competitors & campaigns",
    description:
      "Monitor your competitors' strategies and track influencer campaigns to identify what works and what doesn't.",
    icon: "solar:users-group-rounded-bold-duotone",
    imageOrder: "order-1",
    contentOrder: "order-2",
  },
];

const HowItWorks = () => {
  const logos: IntegrationLogo[] = [
    { icon: "logos:instagram-icon", name: "Instagram", className: "" },
    { icon: "logos:tiktok-icon", name: "TikTok", className: "" },
    { icon: "logos:twitter", name: "Twitter", className: "" },
    { icon: "logos:youtube-icon", name: "YouTube", className: "" },
  ];

  return (
    <section
      className="relative flex w-full flex-col items-center justify-center py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 px-0 py-0 text-primary/80">
            <span className="text-sm uppercase tracking-[0.15em] font-medium text-primary/70">
              How It Works
            </span>
          </div>
        </div>
        <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight leading-tight">How Unifeed Works</h2>
        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground">
          Start tracking in three simple steps: add accounts, unlock insights, and make better decisions to grow your audience.
        </p>

        <div className="relative mt-16">
          <Marquee pauseOnHover className="[--duration:25s]">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-muted/30 px-4 py-2.5"
              >
                {"image" in logo ? (
                  <Image
                    alt={logo.name}
                    className={cn("size-5", logo.className)}
                    height={20}
                    src={logo.image as string}
                    unoptimized
                    width={20}
                  />
                ) : (
                  <Icon
                    icon={logo.icon}
                    width={20}
                    height={20}
                    className={cn(logo.className)}
                  />
                )}
                <span className="text-sm font-medium text-foreground">{logo.name}</span>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent"></div>
        </div>

        <div className="relative mx-auto mt-20 grid min-h-[28rem] w-full items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {howItWorks.map((feature, index) => (
          <PinContainer
            key={index}
            className="bg-gradient-to-br from-muted/40 to-muted/20 border border-border/20 group w-full rounded-3xl p-1.5 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <div className={cn("relative overflow-hidden rounded-[20px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent", feature.imageOrder)}>
                <div className="h-64 w-full sm:h-72 flex items-center justify-center">
                  <Icon
                    icon={feature.icon}
                    className="text-primary/40 group-hover:text-primary/60 transition-colors duration-500"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-background border border-border px-2 py-1">
                    <span className="text-xs font-bold text-primary">
                      {feature.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                      Step
                    </span>
                  </div>
                </div>
              </div>
              <div className={`mt-5 w-full p-4 flex-1 ${feature.contentOrder}`}>
                <h2 className="mb-3 text-xl font-semibold tracking-tight leading-tight">
                  {feature.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
      </div>
    </section>
  );
};

export { HowItWorks };

export const PinContainer = ({
  children,
  title,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("relative h-full ", containerClassName)}>
      <div className={cn("relative h-full flex flex-col", className)}>
        {children}
      </div>
      {title && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-zinc-950 text-white text-xs font-bold px-4 py-0.5 rounded-full ring-1 ring-white/10">
            {title}
          </span>
        </div>
      )}
    </div>
  );
};