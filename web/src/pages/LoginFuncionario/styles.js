import { styled } from "styled-components";

export const Container = styled.div`
    height: 100%;
    background: var(--cor-de-fundo);


    .section-principal {
        text-align: center;
        background-color: linear-gradient(93.91deg, #023047 1.82%, #219EBC 300.95%);
    }

    .titulo {
        font-weight: 700;
        font-size: 30px;
        margin-top: 2em;
        margin-bottom: 2.4em;
        color: var(--cor-branco-fonte)
    }


    .caixa-login{
        background-color: var(--cor-branco-fonte);
        width: 290.86px;
        height: 280px;
        position: absolute;
        left: 35px;
        top: 180px;
        border-radius: 8px;

    }

    .text{
        font-family: var(--font-family);
        font-size: 18px;
        left: 88px;
        text-align: left;
        margin-top: 30px;
        margin-bottom: 1em;
    }

    .caixa-id{
        width: 190px;
        height: 63px;
        top: 210;
        margin: 0 auto;
    }

    .btn-id {
        width: 190px;
        height: 35px;
        border: 1px solid #8ecae6;
        border-radius: 17.5px;
        top:238px;
        left: 85px;
        background-color: var(--cor_cabeçalho);
        padding-left: 10px;
    }

    .caixa-senha{
        width: 190px;
        height: 63px;
        top: 295;
        margin: 0 auto;
    }

    .btn-senha{
        width: 190px;
        height: 35px;
        border: 1px solid #8ecae6;
        border-radius: 17.5px;
        top:300px;
        left: 85px;
        background-color: var(--cor_cabeçalho);
        padding-left: 10px;
    }

    .btn-enviar {
        font-family: var(--font-family);
        font-size: 18px;
        font-weight: 100;
        border: 0;
        border-radius: 20px;
        position: absolute;
        width: 108px;
        height: 40px;
        left: 91px;
        top: 210px;
        background-color: var(--cor-btn-selecionado);

        /*Referente ao ancora provisório*/
        text-decoration: none;
        color:  #2c2c2c;
    }

    footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 154px;
    background: var(--cor_de_fundo);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
}

`;