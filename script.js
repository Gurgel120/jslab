console.log("JavaScript carregado com sucesso!");
const dados="../jslab/dados.json"

async function pesquisarJson(dados) {
    resultado = await fetch(dados)
    resposta = await resultado.json();
    return resposta
function calcularSubtotal(subtotal,produto){
    return subtotal * produto.quantidade

}
function calcularDesconto(produto){
    return (produto.preco * produto.desconto)/100
}
function calcularValorFinal(subtotal,desconto){
    return subtotal-desconto
}

}
async function main() {
    const resultado = await pesquisarJson(dados);
    
    const nomes = resultado.Produtos.map(produto => produto.nomes)

    console.log('Nomes: '+ nomes)

}

main()