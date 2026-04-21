import type { Doc } from "../_generated/dataModel";
import { internalMutation } from "../_generated/server";
import { v } from "convex/values";

export const upsertFromStackWebhook = internalMutation({
  args: {
    stackId: v.string(),
    name: v.string(),
    email: v.string(),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const email = args.email.trim().toLowerCase();
    const existingUser = await ctx.db
      .query("users")
      .withIndex("BystackId", (q) => q.eq("stackId", args.stackId))
      .first();

    if (existingUser) {
      const patch: Partial<Doc<"users">> = {
        name: args.name,
        email,
        imageUrl: args.imageUrl,
        updatedAt: now,
      };

      await ctx.db.patch(existingUser._id, patch);
      return existingUser._id;
    }

    const insertDoc = {
      stackId: args.stackId,
      name: args.name,
      email,
      imageUrl: args.imageUrl,
      updatedAt: now,
      createdAt: now,
    } satisfies Omit<Doc<"users">, "_id" | "_creationTime">;

    return await ctx.db.insert("users", insertDoc);
  },
});

export const deleteFromStackWebhook = internalMutation({
  args: {
    stackId: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("BystackId", (q) => q.eq("stackId", args.stackId))
      .first();

    if (!existingUser) {
      return;
    }

    await ctx.db.delete(existingUser._id);
  },
});
