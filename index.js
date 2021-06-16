const express = require('express');
const bodyParser = require('body-parser');
const lotofacilRoutes = require('./routes/lotofacil');
const model = require('./model/lotofacil');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
const { PORT } = process.env; 

app.use('/lotofacil',lotofacilRoutes);
app.get('/', async (req, res) => {
  return res.status(200).send("foi");
})

app.listen(PORT, () => console.log(`Fezinha rodando na porta ${PORT}`))