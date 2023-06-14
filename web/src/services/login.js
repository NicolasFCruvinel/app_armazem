import React from "react";
import { useNavigate } from 'react-router-dom';

///////////////////////////////////////////////////////
export function auxLogin(id, senha){
    const navigate = useNavigate();

    const adm = [{
        nome: "Nicolas Cruvinel",
        ID: "11915366",
        Senha: "1111"
    },{
        nome: "Virginia Di Mauro",
        ID: "14353000",
        Senha: "2222"
    },{
        nome: "Catarina Luz",
        ID: "11819636",
        Senha: "3333"
    },{
        nome: "Thallys",
        ID: "11819827",
        Senha: "4444"
    },{
        nome: "Francisco",
        ID: "11802864",
        Senha: "5555"
    },{
        nome: "João Pedro",
        ID: "11802822",
        Senha: "6666"
    }
    ]
    ////////////////////////////////////////////////////////
    const handleSubmit = (event) => {
        event.preventDefault();
        var contador = 0;

        adm.forEach(e  => {

            if(id == e.ID && senha == e.Senha){
                contador = 1;
            }
        });

        // Fazer a validação com as informações do formulário
        if (contador>0) {

            // Redirecionar para outra página
            navigate("/addItem")
        } else {
            alert("Usuário ou senha inválidos")
        }
    };

    return handleSubmit;
}