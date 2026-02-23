# Component Map

> Maps every customized component to its file path, purpose, and owner.

## Booking Page Components

| Component | File Path | Status | Description |
|-----------|-----------|--------|-------------|
| DKDatePills | `apps/web/modules/bookings/dk-overrides/DKDatePills.tsx` | 🟢 Custom | Date pill selector (Today / Tomorrow) for short rolling booking windows |
| dk-slot-filter | `apps/web/modules/bookings/dk-overrides/dk-slot-filter.ts` | 🟢 Custom | 36-hour slot filter utility (isWithin36Hours) |
| dk-booking-theme | `apps/web/modules/users/views/dk-overrides/dk-booking-theme.ts` | 🟢 Custom | DK booking page customClassNames (Calendly-style) |
| Booker (datepicker section) | `apps/web/modules/bookings/components/Booker.tsx` | 🟡 Modified | Conditionally renders DKDatePills when DK + short rolling window |
| AvailableTimeSlots | `apps/web/modules/bookings/components/AvailableTimeSlots.tsx` | 🟡 Modified | Applies 36-hour filter when DK theme active |
| HavingTroubleFindingTime | `apps/web/modules/bookings/components/HavingTroubleFindingTime.tsx` | 🟡 Modified | data-testid for DK CSS hide |

## Layout Components

| Component | File Path | Status | Description |
|-----------|-----------|--------|-------------|
| *(entries will be added as customizations are made)* | | | |

## Shared/UI Components

| Component | File Path | Status | Description |
|-----------|-----------|--------|-------------|
| *(entries will be added as customizations are made)* | | | |

---

## Status Legend

- 🟢 **Custom** — Fully replaced with Delta Kinetics version
- 🟡 **Modified** — Cal.com component with targeted edits
- 🔵 **Wrapped** — Cal.com component wrapped with custom behavior
- ⚪ **Upstream** — Untouched Cal.com component
