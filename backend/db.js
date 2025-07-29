import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:123456@localhost:5433/recipesdb'
});

export default pool;