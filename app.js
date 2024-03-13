//////////////////////////////////////////////////////
function checklog(log1, log2, log3)
{
    caixa = document.querySelector('input').value;
    console.log('Caixa', caixa);
    console.log('Log1', log1);
    console.log('Log2', log2);
    console.log('Log3', log3);
}
//////////////////////////////////////////////////////
function substituirNoHtml (tag, texto)
// 'substituirNoHtml' é o nome da função que vai ser digitado quando for ser mencionada, entre aspas o primeiro valor sera a 'tag' e o segundo o 'texto' que serão substituídos dentro da função como segue no exemplo depois da função
{
    let exportar = document.getElementById(tag);
    exportar.innerHTML = texto;
}
//////////////////////////////////////////////////////
function trocaimagem (caminhoSrc)
{
    let novaimg = document.getElementById('idImgPrincipal');//o getElementById é para puxar o elemento com ID 'idImgPrincipal lá do HTML
    novaimg.src = caminhoSrc;
}
//////////////////////////////////////////////////////
function gerarNumeroAleatorio()
{
    return parseInt(Math.random() * dificuldade +1); //o return serve para ele retornar o valor da função para a variável que a solicitou, que no caso é um número aleatório
}
//////////////////////////////////////////////////////
function limpaCampo (input)
{
    informacao = document.getElementById(input);//Como não precisa ser lido nada, não se fez necessário o .value
    informacao.value = '';//Setei dentro da caixa vazio
}
//////////////////////////////////////////////////////
function rodada(mensagemH1, mensagemP, caminhoImg, limpaInput)
{
    substituirNoHtml('titulo', mensagemH1);
    substituirNoHtml('paragrafo', mensagemP);
    trocaimagem(caminhoImg);
    limpaCampo(limpaInput);
}
//////////////////////////////////////////////////////
function inverteBotoes(onOff123)
{
    let onOff = parseInt(onOff123);
    if(onOff===1)
    {
        let esqOn = document.getElementById('idBotaoEsq').removeAttribute('disabled');
        let dirOff = document.getElementById('idBotaoDir').setAttribute('disabled', true);//document é referencia ao HTML; getElementById, buscou um elemento específico que está com ID, nesse caso, 'aumentardif'; setAttribute, adicionamos um atributo que nesse caso é o disable, o true é para deixar o disable como VERDADEIRO
    }
    if(onOff===2)
    {
    let esqOff = document.getElementById('idBotaoEsq').setAttribute('disabled', true);
    let dirOn = document.getElementById('idBotaoDir').removeAttribute('disabled');
    }
    if(onOff===3)
    {
        let esqOn = document.getElementById('idBotaoEsq').removeAttribute('disabled');
        let dirOn = document.getElementById('idBotaoDir').removeAttribute('disabled');
    }
}
//////////////////////////////////////////////////////
function textos(aba,titulo,paragrafo,botaoesq,botaodir)
{
    substituirNoHtml('tituloAba', aba);
    substituirNoHtml('titulo', titulo); // Na função 'substituirNoHtml', onde tem 'tag' é substituído por 'h1' e onde tem 'texto' é substituído por 'Jogo do Índio'
    substituirNoHtml('paragrafo', paragrafo);
    substituirNoHtml('idBotaoEsq', botaoesq);
    substituirNoHtml('idBotaoDir', botaodir);
}
//////////////////////////////////////////////////////
function input(tipo, idInput, mensagem)
{
    let input = document.createElement("input");
    input.type = tipo;
    input.id = idInput
    input.placeholder = mensagem;
    input.className = "container__input";
    document.getElementById('input').appendChild(input);
}
//////////////////////////////////////////////////////
function apresentacao(aba,tituloH1,paragrafo,botaoesq,botaodir,tipoInput,idInput,mensagemInput,caminhoSrc)
{
    textos(aba,tituloH1,paragrafo,botaoesq,botaodir);
    input(tipoInput,idInput,mensagemInput);
    trocaimagem(caminhoSrc);
}
//////////////////////////////////////////////////////

