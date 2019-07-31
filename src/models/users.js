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
    const result = pool.query('INSERT INTO users (name, username, password, email, created_on, last_login) VALUES ($1, $2, $3, $4, $5, $6)', 
                    [user.name, user.username, user.password, user.email, user.created_on, user.last_login]);
                    
    return result;
}

export const updateUser = async (id) => {
    return 'Not implemented';
}