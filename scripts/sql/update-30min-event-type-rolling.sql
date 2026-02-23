-- DK-CUSTOM: Set 30min event type to rolling 2-day window with 30-min minimum notice.
-- Note: Railway DB uses lowercase 'users' table (not "User")
UPDATE "EventType"
SET "periodType" = 'rolling',
    "periodDays" = 2,
    "periodCountCalendarDays" = true,
    "minimumBookingNotice" = 30
WHERE "slug" = '30min'
  AND "userId" = (SELECT id FROM users WHERE username = 'matty');
