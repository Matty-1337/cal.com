# Change Registry

> **Append-only log.** Never delete entries. Add new entries at the bottom.

## Format

Each entry follows this template:

```
### CR-[NUMBER] — [Short Description]
- **Date:** YYYY-MM-DD
- **Files Modified:**
  - `path/to/file.tsx` — [what changed]
  - `path/to/file.css` — [what changed]
- **Reason:** [why this change was made]
- **Upstream Impact:** [will this conflict with Cal.com updates? how to resolve?]
- **Notes:** [anything else relevant]
```

---

## Entries

### CR-001 — Spec Kit Initialization
- **Date:** 2025-02-22
- **Files Modified:**
  - `.github/spec-kit/*` — Created spec kit documentation system
  - `CLAUDE.md` — Created Claude Code context file
  - `.cursorrules` — Created Cursor AI context file
- **Reason:** Establish documentation system to prevent AI confusion in forked repo
- **Upstream Impact:** None — these are net-new files that don't exist in upstream Cal.com
- **Notes:** Foundation for all future customization tracking

### CR-003 — Booking Page Redesign (Visual + 36h Rolling Window)
- **Date:** 2025-02-22
- **Files Modified:**
  - `apps/web/styles/dk-overrides.css` — New DK scoped styles: page bg, card container, typography, time slot pills, chrome hiding
  - `apps/web/modules/users/views/dk-overrides/dk-booking-theme.ts` — New DK theme customClassNames (bookerWrapper, bookerContainer, eventMeta, datePicker, availableTimeSlots, confirmStep)
  - `apps/web/app/layout.tsx` — Import dk-overrides.css
  - `apps/web/modules/users/views/users-type-public-view.tsx` — Pass customClassNames={dkBookingClassNames}, hideBranding
  - `apps/web/modules/bookings/components/Booker.tsx` — DK-CUSTOM: conditionally render DKDatePills instead of DatePicker for short rolling windows
  - `apps/web/modules/bookings/components/AvailableTimeSlots.tsx` — DK-CUSTOM: apply 36-hour slot filter when DK theme active
  - `apps/web/modules/bookings/components/HavingTroubleFindingTime.tsx` — DK-CUSTOM: data-testid for DK CSS to hide component
  - `apps/web/public/static/locales/en/common.json` — Added "tomorrow" translation
- **New Files:**
  - `apps/web/modules/bookings/dk-overrides/DKDatePills.tsx` — Date pill selector (Today / Tomorrow) for short rolling windows
  - `apps/web/modules/bookings/dk-overrides/dk-slot-filter.ts` — isWithin36Hours() for 36-hour booking window
  - `scripts/sql/update-30min-event-type-rolling.sql` — SQL to set periodType=rolling, periodDays=2, minimumBookingNotice=30 for matty/30min
- **Reason:** Premium Calendly-style booking page with centered card, refined typography, time slot pills, date pills for short windows, and 36-hour rolling availability
- **Upstream Impact:** Minimal — three small DK-CUSTOM edits in Booker, AvailableTimeSlots, HavingTroubleFindingTime; all other changes in dk-overrides/ or new files
- **Notes:** Run SQL on Railway Postgres to apply event type config; DK theme applied to all public booking pages via users-type-public-view
