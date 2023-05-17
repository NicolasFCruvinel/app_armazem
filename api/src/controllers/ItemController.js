const {v4: uuid} = require("uuid");
const Item = require("../models/Item");

//Controlando o banco de dados

module.exports = {
    // função para mostrar informações do banco de dados
    async index(request, response) {
        try {
            const itens = await Item.find();

            return response.status(200).json({itens});
        } catch (err) {
            response.status(500).json({error: err.message});
        }
    },

    // Adicionando item ao banco de dados
    async store(request, response) {
        const {nome, unidade} = request.body;

        if(!nome || !unidade) {
            return response.status(400).json({error: "Faltando nome ou Unidade!"});
        }

        const item = new Item({
            _id: uuid(),
            nome,
            unidade,
            disponivel: false
        })

        try {
            await item.save();

            return response.status(201).json({message: "Item adicionado com sucesso!"});
        } catch {
            return response.status(400).json({error: err.message});
        }
    },

    // Atualizando informação do banco de dados
    async update(request, response){
        const {nome, unidade} = request.body;

        if(!nome && !unidade) {
            return response.status(400).json({error: "Precisa ser infomrado um novo nome ou uma nova Unidade"});
        }

        if(nome){response.item.nome = nome};
        if(unidade){response.item.unidade = unidade};

        try {
            await response.item.save();

            return response.status(200).json({message: "Item atualizado com sucesso"});
        }catch(err){
            return response.status(400).json({error: err.message});
        }
    },

    //Deletando informação do banco de dados
    async delete(request, response) {
        try{
            await response.item.deleteOne(); //função com erro, diz que n existe

            return response.status(200).json({message: "Item deletado com sucesso"});
        }catch(err) {
            return response.status(500).json({error: err.message});
        }
    },

    async updateDisponivel(request, response){
        response.item.disponivel = !response.item.disponivel;

        try{
            await response.item.save();

            return response.status(200).json({message: `Item ${response.item.disponivel ? "Disponível" : "Indisponível"}`});
        }catch(err){
            response.status(400).json({error: err.message});
        }
    }
}