import pool from '../config/db-connection';

export const listAllAccounts = async () => {
    const { rows } = await pool.query('SELECT * FROM accounts ORDER BY id ASC');
    return rows;
}

export const listAccount = async (id) => {
    const { rows } = await pool.query('SELECT * FROM accounts WHERE id = $1', [id]);
    return rows;
}