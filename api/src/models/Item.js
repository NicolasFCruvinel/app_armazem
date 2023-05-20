const mongoose = require("mongoose");

// Criando esquema de armazenamento de banco de dados

const itemSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    unidade: {
        type: Number,
        required: true,
    },
    disponivel: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Item", itemSchema);