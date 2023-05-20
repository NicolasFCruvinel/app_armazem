import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    height: 48px;
    width: 100%;
    background: var(--cor-de-fundo);
    align-items: center;
    justify-content:first baseline;
    gap: 2em;
    padding-left: 15px;

    h2 {
        font-weight: 700;
        font-size: 22px;
        color: var(--cor-branco-fonte);
    }
`;
