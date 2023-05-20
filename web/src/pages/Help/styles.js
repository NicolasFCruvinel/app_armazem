import { styled } from "styled-components";

export const Header = styled.header`
    background: var(--cor-de-fundo);
    display: flex;
    height: 48px;
    width: 100%;
    align-items: center;
    padding-left: 15px;
`;

export const Inform = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2em;

    margin: 3em 2em 0 3em;
    background: var(--cor-branco-fundo);
    color: var(--cor-cinza-fonte);
    font-size: 16px;
    font-weight: 300;

    .titulo {
        font-size: 24px ;
        font-weight: 400;
    }
`;

export const Flex = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .box {
        width: 250px;
    }
`;