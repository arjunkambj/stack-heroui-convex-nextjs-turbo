import { query } from "./_generated/server";
import { getCurrentUser } from "./lib/auth";

export const current = query({
  args: {},
  handler: async (ctx) => {
    return await getCurrentUser(ctx);
  },
});
