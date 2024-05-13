const listaProdutos = document.getElementById('lista-produtos');
const valorTotal = document.getElementById('valor-total');
let carrinho = []; // Array para armazenar os produtos do carrinho

function adicionar() {
  const produtoSelect = document.getElementById('produto');
  const quantidadeInput = document.getElementById('quantidade');

  const produtoId = produtoSelect.value;
  const quantidade = parseInt(quantidadeInput.value) || 1; // Garante que a quantidade seja um número válido (ou 1 se não for informado)

  if (produtoId) { // Verifica se um produto foi selecionado
    const produto = {
      id: produtoId,
      nome: produtoSelect.options[produtoSelect.selectedIndex].text,
      preco: parseFloat(produtoId), // Converte o valor do ID para número (o ID é o preço do produto)
      quantidade: quantidade
    };

    carrinho.push(produto); // Adiciona o produto ao carrinho
    atualizarCarrinho(); // Atualiza a exibição do carrinho
    limparCampos(); // Limpa os campos do formulário
  }
}

function limpar() {
  carrinho = []; // Limpa o array do carrinho
  atualizarCarrinho(); // Atualiza a exibição do carrinho
}

function atualizarCarrinho() {
  listaProdutos.innerHTML = ''; // Limpa a lista de produtos
  let total = 0;

  if (carrinho.length === 0) {
    listaProdutos.innerHTML = '<section class="carrinho__produtos__produto"><p id="texto-carrinho">Nenhum produto adicionado ao carrinho</p></section>';
  } else {
    carrinho.forEach(produto => {
      const item = document.createElement('section');
      item.classList.add('carrinho__produtos__produto');
      item.innerHTML = `
      <div class="produto-info">
        <span class="texto-azul">x${produto.quantidade}</span>
        <span id="nome-produto">${produto.nome} Un.</span>
      </div>
      <div class="produto-total">
      <span class="texto-cinza">Total: </span>
      <span class="texto-azul">R$ ${(produto.preco * produto.quantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    </div>
    `;
      listaProdutos.appendChild(item);

      total += produto.preco * produto.quantidade;
    });
  }

  valorTotal.textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`; // Atualiza o valor total
}

function limparCampos() {
  document.getElementById('produto').value = '';
  document.getElementById('quantidade').value = '';
}
