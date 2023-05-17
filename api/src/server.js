// variáveis de ambiente
require("dotenv").config();
// Express 
const express = require('express');
// rotas
const routes = require("./routes")
// Banco de dados 
const connectToDatabase = require("./database")

// conectar banco de dados
connectToDatabase();

// app
const app = express();

app.use(express.json());

app.use(routes);

// porta 
const port = 3333;

app.listen(port, () => {
  console.log(`Backend started at http://localhost:${port}`)
})
