//Função que calcula fatorial

apresentacao('Fatorial','Índio Matemático!','Digite um número para o índio calcular o seu fatorial!','Calcular','Reset','number','caixa','Digite o número:','../img/indioserio.png');
function botaoEsq()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    function fatorial(numero)
    {
        if (numero === 0 || numero === 1) return 1;
        return numero * fatorial(numero - 1);
    }
    let numeroNaCaixa = document.getElementById('caixa').value;
    let resultado = fatorial(numeroNaCaixa);
    rodada2(`Resultado é ${resultado}`,`O Índio calculou o fatorial de ${numeroNaCaixa}`,'../img/indiosorrindo.png');
    removeCaixa('caixa');
    inverteBotoes(2);
}
function botaoDir()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    rodada2('Índio Matemático!','Digite o número para o índio calcular o seu fatorial!','../img/indioserio.png','caixa');
    inputCaixa('number','caixa','Digite o número:');
    inverteBotoes(1);
}