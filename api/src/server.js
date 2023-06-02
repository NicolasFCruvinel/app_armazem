// variáveis de ambiente
require("dotenv").config();
// Express 
const express = require('express');
// rotas
const routes = require("./routes")
// Banco de dados 
const connectToDatabase = require("./database")

const cors = require("cors")

// conectar banco de dados
connectToDatabase();

// app
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// porta 
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Backend started at http://localhost:${port}`)
})
