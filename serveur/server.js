import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors("*")); // Permet à React (localhost:3000) d'appeler le serveur (localhost:3001)

// Configuration MySQL
const dbConfig = {
  host: 'maximeh260.mysql.db',
  user: 'maximeh260',
  password: 'Cherub30330',
  database: 'maximeh260'
};

// Route API pour récupérer les données
app.get('/api/data', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM users');
    await connection.end();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(3001, () => {
  console.log('Serveur démarré sur le port 3001');
});
