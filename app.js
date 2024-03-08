
//***********Forma redundante*************//
//A duas formas que usei para alterar o h1 e o title são corretas porém são repetitivas e redundantes, existe uma forma mais otimizada de repetir esses códigos que é criando uma função para eles, assim como fiz abaixo deles
/*
let titulo = document.querySelector('h1'); //document é menção do documento html, ou seja, fazendo uma leitura dele, querySelector é para especificar o parâmetro do html ao qual faço menção, que nesse caso é o <h1>. Em outras palavras: A variável 'titulo' é igual a <h1> no documento .html
titulo.innerHTML = 'Jogo do Índio'; //innerHTML ou seja, dentro do HTML. No html o conteúdo da variável 'titulo' vai substituir o conteúdo do <h1>

let tituloaba = document.querySelector('title');
tituloaba.innerHTML = 'Jogo Indígena'; //eu basicamente mudei o título da página, que vai na aba do navegador. Ao invés de mudar diretamente no próprio html o fiz por aqui

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Qual o número indígena? 1 a 10';

//***********Forma redundante*************/ //São 3 codigos (titulo, tituloaba e paragrafo) que podem todos serem resumidos em apenas uma função

//A forma otimizada é criando uma função para sempre ser lida, ao invés de toda vez repetir o código inteiro, segue a função:
ndenumeroSecreto = 100;//Dificuldade do jogo
//////////////////////////////////////////////////////
function substituirNoHtml (tag, texto) // 'substituirNoHtml' é o nome da função que vai ser digitado quando for ser mencionada, entre aspas o primeiro valor sera a 'tag' e o segundo o 'texto' que serão substituídos dentro da função como segue no exemplo depois da função
{
    let exportar = document.querySelector(tag);
    exportar.innerHTML = texto;
}
//////////////////////////////////////////////////////
function trocaimagem (imagem, caminho)
{
    let novaimg = document.getElementById('indio');
    novaimg.src = caminho;
}
//////////////////////////////////////////////////////
function gerarNumeroAleatorio()
{
    return parseInt(Math.random() * ndenumeroSecreto +1); //o return serve para ele retornar o valor da função para a variável que a solicitou, que no caso é um número aleatório
}
//////////////////////////////////////////////////////
function rodada(msgh1, msgp, nomeimg, caminhoimg)
{
    substituirNoHtml('h1', msgh1);
    substituirNoHtml('p', msgp);
    trocaimagem(nomeimg, caminhoimg);
}
//////////////////////////////////////////////////////
let numeroSecreto = gerarNumeroAleatorio(); //Aqui eu chamo a função de baixo dizendo que o numeroSecreto é IGUAL ao gerarNumeroAleatorio
let tentativas = 0;
substituirNoHtml('h1', 'Jogo do Índio'); // Na função 'substituirNoHtml', onde tem 'tag' é substituído por 'h1' e onde tem 'texto' é substituído por 'Jogo do Índio'
substituirNoHtml('title', 'Jogo Indígena');
substituirNoHtml('p', `Qual é o número indígena? 1 a ${ndenumeroSecreto}`);
//////////////////////////////////////////////////////
function botaoChute() //Função que é ativada quando aperta o botão "chutar"
{
    let chute = document.querySelector('input').value; //O '.valeu' serve para ser lido APENAS a informação dentro da caixa input
    tentativas++;
            console.log('Comparação', chute == numeroSecreto);
            console.log('Número Secreto', numeroSecreto);
            console.log('Tentativas', tentativas);

    if (chute==numeroSecreto)
    {
    rodada(`Você descobriu o número! ${numeroSecreto}`, `Precisou de ${tentativas} tentativas.`, 'indiosorrindo', 'img/indiosorrindo.png');
    }
    else
    {
        if(chute>numeroSecreto)
        {
        rodada('Poxa vida, você errou',`O número é MENOR que ${chute}`,'indiobravo', 'img/indiobravo.png');
        }
        else
        {
        rodada('Poxa vida, você errou',`O número é MAIOR que ${chute}`,'indiobravo', 'img/indiobravo.png');
        }
        if (tentativas>=3 && chute>numeroSecreto)
        {
        rodada('O índio está ficando BRAVO',`O NÚMERO É MENOOOR QUE ${chute}!`,'indiomuitobravo', 'img/indiomuitobravocolorido.png');
        }
        if (tentativas>=3 && chute<numeroSecreto)
        {
        rodada('O índio está ficando BRAVO',`O NÚMERO É MAIOOOR QUE ${chute}!`,'indiomuitobravo', 'img/indiomuitobravocolorido.png')
        }
    }
}
//////////////////////////////////////////////////////

//****************************************************************************************************************************************/
//Sistema para dizer qual o número maior
/*function botaoChute()
{
    let numero1 = prompt('Digite o primeiro número');
    console.log('n1',numero1);
    let numero2 = prompt('Digite o segundo número');
    console.log('n2',numero2);
    console.log('comparação n1 e n2', numero1>numero2);

    //Criei duas maneiras diferentes de retornar qual é o número maior
//Maneira 1, usando operador ternário:
    //alert(parseInt(numero1)>parseInt(numero2) ? (`O número ${numero1} é maior do que o número ${numero2}`) : (`O número ${numero2} é maior do que o número ${numero1}`));
//Maneira 2, usando if
    if (parseInt(numero1)>parseInt(numero2))
    {
        alert(`O número ${numero1} é maior do que o número ${numero2}`);
    }
    else
    {
        alert(`O número ${numero2} é maior do que o número ${numero1}`);
    }
}*/
//****************************************************************************************************************************************/
//sistema de média de números quando aperta o botão
/*let apertouBotao = 0; 
let soma = 0;
function botaoChute(params) //o botaoChute ta descriminado la no HTML
{
    apertouBotao++;
    console.log('Apertou o botão', apertouBotao);
    let quantidadeNumeros = prompt ('Deseja tirar a média de quantos números?');
    let contador = quantidadeNumeros;
    

    while (contador>0)
    {
        let numero = parseInt(prompt(`Digite o ${apertouBotao}º número`));
        contador--;
        apertouBotao++;
        soma = parseInt(soma) + parseInt(numero);
        console.log('soma',soma);
        console.log('contador', contador);
    }
        let media = soma / quantidadeNumeros;
        apertouBotao = 0;
        alert(`A média dos ${quantidadeNumeros} números é ${media}`);
        soma = 0;

}*/
//****************************************************************************************************************************************/