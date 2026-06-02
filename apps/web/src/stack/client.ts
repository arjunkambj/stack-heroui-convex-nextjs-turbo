import { StackClientApp } from "@stackframe/stack";
import { clientEnv } from "@/env";

export const stackClientApp = new StackClientApp({
  tokenStore: "nextjs-cookie",
  projectId: clientEnv.NEXT_PUBLIC_STACK_PROJECT_ID,
  publishableClientKey: clientEnv.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  urls: {
    handler: "/handler",
    signIn: "/sign-in",
    afterSignIn: "/overview",
    afterSignUp: "/overview",
    afterSignOut: "/",
  },
});
