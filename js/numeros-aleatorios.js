let quantidadeNumeros = document.getElementById('quantidade');
let de = document.getElementById('de');
let ate = document.getElementById('ate');

function sortear()
{
    numeroSorteado = numerosAleatorios(parseInt(de.value),parseInt(ate.value),parseInt(quantidadeNumeros.value));
    let resultadoLabel = document.querySelector('#resultado .texto__paragrafo');
    if ( quantidadeNumeros.value == 1)
    {
    resultadoLabel.textContent = `Número sorteado: ${numeroSorteado}`;
    }
    else
    {
    resultadoLabel.textContent = `Números sorteados: ${numeroSorteado}`;
    }
}
function sair()
{    
    window.location.href = '../index.html';
}