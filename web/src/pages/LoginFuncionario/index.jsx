// React
import React, { useState }from "react";

// Styles 
import { Container } from "./styles"

// Header 
import Header from "../../components/HeaderPage"

//  Link from Routes
import { useNavigate, redirect } from 'react-router-dom';

// Imagens
import Logo from "../../assets/img/Logo.svg"

export default function Login(){

    /////////////////////////////////////////////
    //const navigate = useNavigate();

    //const handleClick = async () => {
    //    await navigate('/addItem');
    //};
    ////////////////////////////////////////////////

    const [inputId, setInputId] = useState('');
    const [inputSenha, setInputSenha] = useState('');
    
    const handleChangeId = (event) => {
        setInputId(event.target.value);
    };

    const handleChangeSenha = (event) => {
        setInputSenha(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        adm.forEach(e  => {
            if(id.value == e.ID && senha.value == e.Senha){
                contador = 1;
            }
        });
    
        if(contador>0){
            const navigate = useNavigate();
                navigate('/addItem');
        }else{
            alert("Usuário ou senha inválidos")
        }
        // Faça algo com o valor do input
    };

////////////////////////////////////////////////////////////////////////////////////////
    return (
        <Container>
            <Header/>
            <section class = "section-principal">
                <h1 class = "titulo">Login</h1>
                <forms onSubmit={handleSubmit} class = "caixa-login"> 
                    <div class = "caixa-id">
                        <h2 class = "text">ID:</h2>
                        <input value={inputId} onChange={handleChangeId} id="id" class="btn-id" type="text"></input>
                    </div>

                    <div class = "caixa-senha">    
                        <h2 class = "text">Senha:</h2>
                        <input value={inputSenha} onChange={handleChangeSenha} id="senha" class="btn btn-senha" type="password"></input> 
                    </div>
                    <button class="btn btn-enviar" type="submit">Entrar</button>
                </forms>
            </section>
            <footer>
                <img src={Logo} alt="Logo do projeto"/>
            </footer>
        </Container>
    )
}