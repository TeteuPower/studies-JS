//Jogo do Índio (Descobrir o número)
dificuldade = 10;//Dificuldade do jogo
apresentacao('Jogo Indígena','Jogo do Índio',`Qual é o número indígena? 1 a ${dificuldade}`,'Chutar','Aumentar Dificuldade','number','chute','Insira um número','../img/indioserio.png');
let numeroSecreto = gerarNumeroAleatorio(); //criei o número secreto, sendo ele o produto da função gerarNumeroAleatorio
let tentativas = 0;
let chute = document.getElementById('chute').value; //O '.valeu' serve para ser lido APENAS a informação dentro da caixa input
let nivel = 1;

//////////////////////////////////////////////////////
function botaoEsq() //Função que é ativada quando aperta o botão "chutar"
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    let chute = document.getElementById('chute').value; //O '.valeu' serve para ser lido APENAS a informação dentro da caixa input
    tentativas++;

    if (chute==numeroSecreto)
    {
    rodada(`Você descobriu o número! ${numeroSecreto}`, `Precisou de ${tentativas} tentativas.`,'../img/indiosorrindo.png','chute');
    inverteBotoes(2);
    removeCaixa('chute');
    }
    else
    {
        if(chute>numeroSecreto)
        {
        rodada('Poxa vida, você errou',`O número é MENOR que ${chute}`,'../img/indiobravo.png','chute');
        }
        else
        {
        rodada('Poxa vida, você errou',`O número é MAIOR que ${chute}`,'../img/indiobravo.png','chute');
        }
        if (tentativas>=3 && chute>numeroSecreto)
        {
        limpaTexto('titulo');
        limpaTexto('paragrafo');
        rodada('O índio está ficando BRAVO',`O NÚMERO É MENOOOR QUE ${chute}!`,'../img/indiomuitobravocolorido.png','chute');
        }
        if (tentativas>=3 && chute<numeroSecreto)
        {
        limpaTexto('titulo');
        limpaTexto('paragrafo');
        rodada('O índio está ficando BRAVO',`O NÚMERO É MAIOOOR QUE ${chute}!`,'../img/indiomuitobravocolorido.png','chute');
        }
    }
}
//////////////////////////////////////////////////////
function botaoDir()
{
    nivel++;
    dificuldade = dificuldade * 10;
    tentativas = 0;
    numeroSecreto = gerarNumeroAleatorio();
    substituirNoHtml('titulo', `Jogo do Índio, agora nível ${nivel}!`);
    substituirNoHtml('paragrafo', `Qual é o número indígena? 1 a ${dificuldade}`);
    trocaimagem('../img/indioserio.png');
    inverteBotoes(1);
    inputCaixa('number','chute','Insira um número')
}
//////////////////////////////////////////////////////
function sair()
{    
    window.location.href = '../index.html';
}