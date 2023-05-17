function cadastro(){

    var item_cadastrado = document.getElementById("fomrs__add_item-nome_item").value;
    var unidade_cadastrada = document.getElementById("fomrs__add_item-unidade").value;

    let id_unidade = "u" + unidade_cadastrada;

    let status = document.getElementById(id_unidade); //Colocar aspas em id_unidade
    if (status.classList.contains('un__item-status status-disponivel')) {  //verificar condição
        window.location.href = "/alertas/cadastro_sucesso.html";
    } else {
        window.location.href = "/alertas/cadastro_falha.html";
}

}
// Dica:
// pesquise sobre o comando console.log para ir visualizando oq está fazendo