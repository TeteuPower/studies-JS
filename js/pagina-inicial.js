//Página Inicial
inverteBotoes(3);
textos('Sistemas JS','Escolha um Sistema:','','Número Secreto','Número Maior');
trocaimagem('img/indiosorrindo.png')
adicionaBotao(mediaNumeros,'botaoMediaNumeros', 'Tirar Média');
adicionaBotao(fatorial,'botaoFatorial','Calcular Fatorial');
adicionaBotao(imc,'botaoImc','Calcular IMC');
adicionaBotao(realDolar,'botaoRealDolar','Converter Real->Dolar');
adicionaBotao(construtor,'botaoConstrutor','Calcular áreas');
adicionaBotao(tabuada,'botaoTabuada','Calcular Tabuada');

function botaoEsq()
{
    window.location.href = 'html/jogo-do-indio.html';
}

function botaoDir()
{
    window.location.href = 'html/numero-maior.html';
}

function mediaNumeros()
{
    window.location.href = 'html/media-numeros.html';
    
}

function fatorial()
{
    window.location.href = 'html/fatorial.html';
}

function imc()
{
    window.location.href = 'html/imc.html';
}

function realDolar()
{
    window.location.href = 'html/real-dolar.html';
}

function construtor()
{
    window.location.href = 'html/jogo-construtor.html';
}

function tabuada()
{
    window.location.href = 'html/sistema-tabuada.html';
}