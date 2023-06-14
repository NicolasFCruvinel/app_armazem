// React
import React from "react";

// Linfo for router
import { Link } from "react-router-dom"

// Styles 
import { Header, Inform, Flex } from "./styles"

// Imagens 

import voltar from "../../assets/img/voltar 1 (branco).svg"
import exp_btn from "../../assets/img/img_help.svg"
import btn_pegar from "../../assets/img/IMG_PEGAR.svg"
import btn_add from "../../assets/img/IMG_ADD.svg"

export default function Help(){
    return (
        <>
            <Header>
                <Link to="/">
                    <img src={voltar} alt=""/>
                </Link>
            </Header>
            <Inform>
                <h1 className="titulo">Seção de itens disponíveis:</h1>
                <p className="paragrafo">Você pode verificar uma lista com todos os itens disponíveis no nosso armazem. 
                Precisando apenas prescionar o botão cinza ao lado para fazelo ser selecionado.</p>
                <img src={exp_btn}width="200px" alt=""/>
                <p className="paragrafo">Depois de verificar se o item escolhido está selecionado, resta apenas apertar no botão para mandar uma aquisição de busca para o item.</p>
                <Flex>
                    <img src={btn_pegar}alt=""/>
                    <p className="paragrafo box">Botão para mandar aquisição</p>
                </Flex>
                <Flex>
                    <img src={btn_add} alt=""/>
                    <p className="paragrafo box">Botão para adicionar itens (permitido apenas para administradores).</p>
                </Flex>
            </Inform>'
        </>
    )
}