# Coding Conventions

## General Rules

1. **Presentation over plumbing.** Customize the UI layer. Leave data/API layers alone.
2. **Wrap, don't fork.** When customizing a Cal.com component, wrap it in a custom component rather than editing the original file directly — unless the change is small and surgical.
3. **Tailwind first.** Use Tailwind classes for all styling. No inline styles. No CSS modules unless absolutely necessary.
4. **Comment your overrides.** Any line that deviates from upstream Cal.com behavior must have a comment: `// DK-CUSTOM: [reason]`

## Naming Conventions

- Custom components: `DK[ComponentName].tsx` (e.g., `DKBookingPage.tsx`)
- Custom hooks: `useDK[HookName].ts` (e.g., `useDKTimeSlots.ts`)
- Custom utilities: `dk-[name].ts` (e.g., `dk-theme.ts`)
- Custom directories: `dk-overrides/` within the relevant package

## File Organization

When creating custom components, place them in a `dk-overrides/` directory within the relevant package:

```
packages/features/bookings/
├── dk-overrides/          ← Our custom components
│   ├── DKBookingPage.tsx
│   ├── DKTimeSlots.tsx
│   └── dk-booking-theme.ts
├── components/            ← Upstream Cal.com components
│   ├── BookingPage.tsx
│   └── ...
```

## Commit Messages

Use conventional commits with a `dk:` scope:

- `feat(dk): redesign booking page layout`
- `fix(dk): correct time slot alignment on mobile`
- `docs(dk): update change registry with CR-002`
- `chore(dk): sync spec kit after booking page changes`

## PR Requirements

Every PR that modifies customized code must:
1. Have a corresponding `CHANGE-REGISTRY.md` entry
2. Update `COMPONENT-MAP.md` if new components are added
3. Include `// DK-CUSTOM` comments on any modified upstream lines
