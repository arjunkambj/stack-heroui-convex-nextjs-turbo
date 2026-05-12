import { query } from "./_generated/server";
import { stackServerApp } from "./lib/stack";

export const current = query({
  args: {},
  handler: async (ctx) => {
    const user = await stackServerApp.getPartialUser({ from: "convex", ctx });

    if (user == null) {
      return null;
    }

    return {
      id: user.id,
      displayName: user.displayName,
      primaryEmail: user.primaryEmail,
      primaryEmailVerified: user.primaryEmailVerified,
      isAnonymous: user.isAnonymous,
      isMultiFactorRequired: user.isMultiFactorRequired,
      isRestricted: user.isRestricted,
      restrictedReason: user.restrictedReason,
    };
  },
});
