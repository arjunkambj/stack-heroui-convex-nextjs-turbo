import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  users: defineTable({
    stackId: v.string(),
    name: v.string(),
    email: v.string(),
    imageUrl: v.optional(v.string()),
    updatedAt: v.number(),
    createdAt: v.number(),
  })
    .index("BystackId", ["stackId"])
    .index("ByEmail", ["email"])
    .index("ByUpdatedAt", ["updatedAt"]),

  subscriptions: defineTable({
    userId: v.id("users"),
    planName: v.string(),
    priceAmount: v.number(),
    status: v.union(
      v.literal("active"),
      v.literal("canceled"),
      v.literal("past_due"),
      v.literal("inactive"),
    ),
    currentPeriodEnd: v.number(),
    updatedAt: v.number(),
    createdAt: v.number(),
  })
    .index("ByUserId", ["userId"])
    .index("ByStatus", ["status"])
    .index("ByUserAndStatus", ["userId", "status"]),

  payments: defineTable({
    userId: v.id("users"),
    dodoPaymentId: v.string(),
    dodoSubscriptionId: v.string(),
    amount: v.number(),
    currency: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("succeeded"),
      v.literal("failed"),
    ),
    paidAt: v.optional(v.number()),
    updatedAt: v.number(),
    createdAt: v.number(),
  })
    .index("ByUserId", ["userId"])
    .index("ByDodoPaymentId", ["dodoPaymentId"])
    .index("ByDodoSubscriptionId", ["dodoSubscriptionId"]),
});

export default schema;
