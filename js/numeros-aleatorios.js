let quantidadeNumeros = document.getElementById('quantidade');
let de = document.getElementById('de');
let ate = document.getElementById('ate');
let resultadoLabel = document.querySelector('#resultado .texto__paragrafo');

function sortear()
{
    numeroSorteado = numerosAleatorios(parseInt(de.value),parseInt(ate.value),parseInt(quantidadeNumeros.value));

    if (quantidadeNumeros.value > (ate.value - de.value + 1))
    {
    resultadoLabel.textContent = 'A quantidade de números é maior do que a faixa de números disponíveis!';
    trocaimagem('../img/indiobravo.png');
    }
    else
    {
        if (quantidadeNumeros.value == 0)
        {
            resultadoLabel.textContent = 'Nenhum número sorteado 🙇';
            trocaimagem('../img/indiobravo.png');
        }
        if ( quantidadeNumeros.value == 1)
        {
        resultadoLabel.textContent = `O número sorteado entre ${de.value} e ${ate.value} é: ${numeroSorteado}`;
        trocaimagem('../img/indiosorrindo.png');
        }
        if (quantidadeNumeros.value > 1)
        {
        resultadoLabel.textContent = `Os ${quantidadeNumeros.value} números sorteados são: ${numeroSorteado}`;
        trocaimagem('../img/indiosorrindo.png');
        }
    }
    inverteBotoes(2);

}
function reiniciar()
{
    limpaCampo('quantidade');
    limpaCampo('de');
    limpaCampo('ate');
    trocaimagem('../img/indioserio.png');
    inverteBotoes(1);
    resultadoLabel.textContent = 'Nenhum número sorteado até agora';
}
function sair()
{    
    window.location.href = '../index.html';
}