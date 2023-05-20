import React from "react";

import { Container, Button } from "./styles"

export default function Item({id, nome, unidade, disponivel,activeButton ,hand}){
    return (
        <li className={nome === "-" ? 'inativo' : ''}>
            <Container>
                <h2>{ nome }</h2>
                <Button className={activeButton === id ? 'active':''}
                        onClick={hand}
                >
                    {activeButton === id ? 'Selecionado':'Selecionar'}
                </Button>
            </Container>
        </li>
    )
}