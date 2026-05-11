import "server-only";

import { StackServerApp } from "@stackframe/stack";

const stackProjectId = process.env.NEXT_PUBLIC_STACK_PROJECT_ID;
const stackPublishableClientKey =
  process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY;
const stackSecretServerKey = process.env.STACK_SECRET_SERVER_KEY;

if (!stackProjectId) {
  throw new Error("Missing NEXT_PUBLIC_STACK_PROJECT_ID");
}

if (!stackPublishableClientKey) {
  throw new Error("Missing NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY");
}

if (!stackSecretServerKey) {
  throw new Error("Missing STACK_SECRET_SERVER_KEY");
}

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  projectId: stackProjectId,
  publishableClientKey: stackPublishableClientKey,
  secretServerKey: stackSecretServerKey,
  urls: {
    handler: "/handler",
    signIn: "/sign-in",
    afterSignIn: "/overview",
    afterSignUp: "/overview",
    afterSignOut: "/",
  },
});
