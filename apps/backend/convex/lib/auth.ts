import type { ActionCtx, MutationCtx, QueryCtx } from "../_generated/server";
import type { Doc } from "../_generated/dataModel";

export async function requireAuth(
  ctx: Pick<QueryCtx | MutationCtx | ActionCtx, "auth">,
) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Not authenticated");
  return identity;
}

export async function getAuth(
  ctx: Pick<QueryCtx | MutationCtx | ActionCtx, "auth">,
) {
  return await ctx.auth.getUserIdentity();
}

export async function getCurrentUser(
  ctx: Pick<QueryCtx | MutationCtx, "auth" | "db">,
) {
  const identity = await getAuth(ctx);
  if (!identity) return null;

  return await ctx.db
    .query("users")
    .withIndex("BystackId", (q) => q.eq("stackId", identity.subject))
    .first();
}

export async function requireCurrentUser(
  ctx: Pick<QueryCtx | MutationCtx, "auth" | "db">,
) {
  const user = await getCurrentUser(ctx);
  if (!user) throw new Error("User not found");
  return user satisfies Doc<"users">;
}
