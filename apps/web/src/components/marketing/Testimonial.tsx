"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    id: "1",
    title: "We track every competitor in minutes",
    description:
      "Within two weeks we spotted three viral trends our competitors were using. Adopting them doubled our engagement rate without any ad spend.",
    user: {
      name: "Sarah Chen",
      location: "Marketing Lead, TrendSetters",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&q=80",
    },
  },
  {
    id: "2",
    title: "One dashboard for the whole social team",
    description:
      "Our content, growth, and influencer teams finally look at the same data. Unifeed replaced five different tools and gave us a unified view.",
    user: {
      name: "Marcus Johnson",
      location: "Social Director, BrandBoost",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=80",
    },
  },
  {
    id: "3",
    title: "AI finds viral content before it trends",
    description:
      "The AI surfaces trending hashtags, best posting times, and content ideas in plain English. I create content in minutes instead of hours of research.",
    user: {
      name: "Emily Rodriguez",
      location: "Content Creator, SocialScale",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80",
    },
  },
];

const Testimonial = () => {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-1 sm:mb-1.5 px-0 py-0 text-primary/80">
            <span className="text-sm uppercase tracking-[0.15em] font-medium text-primary/70">
              Testimonial
            </span>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight leading-tight">What customers say</h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground">Loved by operators and teams.</p>
        </div>

        <div
          className="relative mx-auto grid w-full items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="bg-gradient-to-br from-muted/40 to-muted/20 border border-border/20 group relative flex h-full flex-col rounded-3xl p-1.5 transition-all duration-300 hover:border-border/40"
          >
            <div className="relative flex h-full flex-col p-6 sm:p-8">
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-full text-primary transition-colors">
                <Icon icon="ri:double-quotes-l" width={28} />
              </div>

              <h3 className="mb-3 text-xl font-semibold tracking-tight leading-tight group-hover:text-primary/90 transition-colors">
                {testimonial.title}
              </h3>

              <div className="mb-8 flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Avatar className="h-11 w-11 ring-2 ring-border ring-offset-2 ring-offset-background transition-all group-hover:ring-primary/30">
                  <AvatarImage src={testimonial.user.avatar} alt={testimonial.user.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold">
                    {testimonial.user.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.user.location}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial };