// declarando os administradores:
const adm = [{
        nome: "Nicolas Cruvinel",
        ID: "11915366",
        Senha: "1111"
    },{
        nome: "Virginia Di Mauro",
        ID: "14353000",
        Senha: "2222"
    },{
        nome: "Catarina Luz",
        ID: "11819636",
        Senha: "3333"
    },{
        nome: "Thallys",
        ID: "11819827",
        Senha: "4444"
    },{
        nome: "Francisco",
        ID: "11802864",
        Senha: "5555"
    },{
        nome: "João Pedro",
        ID: "11802822",
        Senha: "6666"
    }
]
//Função logar, chamada ao aperatar botão
function logar(){
    var id = document.getElementById("id");
    var senha = document.getElementById("senha");

    var contador = 0;

    adm.forEach(e  => {
        if(id.value == e.ID && senha.value == e.Senha){
            contador = 1;
        }
    });

    if(contador>0){
        window.location.href = "../pages/tela_funcionario.html";
    }else{
        alert("Usuário ou senha inválidos")
    }
}