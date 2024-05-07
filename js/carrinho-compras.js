let produtos = 0;
function adicionar()
{
    //Recuperando valores do input
    let valorProduto = document.getElementById("produto");
    let quantidade = document.getElementById("quantidade");
    //calculando soma individual de cada produto e formatando o texto exibido
    let somaProduto = parseInt(quantidade.value) * parseInt(valorProduto.value);
    //Adicionando elementos ao carrinho
    if (produtos == 0)
    {
        limpaTexto('texto-carrinho');
        produtos ++;
    }
    if (parseInt(valorProduto.value) == 100)
    {
    adicionaSpan('fone');
    let produto = document.querySelector('.carrinho__produtos__produto'); //lê a string toda do produto
    let quantidadeCarrinho = produto.querySelector('.texto-azul');
    let preco = produto.querySelector('.texto-azul:last-child');
    let descricao = document.getElementById("nome-produto");
    console.log(produto);
    console.log(valorProduto.value)
    quantidadeCarrinho.textContent = `${parseInt(quantidade.value)}x `;
    preco.textContent = `R$ ${somaProduto} `;
    descricao.textContent = "Fone de ouvido ";
    }





    //Formatando texto da soma final do carrinho
    let somaProdutosFormatada = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(somaProduto); //Formata os números para serem impressos em formato de dinheiro
    let valorTotal = document.getElementById("valor-total");
    valorTotal.innerText = `${somaProdutosFormatada}`;
}