import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content:first baseline;
    gap: 2em;
    
    height: 48px;
    width: 100%;
    padding-left: 15px;
    background-color: var(--cor-branco-fundo);  

    button {
        background-color: transparent;
    }
`;