const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'db', // This matches the service name in docker-compose
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// Test the DB connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

// Routes
app.get('/', (req, res) => {
  res.send('Task Manager API is running!');
});

// Create a task
app.post('/tasks', async (req, res) => {
  const { title, description } = req.body;
  const result = await pool.query(
    'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  );
  res.json(result.rows[0]);
});

// Read all tasks
app.get('/tasks', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks');
  res.json(result.rows);
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const result = await pool.query(
    'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *',
    [title, description, id]
  );
  res.json(result.rows[0]);
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
  res.json({ message: 'Task deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
