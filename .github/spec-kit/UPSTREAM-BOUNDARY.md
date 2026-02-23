# Upstream Boundary

> Defines what we own vs. what belongs to Cal.com upstream.

## DO NOT MODIFY (Upstream Territory)

These directories and files should remain as close to upstream Cal.com as possible. Changes here create merge conflicts and break upgrades.

- `packages/prisma/` — Database schema (use migrations, don't edit schema directly)
- `packages/trpc/` — API layer (consume endpoints, don't rewrite them)
- `packages/lib/` — Core utilities (extend, don't modify)
- `packages/emails/` — Email templates (customize via Cal.com admin, not code)
- `apps/api/` — REST API app
- `apps/swagger/` — API documentation

## SAFE TO MODIFY (Our Territory)

These are our customization surfaces:

- `apps/web/` — Web app pages, layouts, and route handlers
- `packages/ui/` — UI components (prefer wrapping over editing)
- `packages/features/bookings/` — Booking flow feature module
- `packages/features/shell/` — App shell and navigation
- Any file listed in `CHANGE-REGISTRY.md`

## GRAY ZONE (Modify with Caution)

- `packages/config/` — App configuration
- `packages/types/` — TypeScript type definitions
- `tailwind.config.ts` / `tailwind-preset.js` — Tailwind theme (safe to extend, risky to override)

## Handling Upstream Updates

When pulling upstream Cal.com updates:
1. Check `CHANGE-REGISTRY.md` for all modified files
2. Resolve conflicts in favor of OUR version for registered changes
3. Test thoroughly after merge
4. Update registry entries if upstream changes affect our customizations
