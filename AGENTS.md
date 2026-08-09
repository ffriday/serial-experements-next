<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project

A learning pet project: the owner is studying modern Next.js and AI-assisted development. The goal is understanding, not just working code.

- **Explain, don't just do.** For non-trivial decisions (Server vs Client Component, data fetching strategy, new patterns), briefly explain the reasoning in the chat.
- **Small steps.** Prefer small, reviewable changes over large generated blobs. The owner reads every diff.
- **No new dependencies without asking.** Propose and justify a library before adding it.

## Stack

- Next.js 16 (App Router) + React 19, React Compiler enabled
- TypeScript, `strict: true`
- Tailwind CSS 4 + CSS Modules (see conventions below)
- Biome for lint and format — this project does NOT use ESLint or Prettier
- pnpm — always use `pnpm`, never npm or yarn

## Commands

- `pnpm lint` — Biome check
- `pnpm format` — Biome format (writes)
- `pnpm typecheck` — `next typegen && tsc --noEmit` (typegen first, so route types are fresh)

Run `pnpm lint` and `pnpm typecheck` and fix any issues before finishing a task.

## Architecture: Feature-Sliced Design

Layers in `src/`, from top to bottom: `app` → `widgets` → `features` → `entities` → `shared`.

- A layer may import only from layers **below** it. Never import upward (e.g. `shared` must not import from `features`).
- Slices on the same layer must not import from each other.
- `src/app` contains only routing (App Router files: layouts, pages, route groups). Real UI and logic live in the lower layers.
- Use the `@/` path alias for all cross-folder imports (e.g. `@/shared/ui/HeaderContainer`).

## Conventions

- Component folder pattern (follow existing examples in `src/shared/ui/`):
  `ComponentName/ComponentName.tsx` + `ComponentName.module.css` + `index.ts` re-export.
- Styling: Tailwind utilities for one-off layout/spacing; CSS Modules for component-specific styles; design tokens in `src/shared/styles/tokens.css`.
- Prefer Server Components; add `'use client'` only when the component actually needs interactivity or browser APIs.
- No `any`; prefer precise types. Shared types live in `src/shared/types`.
- Data attributes for styling/behavior hooks go through helpers in `src/shared/lib` and constants in `src/shared/constants/dataAttributes.ts`.
