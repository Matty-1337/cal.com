import pg from 'pg';
const { Client } = pg;

const DB_URL = 'postgresql://postgres:smQprgQpmkVmpJOZWNYAmXnYxPLNJVhT@hopper.proxy.rlwy.net:39831/railway';

const client = new Client({ connectionString: DB_URL });

try {
  await client.connect();
  console.log('✅ Connected to Railway Postgres');

  // Check user exists (table is 'users' lowercase in this Railway DB)
  const userResult = await client.query(`SELECT id, username, email FROM users WHERE username = 'matty' LIMIT 1`);
  if (userResult.rows.length === 0) {
    console.log('⚠️  No user with username "matty" found. Listing all users:');
    const allUsers = await client.query(`SELECT id, username, email FROM users LIMIT 10`);
    console.log(allUsers.rows);
  } else {
    const user = userResult.rows[0];
    console.log('✅ Found user:', user);

    // Check current event type
    const etBefore = await client.query(
      `SELECT id, slug, "periodType", "periodDays", "minimumBookingNotice" FROM "EventType" WHERE slug = '30min' AND "userId" = $1`,
      [user.id]
    );
    console.log('📅 Current EventType:', etBefore.rows);

    // Run the update
    const updateResult = await client.query(
      `UPDATE "EventType"
       SET "periodType" = 'rolling',
           "periodDays" = 2,
           "periodCountCalendarDays" = true,
           "minimumBookingNotice" = 30
       WHERE "slug" = '30min'
         AND "userId" = $1`,
      [user.id]
    );
    console.log(`✅ Updated ${updateResult.rowCount} EventType row(s)`);

    // Verify
    const etAfter = await client.query(
      `SELECT id, slug, "periodType", "periodDays", "minimumBookingNotice" FROM "EventType" WHERE slug = '30min' AND "userId" = $1`,
      [user.id]
    );
    console.log('✅ Updated EventType:', etAfter.rows);
  }
} catch (err) {
  console.error('❌ Error:', err.message);
  process.exit(1);
} finally {
  await client.end();
}
