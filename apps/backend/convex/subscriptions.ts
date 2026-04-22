import { query } from "./_generated/server";
import { getCurrentUser } from "./lib/auth";

export const current = query({
  args: {},
  handler: async (ctx) => {
    const user = await getCurrentUser(ctx);
    if (!user) return null;

    return await ctx.db
      .query("subscriptions")
      .withIndex("ByUserAndStatus", (q) =>
        q.eq("userId", user._id).eq("status", "active")
      )
      .first();
  },
});
