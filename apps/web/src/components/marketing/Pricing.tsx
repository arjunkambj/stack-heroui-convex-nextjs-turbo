"use client";

import { BadgeCheck } from "lucide-react";
import React, { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    buttonVariant: "default" as const,
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
    buttonVariant: "default" as const,
    href: "/signin",
    popular: true,
    features: [
      "Starter features, plus:",
      "Unlimited tracked accounts",
      "Up to 1,000 videos",
      "24-hour data refresh",
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
    buttonVariant: "default" as const,
    href: "/signin",
    features: [
      "Pro features, plus:",
      "Unlimited tracked accounts",
      "Up to 5,000 videos",
      "12-hour data refresh",
      "Revenue tracking & attribution",
      "Creator campaigns",
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

  const priceSuffix = billingCycle === "monthly" ? "/month" : "/month";

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-24 lg:py-28 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-1 sm:mb-1.5 px-0 py-0 text-primary/80">
            <span className="text-sm uppercase tracking-[0.15em] font-medium text-primary/70">
              Plans
            </span>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground">
            Start free for 14 days. Scale as you grow. Cancel anytime.
          </p>
        </div>

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
            <span className="text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:items-stretch">
          {pricingTiers.map((tier) => {
            const price = getTierPrice(tier, billingCycle);
            const previousPrice = getTierPrice(
              tier,
              previousBillingCycle ?? billingCycle
            );
            const periodCopy = tier.period[billingCycle] ?? priceSuffix;
            const currentPriceValue = parsePrice(price);
            const previousPriceValue = parsePrice(previousPrice);
            const shouldAnimate =
              Number.isFinite(currentPriceValue) &&
              Number.isFinite(previousPriceValue);
            const tickerDirection =
              currentPriceValue >= previousPriceValue ? "up" : "down";

            return (
              <Card
                key={tier.key}
                className="h-full w-full bg-gradient-to-br from-muted/40 to-muted/20 border border-border/20 rounded-3xl p-1.5 transition-all duration-300 shadow-none sm:w-96 overflow-hidden"
              >
                <CardHeader className="flex flex-col gap-3 py-5 px-6 bg-background rounded-[20px]">
                  <div className="text-center space-y-1.5">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {tier.title}
                      </h3>
                      {"popular" in tier && tier.popular && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-success bg-success/10 px-2 py-0.5 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1 py-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      Starts at
                    </span>
                    <div className="flex items-end gap-1.5 text-4xl font-bold tracking-tight text-foreground">
                      {shouldAnimate ? (
                        <>
                          <span className="text-2xl font-semibold text-muted-foreground">
                            $
                          </span>
                          <NumberTicker
                            value={currentPriceValue}
                            startValue={previousPriceValue}
                            decimalPlaces={0}
                            direction={tickerDirection}
                          />
                        </>
                      ) : (
                        <span className="text-2xl font-semibold text-muted-foreground">
                          {price}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {periodCopy}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      Billed {billingCycle === "monthly" ? "monthly" : "yearly"}
                    </span>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full font-semibold h-11 sm:h-12 transition-all duration-200 active:scale-100 text-sm sm:text-base"
                    variant={tier.buttonVariant}
                  >
                    <Link href={tier.href}>
                      {tier.buttonText}
                    </Link>
                  </Button>
                </CardHeader>

                <div className="h-px bg-border my-0" />

                <CardContent className="flex flex-col px-6 pb-8 pt-4">
                  <div className="flex-1">
                    <ul className="space-y-4">
                      {tier.features?.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                          <span className="text-sm leading-relaxed text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Pricing };