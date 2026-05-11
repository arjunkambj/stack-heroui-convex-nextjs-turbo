# Unifeed — Agent Context

Compact Turborepo (pnpm): Next.js 16 landing app + Convex backend, Stack Auth, HeroUI, Iconify.

## Monorepo boundaries

- `apps/web` — `@unifeed/web` — Next.js 16 (App Router), React 19, Tailwind CSS v4, Stack Auth.
- `apps/backend` — `@unifeed/backend` — Convex functions only (no Node server).
- `packages/eslint-config` — shared ESLint flat configs (`base`, `next-js`, `react-internal`).
- `packages/typescript-config` — shared tsconfig bases (`base.json`, `nextjs.json`, `react-library.json`).

## Exact dev commands

```bash
pnpm install
pnpm lint          # turbo run lint
pnpm check-types   # turbo run check-types
pnpm dev           # turbo run dev (runs both apps)
```

Scoped (use these when working in one app):

```bash
pnpm --filter @unifeed/web dev      # next dev --port 3000
pnpm --filter @unifeed/backend dev  # convex dev
pnpm --filter @unifeed/web lint
pnpm --filter @unifeed/web check-types   # next typegen && tsc --noEmit
```

## Env requirements

All of these must be present for local dev and build:

- `NEXT_PUBLIC_STACK_PROJECT_ID`
- `NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY`
- `STACK_SECRET_SERVER_KEY`
- `STACK_WEBHOOK_SECRET`
- `NEXT_PUBLIC_APP_URL`

Convex deployment vars are already committed in `.env` files (not secret), but do not overwrite them unless moving to a new Convex project.

## Web app (`apps/web`) specifics

- **Tailwind v4** via `@tailwindcss/postcss` in `postcss.config.mjs`. No traditional `tailwind.config.js`.
- **HeroUI v3 + Iconify** — use `@heroui/react`, `@heroui/styles`, and `@iconify/react` for web UI.
- **Route groups**: `(marketing)` (landing), `(auth)` (`/sign-in`, `/handler/[...stack]`), `(dashboard)` (`/overview`, `/tracking/*`, `/teams`, `/settings`).
- **Auth wiring**: `src/stack/server.ts` (server-only `StackServerApp`), `src/stack/client.ts` (`StackClientApp`). `src/proxy.ts` exists but is not wired as Next.js middleware yet.
- **Convex client**: uses `NEXT_PUBLIC_CONVEX_URL` from the committed `.env`.
- **Fonts**: multiple Google Font variables in `layout.tsx` (`--font-heading`, `--font-sans`, `--font-display`, `--font-app-sans`).
- **Images**: remotePatterns in `next.config.js` include YouTube thumbnails, Vercel Blob, CloudFront, pravatar, simpleicons, and placehold.co.

## Backend (`apps/backend`) specifics

- **Convex-only** — all code lives under `convex/`. No Express/Fastify server.
- **Do not edit** `convex/_generated/**`. These are codegen artifacts.
- **Schema**: `users`, `subscriptions`, `payments` (see `convex/schema.ts`).
- **Auth**: Stack Auth via `convex/auth.config.ts` using `getConvexProvidersConfig`.
- **Webhooks**: `convex/http.ts` mounts `POST /webhook/stack` → `convex/webhooks/stack.ts` (handles `user.created`, `user.updated`, `user.deleted`).
- **Auth helpers**: `convex/lib/auth.ts` — `requireAuth`, `getCurrentUser`, `requireCurrentUser`.
- **TypeScript** strictness: backend tsconfig enables `noUncheckedIndexedAccess`, `verbatimModuleSyntax`, `noImplicitOverride`.

## Lint / typecheck notes

- `apps/web` lint: `eslint --max-warnings 0`.
- `apps/backend` lint: `eslint . --max-warnings 0` with `@typescript-eslint/no-explicit-any` turned off and `convex/_generated` ignored.
- Root `format`: `prettier --write "**/*.{ts,tsx,md}"`.
- Turborepo task order: `build` depends on `^build`, `lint` on `^lint`, `check-types` on `^check-types`.

## What was removed / not in scope

- Admin app and product flows beyond landing/auth were removed.
- There are no tests in the workspace currently.
- No CI workflows in `.github/workflows/`.

## Skills / instructions references

- `skills-lock.json` pins `next-best-practices` from `vercel-labs/next-skills`.
- No `opencode.json` or existing `AGENTS.md` / `.cursorrules`.
