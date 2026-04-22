import { query } from "./_generated/server";
import { getCurrentUser } from "./lib/auth";

export const listByUser = query({
  args: {},
  handler: async (ctx) => {
    const user = await getCurrentUser(ctx);
    if (!user) return [];

    return await ctx.db
      .query("payments")
      .withIndex("ByUserId", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();
  },
});
