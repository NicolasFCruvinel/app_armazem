import React, { useEffect, useState } from "react";

import { Container, ItemListWrapper  } from "./styles";
import Item from "../Item";

import api from "../../services/api"

export default function ItemList (){
    const [itens, setItens] = useState([]);

    useEffect(()=>{
        api.get("itens").then(({data}) => {
            setItens(data.itens);
        });
    }, []);
    ////////////////////////////////////////////
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
    };
    
    return (
        <Container>
            <h3>Itens disponíveis</h3>
            <ItemListWrapper>
                { itens?.map((item) => (
                    <Item
                        key={item._id}
                        id = {item._id}
                        nome = {item.nome}
                        unidade = {item.unidade}
                        disponivel = {item.disponivel}
                        activeButton={activeButton}
                        hand = {() => handleClick(item._id)} 
                    />
                ))}
            </ItemListWrapper>
        </Container>
    )
}