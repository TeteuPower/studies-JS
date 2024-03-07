
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

function substituirNoHtml (tag, texto) // 'substituirNoHtml' é o nome da função que vai ser digitado quando for ser mencionada, entre aspas o primeiro valor sera a 'tag' e o segundo o 'texto' que serão substituídos dentro da função como segue no exemplo depois da função
{
    let exportar = document.querySelector(tag);
    exportar.innerHTML = texto;
}

substituirNoHtml('h1', 'Jogo do Índio'); // Na função 'substituirNoHtml', onde tem 'tag' é substituído por 'h1' e onde tem 'texto' é substituído por 'Jogo do Índio'
substituirNoHtml('title', 'Jogo Indígena');
substituirNoHtml('p', 'Qual é o número indígena? 1 a 10');

let numeroSecreto = gerarNumeroAleatorio(); //Aqui eu chamo a função de baixo dizendo que o numeroSecreto é IGUAL ao gerarNumeroAleatorio

function gerarNumeroAleatorio()
{
    return parseInt(Math.random() * 10 +1); //o return serve para ele retornar o valor da função para a variável que a solicitou, que no caso é um número aleatório
}

function botaoChute() //Função que é ativada quando aperta o botão "chutar"
{
    let chute = document.querySelector('input').value; //O '.valeu' serve para ser lido APENAS a informação dentro da caixa input
    console.log('Comparação', chute == numeroSecreto);
    console.log('Número Secreto', numeroSecreto);
}