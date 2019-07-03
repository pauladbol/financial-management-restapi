import pool from '../config/db-connection';

export const listAllTransactions = async () => {
    const { rows } = await pool.query('SELECT * FROM transactions ORDER BY id ASC');
    return rows;
}

export const listTransaction = async (id) => {
    const { rows } = await pool.query('SELECT * FROM transactions WHERE id = $1', [id]);
    return rows;
}