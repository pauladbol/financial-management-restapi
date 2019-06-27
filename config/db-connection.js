const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'financial-management',
  password: 'admin',
  port: 5432,
})

export default pool;