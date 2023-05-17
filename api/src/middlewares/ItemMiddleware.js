const {validate: isUuid} = require("uuid");
const Item = require("../models/Item");

// Funções auxiliares para os Conrollers

module.exports = {
    // Função de validação de ID
    async validateId(request, response, next){
        const {id} = request.params;

        if(!isUuid(id)) {
            return response.status(400).json({error: "Id inválido"});
        }

        try {
            const item = await Item.findById(id);
            response.item = item;
            if(!item) {
                return response.status(404).json({error: "Item não encontrado"})
            }
        } catch (err) {
            return response.status(500).json({error: err.message});
        }

        next();
    }
}