let btnordenarporPreco = document.getElementById('btnOrdenarPorPreco')
btnordenarporPreco.addEventListener('click', ordenarLivrosPorPrecos)

function ordenarLivrosPorPrecos() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}