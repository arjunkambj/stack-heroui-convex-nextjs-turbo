import Image from "next/image";

import { featureItems } from "@/constants/landing-page";

export function Features() {
  const firstRow = featureItems.slice(0, 2);
  const secondRow = featureItems.slice(2);

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-24"
      id="features"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          Features
        </span>
        <h2 className="text-4xl font-bold leading-tight">
          Everything creator teams need to scale
        </h2>
        <span className="text-lg leading-relaxed text-muted">
          Track performance, contracts, links, and team operations from one
          clean workspace.
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {firstRow.map((item) => (
            <FeatureCard item={item} key={item.heading} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {secondRow.map((item) => (
            <FeatureCard item={item} key={item.heading} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ item }: { item: (typeof featureItems)[number] }) => (
  <div className="flex flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-surface">
    <div className="relative aspect-video w-full">
      <Image
        alt={item.heading}
        className="object-cover"
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        src={item.image}
      />
    </div>
    <div className="flex flex-col gap-2 p-6">
      <h3 className="text-xl font-semibold">{item.heading}</h3>
      <p className="text-sm leading-relaxed text-muted">{item.description}</p>
    </div>
  </div>
);
