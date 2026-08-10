---
name: learning-slice
description: >-
  Implements one small, reviewable slice of work with explanations for a
  learning Next.js pet project. Use when the user asks for a learning slice,
  says learning-slice, wants a small step with reasoning, or after approving a
  Plan and asking to implement only the next step.
disable-model-invocation: true
---

# Learning slice

## Constraints

- One outcome per run; prefer touching few files.
- No new dependencies without asking first — propose and justify.
- Prefer Server Components; `'use client'` only when required.
- Respect FSD: `app` → `widgets` → `features` → `entities` → `shared`.
- Match existing folder pattern: `ComponentName/ComponentName.tsx` + `index.ts`.
- Before finishing: run `pnpm lint` and `pnpm typecheck`; fix issues.

## Instructions

1. Restate the single slice you will implement (1–2 sentences).
2. Briefly explain non-trivial choices (SC vs CC, fetch strategy, layer).
3. Implement only that slice — no drive-by refactors.
4. Summarize the diff and what to try in the browser.
5. Offer the next slice; do not start it unless asked.
