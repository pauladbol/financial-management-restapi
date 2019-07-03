import pool from '../config/db-connection';

export const listAllUsers = async () => {
    const { rows } = await pool.query('SELECT * FROM users ORDER BY id ASC');
    return rows;
}

export const listUser = async (id) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows;
}

export const createUser = async (user) => {
    return 'Not implemented';
}

export const updateUser = async (id) => {
    return 'Not implemented';
}