import pool from '../config/db-connection';

export const listAllTransactions = async () => {
    const { rows } = await pool.query('SELECT * FROM transactions ORDER BY id ASC');
    return rows;
}

export const listTransaction = async (id) => {
    const { rows } = await pool.query('SELECT * FROM transactions WHERE id = $1', [id]);
    return rows;
}

export const createTransaction = async (transaction) => {
    const result = pool.query('INSERT INTO transactions (description, date, amount, transaction_type) VALUES ($1, $2, $3, $4)', 
                    [transaction.description, transaction.date, transaction.amount, transaction.transaction_type]);
                    
    return result;
}

export const updateTransaction = async (id) => {
    return 'Not implemented';
}
