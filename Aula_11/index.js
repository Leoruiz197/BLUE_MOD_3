const express = require('express');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const paletas = require('./src/routes/paletas.routes');
const connectToDatabase = require('./src/database/database');

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/paletas', paletas);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});