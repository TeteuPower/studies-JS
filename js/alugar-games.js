function sair()
{    
    window.location.href = '../index.html';
}

function alterarStatus(id)
{
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let nomeBotao = jogoClicado.querySelector(".dashboard__item__button");


    if(imagem.classList.contains('dashboard__item__img--rented'))
    {
        imagem.classList.remove('dashboard__item__img--rented');
        nomeBotao.textContent = 'Alugar';
        nomeBotao.classList.remove('dashboard__item__button--return')
    }
    else
    {
        imagem.classList.add('dashboard__item__img--rented');
        nomeBotao.textContent = 'Devolver';
        nomeBotao.classList.add('dashboard__item__button--return');
    }
    console.log(nomeBotao);
}
