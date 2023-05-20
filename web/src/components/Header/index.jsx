import React from "react";

import { Container } from "./styles";
// imagens 
import Logo from "../../assets/img/Logo.svg"

export default function Header() {
    return (
        // procurar como fazer para logo aparecer
        <Container class="box">
            <img width="35px" src={Logo} alt="Logo do projeto"/>
            <h2>app - Armazem</h2>
        </Container>
    )
}
