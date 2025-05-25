import shift from 'postgres-shift';
import postgres from 'postgres';
import { fileURLToPath } from 'url';

async function isDatabaseExists(dbname) {
  let sql;
  try {
    sql = postgres('postgres://nivethan:password@localhost:5432/postgres');
    const result = await sql`SELECT EXISTS(
    SELECT datname FROM pg_catalog.pg_database WHERE datname = ${dbname})`;
    return result[0].exists;
  } catch (error) {
    console.log(error);
  } finally {
    await sql.end();
  }
}

async function createDatabase() {
  let sql;
  try {
    sql = postgres('postgres://nivethan:password@localhost:5432/postgres');
    await sql`CREATE DATABASE realworld`;
  } catch (error) {
    console.log(error);
  } finally {
    await sql.end();
  }
}

async function runMigrations(dbname) {
  let sql;
  try {
    sql = postgres(`postgres://nivethan:password@localhost:5432/${dbname}`);

    await shift({
      sql,
      path: fileURLToPath(new URL('migrations', import.meta.url)),
      before: ({ migration_id, name }) => {
        console.log('Migrating', migration_id, name);
      },
    });
    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    console.log(error);
  } finally {
    await sql.end();
  }
}

async function main() {
  const dbname = 'realworld';
  const isDbExists = await isDatabaseExists(dbname);
  if (!isDbExists) {
    console.log('Database does not exist. Creating...');
    await createDatabase();
  }
  await runMigrations(dbname);
}

await main();
