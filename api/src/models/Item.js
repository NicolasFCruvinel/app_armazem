const mongoose = require("mongoose");

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
        type: String,
        required: true,
    },
    disponivel: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Item", itemSchema);