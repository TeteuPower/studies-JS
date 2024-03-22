//Sistema que tira média dos números

apresentacao('Ferramenta do Índio','O Índio Calculista!','Deseja calcular a média de quantos números?','Próximo','Reset','number', 'campo', 'Insira o número','../img/indioserio.png');
let apertouBotao = -1; 
let soma = 0;
let contador = -1;
let quantidadeNumeros;
let digiteNumero = 1;

function botaoEsq()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    contador++;
    apertouBotao++;

    if (apertouBotao === 0)
    {
        quantidadeNumeros = parseInt(document.getElementById('campo').value);
        textos('Ferramenta do Índio', `Média de ${quantidadeNumeros} números.`, `Digite o ${digiteNumero}º número.`, 'Próximo', 'Reset');
        digiteNumero++
        limpaCampo('campo');
    }
    if (apertouBotao >= 1)
    {
        let numero = parseInt(document.getElementById('campo').value);
        soma += numero;
        textos('Ferramenta do Índio', `Média de ${quantidadeNumeros} números.`, `Digite o ${digiteNumero}º número. A soma está em ${soma}.`, 'Próximo', 'Reset');
        digiteNumero++;
        limpaCampo('campo');
    }
    if (contador === quantidadeNumeros)
    {
        limpaTexto('titulo');
        limpaTexto('paragrafo');
        let media = soma / quantidadeNumeros;
        textos('Ferramenta do Índio', `A média dos ${quantidadeNumeros} números é ${media}`, `A soma deu ${soma}; Aperte em RESET para recomeçar`, 'Próximo', 'Reset');
        trocaimagem('../img/indiosorrindo.png');
        inverteBotoes(2);
        removeCaixa('campo');
    }
}

function botaoDir()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    apertouBotao = -1;
    soma = 0;
    contador = -1;
    quantidadeNumeros = 0;
    digiteNumero = 1;
    inverteBotoes(1);
    inputCaixa('number','campo','Insira o número:');
    textos('Ferramenta do Índio','O Índio Calculista!','Digite a quantidade de números que você deseja tirar a média','Próximo','Reset');
    trocaimagem('../img/indioserio.png');
}
function sair()
{    
    window.location.href = '../index.html';
}