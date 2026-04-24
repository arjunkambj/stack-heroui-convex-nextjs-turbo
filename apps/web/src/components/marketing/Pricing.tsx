"use client";

import { Check } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { NumberTicker } from "@/components/ui/number-ticker";

const usePrevious = <T,>(value: T) => {
  const ref = React.useRef<T>(value);
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

type BillingCycle = "monthly" | "yearly";

const pricingTiers = [
  {
    key: "starter",
    title: "Starter",
    description: "Perfect for small teams and individual creators getting started.",
    price: { monthly: "$49", yearly: "$39" },
    period: { monthly: "/month", yearly: "/month" },
    buttonText: "Get Started",
    href: "/signin",
    features: [
      "Unlimited tracked accounts",
      "Up to 150 videos",
      "24-hour data refresh",
      "Creator portals",
      "Contract management",
      "2 team seats",
      "Email support",
    ],
  },
  {
    key: "pro",
    title: "Pro",
    description: "For growing brands scaling their creator campaigns.",
    price: { monthly: "$99", yearly: "$79" },
    period: { monthly: "/month", yearly: "/month" },
    buttonText: "Get Started",
    href: "/signin",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 1,000 videos",
      "Revenue tracking & attribution",
      "Creator campaigns",
      "Creator portals",
      "Contract management",
      "5 team seats",
      "Priority support",
    ],
  },
  {
    key: "ultra",
    title: "Ultra",
    description: "For agencies and large teams with high-volume needs.",
    price: { monthly: "$299", yearly: "$239" },
    period: { monthly: "/month", yearly: "/month" },
    buttonText: "Get Started",
    href: "/signin",
    features: [
      "Everything in Pro",
      "Up to 5,000 videos",
      "12-hour data refresh",
      "15 team seats",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];

const getTierPrice = (
  tier: (typeof pricingTiers)[number],
  cycle: BillingCycle
): string => {
  return tier.price[cycle];
};

const parsePrice = (price: string): number => {
  const numeric = Number(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(numeric) ? NaN : numeric;
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const previousBillingCycle = usePrevious(billingCycle);

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-24 lg:py-28 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
              Plans
            </span>
          </div>
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-center text-base text-muted-foreground leading-relaxed">
            Start free for 14 days. Scale as you grow. Cancel anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 text-sm">
          <span
            className={`font-medium transition-colors ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}
          >
            Monthly
          </span>
          <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) => {
              setBillingCycle(checked ? "yearly" : "monthly");
            }}
          />
          <div className="flex items-center gap-2">
            <span
              className={`font-medium transition-colors ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
          {pricingTiers.map((tier) => {
            const price = getTierPrice(tier, billingCycle);
            const previousPrice = getTierPrice(
              tier,
              previousBillingCycle ?? billingCycle
            );
            const periodCopy = tier.period[billingCycle] ?? "/month";
            const currentPriceValue = parsePrice(price);
            const previousPriceValue = parsePrice(previousPrice);
            const shouldAnimate =
              Number.isFinite(currentPriceValue) &&
              Number.isFinite(previousPriceValue);
            const tickerDirection =
              currentPriceValue >= previousPriceValue ? "up" : "down";
            const isPopular = "popular" in tier && tier.popular;

            return (
              <div
                key={tier.key}
                className={`relative flex flex-col rounded-2xl h-full ${
                  isPopular
                    ? "bg-white dark:bg-background border-2 border-primary/20"
                    : "bg-white dark:bg-background border border-border/60"
                }`}
              >
                {/* Top accent for popular */}
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl" />
                )}

                <div className="flex flex-col h-full p-6 sm:p-8">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold tracking-tight text-foreground">
                        {tier.title}
                      </h3>
                      {isPopular && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-semibold text-muted-foreground">
                        $
                      </span>
                      {shouldAnimate ? (
                        <NumberTicker
                          value={currentPriceValue}
                          startValue={previousPriceValue}
                          decimalPlaces={0}
                          direction={tickerDirection}
                          className="text-5xl font-bold tracking-tight text-foreground"
                        />
                      ) : (
                        <span className="text-5xl font-bold tracking-tight text-foreground">
                          {currentPriceValue}
                        </span>
                      )}
                      <span className="text-sm font-medium text-muted-foreground ml-1">
                        {periodCopy}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      Billed {billingCycle === "monthly" ? "monthly" : "yearly"}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full font-semibold h-11 mb-8"
                    variant={isPopular ? "default" : "outline"}
                  >
                    <Link href={tier.href}>
                      {tier.buttonText}
                    </Link>
                  </Button>

                  {/* Divider */}
                  <div className="h-px bg-border mb-6" />

                  {/* Features */}
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {tier.features?.map((feature) => {
                        const isHeader = feature.includes("features, plus:");
                        return (
                          <li
                            key={feature}
                            className={`flex items-start gap-3 ${isHeader ? "pt-2" : ""}`}
                          >
                            <Check
                              className={`mt-0.5 size-4 shrink-0 ${isHeader ? "text-muted-foreground" : "text-primary"}`}
                              strokeWidth={isHeader ? 2.5 : 2}
                            />
                            <span
                              className={`text-sm leading-relaxed ${
                                isHeader
                                  ? "text-foreground font-semibold"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Pricing };
