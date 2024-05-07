apresentacao('Organizador de Números','Digite os números que deseja organizar:','Separe os números por vírgula:','Organizar','Reset','numbers','inputNumeros','Ex: 5,4,3','../img/indioserio.png');

function botaoEsq()
{
    let numerosDesorganizados = document.getElementById('inputNumeros').value;

    // Separa os números pela vírgula e converte cada elemento para número
    let listaNumerosCrescente = numerosDesorganizados.split(',').map(function(item)
    {
        return parseInt(item, 10);
    });

    let listaNumerosDecrescente = numerosDesorganizados.split(',').map(function(item)
    {
        return parseInt(item, 10);
    });

    // Ordena os números em ordem crescente
    listaNumerosCrescente.sort(function(a, b)
    {
        return a - b;
    });

    listaNumerosDecrescente.sort(function(a, b)
    {
        return b - a;
    });

    if (numerosDesorganizados.trim() === '')
    {
        limpaTexto('titulo');
        limpaTexto('paragrafo');
        rodada2('Você não digitou um número!','Separe os números por vírgula','../img/indiobravo.png');
    }
    else
    {
        limpaTexto('titulo');
        limpaTexto('paragrafo');
        rodada2('Números organizados:',`Crescente:${listaNumerosCrescente}`,'../img/indiosorrindo.png')
        adicionaTexto('p','paragrafo',`Decrescente:${listaNumerosDecrescente}`);
        inverteBotoes(2);
    }
}
function botaoDir()
{
    limpaTexto("titulo");
    limpaTexto('paragrafo');
    limpaTexto('paragrafo');
    rodada2('Digite os números que deseja organizar:','Separe os números por vírgula','../img/indioserio.png');
    limpaCampo('inputNumeros');
    inverteBotoes(1);
}