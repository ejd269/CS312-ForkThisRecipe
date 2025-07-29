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
  const { title, ingredients, instructions, difficulty, duration } = req.body;
  try {
    const dif_val = parseInt(difficulty, 10);
    const dur_val = parseInt(duration, 10);
    console.log(dif_val);
    console.log(dur_val);

    const { rows } = await pool.query(
      'INSERT INTO recipes(title, ingredients, instructions, difficulty, duration) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, ingredients, instructions, dif_val, dur_val]
    );
    // debugging
    // res.status(201).json(rows[0]);
    
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await pool.query('SELECT * FROM recipes WHERE id = $1', [id]);
    const comments = await pool.query('SELECT * FROM comments WHERE recipe_id = $1 ORDER BY id DESC', [id]);
    if (recipe.rows.length === 0) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ recipe: recipe.rows[0], comments: comments.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/:id/comments', async (req, res) => {
  const { id } = req.params;
  const { rating, text } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO comments(recipe_id, rating, text) VALUES ($1, $2, $3) RETURNING *',
      [id, rating, text]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;
