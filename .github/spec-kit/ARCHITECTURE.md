# Architecture

## Deployment

- **Platform:** Railway (self-hosted)
- **Repository:** Forked from cal.com/cal.com
- **Owner:** Delta Kinetics

## Stack (inherited from Cal.com)

- **Framework:** Next.js (App Router + Pages Router hybrid)
- **UI:** React, Tailwind CSS, Radix UI primitives
- **Database:** PostgreSQL (via Prisma ORM)
- **Auth:** NextAuth.js
- **Monorepo:** Turborepo with packages in `/packages/`

## Key Directories

| Directory | Purpose | Customized? |
|-----------|---------|-------------|
| `apps/web/` | Main Next.js web application | ✅ YES |
| `packages/ui/` | Shared UI component library | ✅ YES (selectively) |
| `packages/features/` | Feature modules (bookings, etc.) | ✅ YES (selectively) |
| `packages/lib/` | Shared utilities | ⚠️ Minimal changes |
| `packages/prisma/` | Database schema & migrations | ⚠️ Minimal changes |
| `packages/embeds/` | Embed widgets | ❌ Not yet customized |
| `packages/trpc/` | tRPC API routes | ❌ Not yet customized |

## Customization Strategy

We customize **presentation layer only** wherever possible:
- Override styles via Tailwind
- Replace/wrap React components
- Use Cal.com's data layer as-is
- Avoid modifying tRPC routers or Prisma schema unless absolutely necessary
