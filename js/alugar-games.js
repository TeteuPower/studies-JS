let contagem = 0;

function alterarStatus(id)
{
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let nomeBotao = jogoClicado.querySelector(".dashboard__item__button");


    if(imagem.classList.contains('dashboard__item__img--rented'))
    {
        let modal = document.getElementById('modal');
        let botaoSim = document.getElementById('botaoSim');
        let botaoNao = document.getElementById('botaoNao');
        
        mostrarConfirmacao('Você tem certeza que devolveu o jogo?');
        
        botaoSim.onclick = function()
        {
          modal.style.display = 'none';
          imagem.classList.remove('dashboard__item__img--rented');
          nomeBotao.textContent = 'Alugar';
          nomeBotao.classList.remove('dashboard__item__button--return')
          contagem--;
          console.log('Jogos Alugados',contagem);
        };
        
        botaoNao.onclick = function()
        {
          modal.style.display = 'none';
        };
    }
    else
    {
        contagem++;
        imagem.classList.add('dashboard__item__img--rented');
        nomeBotao.textContent = 'Devolver';
        nomeBotao.classList.add('dashboard__item__button--return');
    }
    console.log('Jogos Alugados',contagem);
}