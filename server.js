const express = require('express');
const dotenv = require('dotenv'); // ⚠️ typo: "dontenv" → "dotenv"
dotenv.config(); // ⚠️ mova para antes de tudo

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './db.sqlite' });

const UserRoutes = require('./src/routes/UserRoutes');
const app = express();

app.use(express.json());

// ✅ Rota de teste ANTES das outras rotas
app.get('/test-db', async (req, res) => {
  try {
    await sequelize.authenticate();
    const [results] = await sequelize.query("SELECT name FROM sqlite_master WHERE type='table'");
    res.json({ tables: results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use(UserRoutes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.SERVER_PORT}`);
});