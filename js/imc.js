//Sistema de cálculo IMC

apresentacao('Calculo IMC', 'Índio Trainer', 'Insira as informações para o índio calcular o seu IMC', 'Calcular', 'Reset','text','altura','Altura em cm','../img/indiomalhado.png');
inputCaixa('text','peso','Peso em Kg');
function botaoEsq()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    let altura = parseInt(document.getElementById('altura').value);
    let peso = parseInt(document.getElementById('peso').value);
    let imc = 10000*[peso / (altura*altura)];
    if (imc<18.5) //magreza
    {
        rodada('MAGREZA', `Seu IMC é ${imc.toFixed(2)}`,'../img/indiomagro.png','altura');
        removeCaixa('altura');
        removeCaixa('peso');
        inverteBotoes(2);
    }
    if (imc>18.5 && imc<24.9)//normal
    {
        rodada('NORMAL', `Seu IMC é ${imc.toFixed(2)}`,'../img/indiosorrindo.png','altura');
        removeCaixa('altura');
        removeCaixa('peso');
        inverteBotoes(2);
    }
    if (imc>24.9)//obesidade
    {
        rodada('OBESIDADE', `Seu IMC é ${imc.toFixed(2)}`,'../img/indiogordo.png','altura');
        removeCaixa('altura');
        removeCaixa('peso');
        inverteBotoes(2);
    }
}
function botaoDir()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    rodada2('Índio Trainer', 'Insira as informações para o índio calcular o seu IMC','../img/indiomalhado.png');
    inputCaixa('number','altura','Altura em cm');
    inputCaixa('number','peso','Peso em Kg');
    inverteBotoes(1);
}