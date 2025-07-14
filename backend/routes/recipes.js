import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM recipes');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/', async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO recipes(title, ingredients, instructions) VALUES ($1, $2, $3) RETURNING *',
      [title, ingredients, instructions]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;
