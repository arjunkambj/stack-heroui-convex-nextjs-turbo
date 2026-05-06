import { getConvexProvidersConfig } from "@stackframe/stack";

export default {
  providers: getConvexProvidersConfig({
    projectId: process.env.STACK_PROJECT_ID, // or: process.env.NEXT_PUBLIC_STACK_PROJECT_ID
  }),
};
