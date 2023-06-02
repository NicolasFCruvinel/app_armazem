import { styled } from "styled-components";

export const Container = styled.div`
    height: 100%;
    background: var(--cor-de-fundo);
    color: var(--cor-branco-fonte);
    font-weight: 400;

    h2 {
        font-weight: 700;
        font-size: 18px;
        padding: 1.5em;
        line-height: 1.2em;
    }
`;

export const Armazem = styled.section`
    
`;

export const Unidades = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 400;
    margin-top: 0.5em;
    margin-bottom: 2em;
`;

export const Coluna = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.3em;

    .un__item {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .un__item-titulo {
        font-size: 16px;
    }

    p.status-indisponivel {
        background-color: var(--cor-btn-desativado);
        padding: 5px 7px 5px 7px;
        border-radius: 12px;
        font-size: 14px;
        color: var(--cor-cinza-fonte);
    }

    p.status-disponivel {
        background-color: var(--cor-btn-disponivel);
        padding: 5px 7px 5px 7px;
        border-radius: 12px;
        padding: 5px 7px 5px 7px;
        border-radius: 12px;
        font-size: 14px;
        color: var(--cor-cinza-fonte);
    }
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.4em;
    text-align: start;
    margin: 0 10vw 0 10vw;
    padding: 2em 15vw 3vh 15vw;
    background-color: var(--cor-branco-fundo);
    color: var(--cor-cinza-fonte);
    border-radius: 10px 10px 0 0;
    position: absolute;
    bottom: 0;

    .campo-nome, .campo-unidade{
        display: flex;
        flex-direction: column;
        gap: 0.6em;
    }

    .nome_item, .unidade {
        font-size: 18px;
        font-weight: 500;
    }

    .input-nome, .input-unidade {
        height: 35px;
        width: 170px;
        padding-left: 10px;
        border: 1px solid var(--cor-borda-input);
        border-radius: 18px;
    }

    .btn-adicionar_item {
        font-family: var(--font-family);
        font-weight: 500;
        width: 190px;
        height: 40px;
        background-color: var(--cor-btn-selecionado);
        border: 0;
        border-radius: 20px;
    }
`;