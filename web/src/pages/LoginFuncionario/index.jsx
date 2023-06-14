// React
import React,{ useState } from "react";

// Styles 
import { Container } from "./styles";

// Header 
import Header from "../../components/HeaderPage";

// Funções para login
import { auxLogin } from '../../services/login';

// Imagens
import Logo from "../../assets/img/Logo.svg"

export default function Login(){

    const [id, setId] = useState('');
    const [senha, setSenha] = useState('');

    const handleChangeId = (event) => {
        setId(event.target.value);
    };

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    return (
        <Container>
            <Header/>
            <section className = "section-principal">
                <h1 className = "titulo">Login</h1>
                <form className="caixa-login" onSubmit={auxLogin(id, senha)}>
                    <div className="caixa-id">
                        <h2 className="text">ID:</h2>
                        <input id="id" className="btn-id" type="text" value={id} onChange={handleChangeId} />
                    </div>

                    <div className="caixa-senha">
                        <h2 className="text">Senha:</h2>
                        <input id="senha" className="btn btn-senha" type="password" value={senha} onChange={handleChangeSenha} />
                    </div>

                    <button className="btn btn-enviar" type="submit">Entrar</button>
                </form>
            </section>
            <footer>
                <img alt="Logo do projeto" src={Logo}/>
            </footer>
        </Container>
    )
}