// React
import React, {useState, useEffect} from "react";
//api
import api from "../../services/api"
// Styles 
import { Container, Armazem, Unidades, Coluna, Formulario } from "./styles"

// Header 
import Header from "../../components/HeaderPage"

export default function AddItem(){

    const [itens, setItens] = useState([]);

    useEffect(()=>{
        api.get("itens").then(({data}) => {
            setItens(data.itens);
        });
    }, [])
    // Determinando as classes e os values das unidades (Baseado com o banco de dados)
    const nomes = itens?.map((item) => (
        item.nome
    ))

    const classe = (nome) => (
        nome === "-" ? 'status-indisponivel' : 'status-disponivel'
    )
    const valor = (nome) => (
        nome === "-" ? 'Indisponivel' : 'Disponivel'
    )

    const classes = nomes.map((nome) => (
        classe(nome)
    ))
    const valores = nomes.map((nome) => (
        valor(nome)
    ))
    //////////////////////////////////////////////////////////
    return (
        <Container>
            <Header/>

            <Armazem>
            <h2 className="un__titulo">Unidades de armazenamento disponíveis:</h2>
                <Unidades>
                    <Coluna>
                        <li className="un__item">
                            <h3 className="un__item-titulo">Unidade 1:</h3>
                            <p id = "u1"  className={classes[0]}>{valores[0]}</p>
                        </li>
                        <li className="un__item">
                            <h3 className="un__item-titulo">Unidade 3:</h3>
                            <p id = "u3"  className={classes[2]}>{valores[2]}</p>
                        </li>
                        <li className="un__item">
                            <h3 className="un__item-titulo">Unidade 5:</h3>
                            <p id = "u5" className={classes[4]}>{valores[4]}</p>
                        </li>
                    </Coluna>
                    <Coluna>
                        <li className="un__item">
                            <h3 className="un__item-titulo">Unidade 2:</h3>
                            <p id = "u2" className={classes[1]}>{valores[1]}</p>
                        </li>
                        <li className="un__item">
                            <h3 className="un__item-titulo">Unidade 4:</h3>
                            <p id = "u4" className={classes[3]}>{valores[3]}</p>
                        </li>
                        <li className="un__item">
                            <h3 className="un__item-titulo">Unidade 6:</h3>
                            <p id = "u6" className={classes[5]}>{valores[5]}</p>
                        </li>
                    </Coluna>
                </Unidades>
            </Armazem>
            <Formulario>
            <div id = "item" className="campo-nome">
                <label htmlFor="fomrs__add_item-nome_item" className="nome_item">Nome do item:</label>
                <input className="input-nome" id="fomrs__add_item-nome_item" type="text"/>
            </div>
            <div id = "unidade" className="campo-unidade">
                <label htmlFor="fomrs__add_item-unidade" className="unidade">Unidade(Número):</label>
                <input className="input-unidade" id="fomrs__add_item-unidade" type="text"/>
            </div>
            <button className="btn-adicionar_item">Adicionar</button>
            </Formulario>
        </Container>
    )
}