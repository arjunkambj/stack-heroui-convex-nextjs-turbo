import { StackServerApp } from "@stackframe/js";

export const stackServerApp = new StackServerApp({
  tokenStore: "memory",
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID!,
  secretServerKey: process.env.STACK_SECRET_SERVER_KEY!,
  noAutomaticPrefetch: true,
});
