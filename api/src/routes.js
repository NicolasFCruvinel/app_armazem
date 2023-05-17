const express = require('express');

const routes = express.Router();

const ItemController = require("./controllers/ItemController");
const ItemMiddleware = require("./middlewares/ItemMiddleware");

// GET: Buscar uma informação
// POST: Criar uma informação
// PUT: Editar uma informação por completo
// PATCH: Editar apenas uma parte da informação
// DELETE: Deletar uma informação

routes.get("/itens", ItemController.index);

routes.post("/itens", ItemController.store);

routes.put("/itens/:id", ItemMiddleware.validateId, ItemController.update);

routes.delete("/itens/:id", ItemMiddleware.validateId, ItemController.delete);

routes.patch("/itens/:id", ItemMiddleware.validateId, ItemController.updateDisponivel);

module.exports = routes;