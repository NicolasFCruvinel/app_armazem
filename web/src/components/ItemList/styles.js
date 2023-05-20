import { styled } from "styled-components";


export const Container = styled.section`
    margin-top: 4em;
    color: black;
    text-align: center;
    padding: 0 30px;

    // Titulo da section
    h3 {
        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
        margin-top: 1.2em;
        margin-bottom: 2.4em;
    }
`;
export const ItemListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1em;

    li.inativo {
        display: none;
    }

    button.active {
        background-color: var(--cor-btn-selecionado);
    }
`;
