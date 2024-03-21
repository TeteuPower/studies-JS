//Tabuada do Índio

apresentacao('Tabuada','Tabuada do Índio!','Insira o número que deseja a tabuada','Calcular','Reset','number','caixa','Digite aqui','../img/indioserio.png');
function botaoEsq()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    let numero = parseInt(document.getElementById('caixa').value);
    adicionaTexto('p','paragrafo',`Tabuada do ${numero}`)
    let i = 1;
    while (i <= 10)
    {
        let resultado = numero * i;
        adicionaTexto('p', `resultado${i}`, `${numero} x ${i} = ${resultado}`);
        i++;
    }
    trocaimagem('../img/indiosorrindo.png');
    removeCaixa('caixa');
    inverteBotoes(2);
}
function botaoDir()
{
    let divTextos = document.getElementById('divTextos');
    let child = divTextos.lastElementChild;
    while (child)
    {
        if (child.tagName.toLowerCase() === 'p') {
            divTextos.removeChild(child);
        }
        child = divTextos.lastElementChild;
    }
    inverteBotoes(1);
    rodada2('Tabuada do Índio','Insira o número que deseja a tabuada','../img/indioserio.png');
    inputCaixa('number','caixa','Digite aqui');
}