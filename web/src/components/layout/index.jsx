// React
import React from "react";

// Styles 
import { Container } from "./styles"

// importando componentes da página
import Header from "../Header"
import ItemList from "../ItemList"
import ButtonArea from "../ButtonArea";

export default function Layout(){
    return (
        <Container>
            <Header/>
            <ItemList/>
            <ButtonArea/>
        </Container>
    )
}