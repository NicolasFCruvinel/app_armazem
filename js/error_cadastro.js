function cadastro(){

    var item_cadastrado = document.getElementById("fomrs__add_item-nome_item").value;
    var unidade_cadastrada = document.getElementById("fomrs__add_item-unidade").value;

    let id_unidade = "u" + unidade_cadastrada;

    let status = document.getElementById(id_unidade);
    if (status.classList.contains('un__item-status status-disponivel')) {
        window.location.href = "/alertas/cadastro_sucesso.html";
    } else {
        window.location.href = "/alertas/cadastro_falha.html";
}

}