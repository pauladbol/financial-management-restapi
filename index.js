import app from './config/custom-express';
import pool from './config/db-connection';

app.get('/', (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    // response.json({ info: 'Node.js, Express, and Postgres API' })
})