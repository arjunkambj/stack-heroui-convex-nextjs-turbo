"use client";

import { Icon } from "@iconify/react";

type FeatureCard = {
  id: number;
  icon: string;
  title: string;
  description: string;
  badge: string;
};

const featureData: FeatureCard[] = [
  {
    id: 1,
    icon: "solar:users-group-rounded-bold-duotone",
    title: "Track Any Account",
    description:
      "Monitor any creator, competitor, or campaign across TikTok, Instagram, YouTube, and X — no passwords or access required.",
    badge: "No Passwords",
  },
  {
    id: 2,
    icon: "solar:graph-new-bold-duotone",
    title: "Real-Time Analytics",
    description:
      "Get instant insights on engagement rates, follower growth, content performance, and viral trends as they happen.",
    badge: "Live Data",
  },
  {
    id: 3,
    icon: "solar:chat-round-line-bold-duotone",
    title: "AI-Powered Insights",
    description:
      "Ask questions in plain English and get instant answers about trending content, best posting times, and audience preferences.",
    badge: "AI Powered",
  },
  {
    id: 4,
    icon: "solar:layers-bold-duotone",
    title: "Competitor Tracking",
    description:
      "Keep tabs on your competitors' strategies, content calendars, and performance metrics to stay ahead of the game.",
    badge: "Stay Ahead",
  },
  {
    id: 5,
    icon: "solar:database-bold-duotone",
    title: "Campaign Monitoring",
    description:
      "Track influencer campaigns in real-time, measure ROI, and identify which partnerships drive the best results.",
    badge: "ROI Focus",
  },
  {
    id: 6,
    icon: "solar:smartphone-bold-duotone",
    title: "Mobile App",
    description:
      "Your social media intelligence on the go. Check performance metrics and alerts without opening your laptop.",
    badge: "On The Go",
  },
];

const Feature = () => {
  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex w-full flex-col items-center justify-center"
      >
        <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 px-0 py-0 text-primary/80">
          <span className="text-sm uppercase tracking-[0.15em] font-medium text-primary/70">
            Features
          </span>
        </div>
        <h2 className="relative z-20 text-center text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight leading-tight">
          Everything You Need to Track
        </h2>
        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground">
          Powerful features designed specifically for social media tracking. Monitor every account that matters and make data-driven decisions with confidence.
        </p>

        <div className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {featureData.map((item) => (
            <article
              key={item.id}
              className="bg-gradient-to-br from-muted/40 to-muted/20 border border-border/20 group relative flex h-full flex-col rounded-3xl p-1.5 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                <Icon
                  icon={item.icon}
                  className="text-primary/40 group-hover:text-primary/60 transition-colors duration-300"
                  width={120}
                  height={120}
                />
              </div>
              <div className="mt-5 w-full space-y-3 p-4">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold">
                    {item.badge}
                  </p>
                </div>
                <h3 className="text-xl font-semibold tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature };