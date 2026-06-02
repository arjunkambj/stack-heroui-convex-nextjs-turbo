import "server-only";

import { StackServerApp } from "@stackframe/stack";
import type { NextRequest } from "next/server";
import { serverEnv } from "@/env";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  projectId: serverEnv.NEXT_PUBLIC_STACK_PROJECT_ID,
  publishableClientKey: serverEnv.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  secretServerKey: serverEnv.STACK_SECRET_SERVER_KEY,
  urls: {
    handler: "/handler",
    signIn: "/sign-in",
    afterSignIn: "/overview",
    afterSignUp: "/overview",
    afterSignOut: "/",
  },
});

export const getStackAuthConvexServerToken = async (request: NextRequest) => {
  const token = await stackServerApp.getConvexHttpClientAuth({
    tokenStore: request,
  });

  return token.length ? token : null;
};
