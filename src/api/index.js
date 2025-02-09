import express, { json } from 'express';
import pkg from 'pg';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const { Pool } = pkg;

// Connection details will match your docker-compose environment variables:
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.DB_HOST || 'database', // the Docker service name for Postgres
  database: process.env.POSTGRES_DB || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
  port: 5432
});

// Save user data to DB
app.post('/users', async (req, res) => {
  try {
    const users = req.body; // array of user objects
    for (const user of users) {
      await pool.query(
        'INSERT INTO users (name, company, email, phone) VALUES ($1, $2, $3, $4)',
        [user.name, user.company.name, user.email, user.phone]
      );
    }
    res.json({ message: 'Users saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error saving users' });
  }
});

// Get users from DB
app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT id, name, 
             json_build_object('name', company) AS company, 
             email, phone 
      FROM users
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Delete users from DB
app.delete('/users', async (req, res) => {
  try {
    await pool.query("DELETE FROM users;");
    await pool.query("ALTER SEQUENCE users_id_seq RESTART WITH 1;");
    res.json({ message: "Users deleted and ID sequence reset." });

  } catch (err) {
    console.error("Error clearing users:", err);
    res.status(500).json({ error: "Failed to clear users" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
