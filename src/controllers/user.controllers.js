import { pool } from '../db.js';

export const getUsers = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM usuarios ORDER BY id ASC');
    res.json(rows);
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);

    if (rows.length === 0) {
        return res.status(404).json({ message: 'user not found' });
    }
    res.json(rows[0]);
}

export const createUser = async (req, res) => {
    try {
        const data = req.body;
        const { rows } = await pool.query('INSERT INTO usuarios (id, nombre, apellido) VALUES ($1, $2, $3) RETURNING *', [data.id, data.nombre, data.apellido]);

        return res.json(rows[0]);
    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({ message: 'user already exists' });
        }
        return res.status(500).json({ message: 'internal server error' });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query(
        'DELETE FROM usuarios WHERE id = $1 RETURNING *',
        [id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: 'user not found' });
    }
    return res.json({ message: 'user deleted' });
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const { rowCount } = await pool.query(
        'UPDATE usuarios SET id = $1, nombre = $2, apellido = $3 WHERE id = $4 RETURNING *',
        [data.id, data.nombre, data.apellido, id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: 'user not found' });
    }
    return res.json({ message: 'user updated' });
}