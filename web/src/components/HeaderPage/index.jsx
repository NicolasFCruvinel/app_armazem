// React
import React from "react";

//  Link from Routes
import { useNavigate } from 'react-router-dom';

// Styles 
import { Container } from "./styles"

// imagens 
import voltar from "../../assets/img/voltar 1.svg"

export default function Header(){

    let history = useNavigate();

    return (
        <Container>
            <button onClick={() => history(-1)}>
                <img src={voltar}alt=""/>
            </button>
        </Container>
    )
}