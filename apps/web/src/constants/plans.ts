export interface Plan {
  key: string;
  name: string;
  description: string;
  priceAmount: number;
  currency: string;
  interval: "month" | "year";
  features: string[];
}

export const PLANS: Plan[] = [
  {
    key: "starter",
    name: "Starter",
    description: "For individuals getting started",
    priceAmount: 9,
    currency: "USD",
    interval: "month",
    features: ["1 user", "100 calls/month", "Basic analytics"],
  },
  {
    key: "pro",
    name: "Pro",
    description: "For growing teams",
    priceAmount: 29,
    currency: "USD",
    interval: "month",
    features: ["5 users", "Unlimited calls", "Advanced analytics", "Priority support"],
  },
  {
    key: "business",
    name: "Business",
    description: "For large organizations",
    priceAmount: 99,
    currency: "USD",
    interval: "month",
    features: ["Unlimited users", "Unlimited calls", "Custom integrations", "Dedicated support"],
  },
];
