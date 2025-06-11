const port = process.env.PORT || 3001;
const app = require('./app');
const pool = require('./config/database');

app.listen(port);
console.log(`Api rodando na porta ${port}`);


app.get('/ping', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao conectar ao banco');
  }
});