/****************************************************************************************************************************************/
//Jogo do Índio (Descobrir o número)
/*
dificuldade = 10;//Dificuldade do jogo
apresentacao('Jogo Indígena','Jogo do Índio',`Qual é o número indígena? 1 a ${dificuldade}`,'Chutar','Aumentar Dificuldade','number','chute','Insira um número','img/indioserio.png');
let numeroSecreto = gerarNumeroAleatorio(); //criei o número secreto, sendo ele o produto da função gerarNumeroAleatorio
let tentativas = 0;
let chute = document.getElementById('chute').value; //O '.valeu' serve para ser lido APENAS a informação dentro da caixa input
let nivel = 1;

//////////////////////////////////////////////////////
function botaoEsq() //Função que é ativada quando aperta o botão "chutar"
{
    let chute = document.querySelector('input').value; //O '.valeu' serve para ser lido APENAS a informação dentro da caixa input
    tentativas++;
    checklog();

    if (chute==numeroSecreto)
    {
    rodada(`Você descobriu o número! ${numeroSecreto}`, `Precisou de ${tentativas} tentativas.`,'img/indiosorrindo.png','chute');
    inverteBotoes(2);
    }
    else
    {
        if(chute>numeroSecreto)
        {
        rodada('Poxa vida, você errou',`O número é MENOR que ${chute}`,'img/indiobravo.png','chute');
        }
        else
        {
        rodada('Poxa vida, você errou',`O número é MAIOR que ${chute}`,'img/indiobravo.png','chute');
        }
        if (tentativas>=3 && chute>numeroSecreto)
        {
        rodada('O índio está ficando BRAVO',`O NÚMERO É MENOOOR QUE ${chute}!`,'/img/indiomuitobravocolorido.png','chute');
        }
        if (tentativas>=3 && chute<numeroSecreto)
        {
        rodada('O índio está ficando BRAVO',`O NÚMERO É MAIOOOR QUE ${chute}!`,'/img/indiomuitobravocolorido.png','chute');
        }
    }
}
//////////////////////////////////////////////////////
function botaoDir()
{
    nivel++;
    dificuldade = dificuldade * 10;
    tentativas = 0;
    numeroSecreto = gerarNumeroAleatorio();
    rodada(`Jogo do Índio, agora nível ${nivel}!`,`Qual é o número indígena? 1 a ${dificuldade}`,'/img/indioserio.png','chute');
    checklog();
    inverteBotoes(1);
}
//////////////////////////////////////////////////////

//****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Sistema para dizer qual o número maior
/*
apresentacao('Ferramenta do Índio','Índio Matemático!','Insira dois números e o índio dirá qual é o maior!','Inserir','Reset','number','campo','Insira o número','img/indioserio.png');
let apertouBotao = 0
let numero1 = 0;
let numero2 = 0;
function botaoEsq()
{
    apertouBotao++;
    if(apertouBotao==1)
    {
    numero1 = parseInt(document.getElementById('campo').value);
    textos('Ferramenta do Índio','Índio Matemático!','Agora insira o segundo número','Inserir','Reset');
    limpaCampo('campo');
    }
    if(apertouBotao==2)
    {
    let numero2 = parseInt(document.getElementById('campo').value);
    trocaimagem('img/indiosorrindo.png');
    limpaCampo('campo');
    inverteBotoes(2);
        if(numero1>numero2)
        {
           textos('Ferramenta do Índio',`${numero1} é maior que o ${numero2}`,'Pressione reset','Inserir','Reset');
        }
        if(numero1<numero2)
        {
            textos('Ferramenta do Índio',`${numero2} é maior que ${numero1}`,'Pressione reset','Inserir','Reset');
        }
        if(numero1===numero2)
        {
            textos('Ferramenta do índio',`${numero1} e ${numero2} são iguais`,'Pressione reset','Inserir','Reset');
        }
    //Abaixo deixei um exemplo usando operador ternário:
    //numero1>numero2 ? textos('Ferramenta do Índio',`${numero1} é maior que o ${numero2}`,'Pressione reset','Inserir','Reset') :
    //textos('Ferramenta do Índio',`${numero2} é maior que ${numero1}`,'Pressione reset','Inserir','Reset');
    
    }
}
function botaoDir()
{
    apertouBotao = 0;
    textos('Ferramenta do Índio','Índio Matemático!','Insira dois números e o índio dirá qual é o maior!','Inserir','Reset');
    inverteBotoes(1);
    trocaimagem('img/indioserio.png');
}

//****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Sistema que tira média dos números
/*
apresentacao('Ferramenta do Índio','O Índio Calculista!','Deseja calcular a média de quantos números?','Próximo','Reset','number', 'campo', 'Insira o número','img/indioserio.png');
let apertouBotao = -1; 
let soma = 0;
let contador = -2;
let quantidadeNumeros;
let digiteNumero = 1;

function botaoEsq()
{
    contador++;
    apertouBotao++;

    if (apertouBotao === 0)
    {
        quantidadeNumeros = parseInt(document.getElementById('campo').value);
        textos('Ferramenta do Índio', `Média de ${quantidadeNumeros} números.`, `Digite o ${digiteNumero}º número.`, 'Próximo', 'Reset');
        digiteNumero++
        limpaCampo('campo');
    }
    if (apertouBotao > 1)
    {
        let numero = parseInt(document.getElementById('campo').value);
        soma += numero;
        textos('Ferramenta do Índio', `Média de ${quantidadeNumeros} números.`, `Digite o ${digiteNumero}º número. A soma está em ${soma}.`, 'Próximo', 'Reset');
        digiteNumero++;
        limpaCampo('campo');
    }
    if (contador === quantidadeNumeros)
    {
        let media = soma / quantidadeNumeros;
        textos('Ferramenta do Índio', `A média dos ${quantidadeNumeros} números é ${media}`, `A soma deu ${soma}; Aperte em RESET para recomeçar`, 'Próximo', 'Reset');
        trocaimagem('img/indiosorrindo.png');
        inverteBotoes(2);
        limpaCampo('campo');
    }
}

function botaoDir()
{
    apertouBotao = -1;
    soma = 0;
    contador = -2;
    quantidadeNumeros = 0;
    digiteNumero = 1;
    inverteBotoes(1);
    limpaCampo('campo');
    textos('Ferramenta do Índio','O Índio Calculista!','Digite a quantidade de números que você deseja tirar a média','Próximo','Reset');
    trocaimagem('img/indioserio.png');
}
//****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Função que calcula fatorial
/*
apresentacao('Fatorial','Índio Matemático!','Digite um número para o índio calcular o seu fatorial!','Calcular','Reset','number','caixa','Número','img/indioserio.png');
function botaoEsq()
{
    function fatorial(numero)
    {
        if (numero === 0 || numero === 1) return 1;
        return numero * fatorial(numero - 1);
    }
    let numeroNaCaixa = document.getElementById('caixa').value;
    let resultado = fatorial(numeroNaCaixa);
    rodada(`Resultado é ${resultado}`,`O Índio calculou o fatorial de ${numeroNaCaixa}`,'img/indiosorrindo.png','caixa');
    inverteBotoes(2);
}
function botaoDir()
{
    rodada('Índio Matemático!','Digite o número para o índio calcular o seu fatorial!','img/indioserio.png','caixa');
    inverteBotoes(1);
}
/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Sistema de cálculo IMC
/*
apresentacao('Calculo IMC', 'Índio Trainer', 'Insira as informações para o índio calcular o seu IMC', 'Calcular', 'Reset','text','altura','Altura em cm','img/indiomalhado.png');
input('text','peso','Peso em Kg');
function botaoEsq()
{
    let altura = parseInt(document.getElementById('altura').value);
    let peso = parseInt(document.getElementById('peso').value);
    let imc = 10000*[peso / (altura*altura)];
    if (imc<18.5) //magreza
    {
        rodada('MAGREZA', `Seu IMC é ${imc.toFixed(2)}`,'img/indiomagro.png','altura');
        limpaCampo('peso');
        inverteBotoes(2);
    }
    if (imc>18.5 && imc<24.9)//normal
    {
        rodada('NORMAL', `Seu IMC é ${imc.toFixed(2)}`,'img/indiosorrindo.png','altura');
        limpaCampo('peso');
        inverteBotoes(2);
    }
    if (imc>24.9)//obesidade
    {
        rodada('OBESIDADE', `Seu IMC é ${imc.toFixed(2)}`,'img/indiogordo.png','altura');
        limpaCampo('peso');
        inverteBotoes(2);
    }
}
function botaoDir()
{
    rodada('Índio Trainer', 'Insira as informações para o índio calcular o seu IMC','img/indiomalhado.png','altura');
    limpaCampo('peso');
    inverteBotoes(1);
}

/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Sistema de conversão REAL->Dolar->REAL
/*
apresentacao('Dólar Real','Converter para dólar','Digite o valor em reais:','Converter','Nova cotação','number','caixaReal','R$:','img/indiorico.png');

function botaoEsq()
{
    let reais = parseFloat(document.getElementById('caixaReal').value);
    let dolar = reais / 4.8;
    let palavraDolar = dolar==1 ? 'Dólar' : 'Dólares';
    rodada(`${dolar.toFixed(2)} ${palavraDolar}`,'Faça uma nova cotação','img/indioricosorrindo.png','caixaReal');
    inverteBotoes('2');
}
function botaoDir()
{
    rodada('Converter para dólar','Digite o valor em reais:','img/indiorico.png','caixaReal');
    inverteBotoes(1);
}

/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Como fazer uma função
/*
//A duas formas que usei para alterar o h1 e o title são corretas porém são repetitivas e redundantes, existe uma forma mais otimizada de repetir esses códigos que é criando uma função para eles, assim como fiz abaixo deles

let titulo = document.querySelector('h1'); //document é menção do documento html, ou seja, fazendo uma leitura dele, querySelector é para especificar o parâmetro do html ao qual faço menção, que nesse caso é o <h1>. Em outras palavras: A variável 'titulo' é igual a <h1> no documento .html
titulo.innerHTML = 'Jogo do Índio'; //innerHTML ou seja, dentro do HTML. No html o conteúdo da variável 'titulo' vai substituir o conteúdo do <h1>

let tituloaba = document.querySelector('title');
tituloaba.innerHTML = 'Jogo Indígena'; //eu basicamente mudei o título da página, que vai na aba do navegador. Ao invés de mudar diretamente no próprio html o fiz por aqui

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Qual o número indígena? 1 a 10';

//São 3 codigos (titulo, tituloaba e paragrafo) que podem todos serem resumidos em apenas uma função
//A forma otimizada é criando uma função para sempre ser lida, ao invés de toda vez repetir o código inteiro... Nome da função que criamos é substituirNoHtml
/***********Forma redundante*************/