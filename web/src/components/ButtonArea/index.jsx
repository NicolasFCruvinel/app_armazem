// React
import React from "react";

// link para ir para outra página
import { Link } from 'react-router-dom';

// Local da página que quero ir (ajuda.index)

// Styles
import { Container } from "./styles";

// Imagens 
import btn_add from "../../assets/img/btn-adicionar_item.svg"
import btn_pegar from "../../assets/img/btn-pegar_item.svg"
import btn_help from "../../assets/img/btn-help.svg"

export default function ButtonArea (){

    return (
        <Container>
            <Link to="/login">
                <img src={btn_add} alt="add"/>
            </Link>
            <button id="btn=pegar_item" class="btn btn-pegar_item">
                <img src={btn_pegar} alt="pegar"/>
            </button>
            <Link to="/help">
                <img src={btn_help} alt="help"/>
            </Link>
        </Container>
    )
}