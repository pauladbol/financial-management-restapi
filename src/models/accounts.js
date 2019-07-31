import pool from '../config/db-connection';

export const listAllAccounts = async () => {
    const { rows } = await pool.query('SELECT * FROM accounts ORDER BY id ASC');
    return rows;
}

export const listAccount = async (id) => {
    const { rows } = await pool.query('SELECT * FROM accounts WHERE id = $1', [id]);
    return rows;
}

export const createAccount = async (account) => {
    const result = pool.query('INSERT INTO accounts (bank_name, balance) VALUES ($1, $2)', 
                    [account.bank_name, account.balance]);
                    
    return result;
}

export const updateAccount = async (id) => {
    return 'Not implemented';
}
