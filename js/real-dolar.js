//Sistema de conversão REAL->Dolar->REAL

apresentacao('Dólar Real','Converter para dólar','Digite o valor em reais:','Converter','Nova cotação','number','caixaReal','R$:','../img/indiorico.png');

function botaoEsq()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    let reais = parseFloat(document.getElementById('caixaReal').value);
    let dolar = reais / 4.8;
    let palavraDolar = dolar==1 ? 'Dólar' : 'Dólares';
    rodada(`${dolar.toFixed(2)} ${palavraDolar}`,'Faça uma nova cotação','../img/indioricosorrindo.png','caixaReal');
    inverteBotoes('2');
    removeCaixa('caixaReal');
}
function botaoDir()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    inputCaixa('number','caixaReal','R$');
    rodada('Converter para dólar','Digite o valor em reais:','../img/indiorico.png','caixaReal');
    inverteBotoes(1);
}