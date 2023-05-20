import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --cor-de-fundo: linear-gradient(93.91deg, #023047 1.82%, #219EBC 300.95%);
        --font-family: 'Josefin Sans', sans-serif;
        --cor-branco-fundo: #FCFCFC;
        --cor-btn-desativado: #D9D9D9;
        --cor-btn-selecionado: #FB8500;
        --cor-branco-fonte: #FFFFFF;
        --cor-cinza-fonte: #232323;
        --cor-btn-disponivel: #73E700;
        --cor-borda-input: #219ebc;
    }
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-family: var(--font-family);
        vertical-align: baseline;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        height: 100vh;
    }

    ul, li {
        list-style: none;
    }

    body {
        background-color: var(--cor-branco-fundo);
    }
`;