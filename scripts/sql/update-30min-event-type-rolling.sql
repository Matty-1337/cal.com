-- DK-CUSTOM: Set 30min event type to rolling 2-day window with 30-min minimum notice.
-- Run against Railway Postgres: railway run npx prisma db execute --file scripts/sql/update-30min-event-type-rolling.sql
-- Or: psql $DATABASE_URL -f scripts/sql/update-30min-event-type-rolling.sql
UPDATE "EventType"
SET "periodType" = 'rolling',
    "periodDays" = 2,
    "periodCountCalendarDays" = true,
    "minimumBookingNotice" = 30
WHERE "slug" = '30min'
  AND "userId" = (SELECT id FROM "User" WHERE username = 'matty');
