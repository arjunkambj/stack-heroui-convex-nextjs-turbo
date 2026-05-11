"use client";

import { brands } from "@/constants/landing-page";

export function MarketingMarquee() {
  return (
    <section className="w-full overflow-hidden pb-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-medium">
          Built for the channels your creators already use
        </h2>
      </div>
      <div className="relative mx-auto max-w-4xl overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
        />
        <div className="flex animate-[marquee_30s_linear_infinite]">
          {[...brands, ...brands, ...brands].map(([name, logo], index) => (
            <div
              className="flex shrink-0 items-center gap-4 px-12"
              key={`${name}-${index}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={name}
                className="h-8 w-auto opacity-90 grayscale transition-opacity hover:opacity-100"
                src={logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
