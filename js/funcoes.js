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
function adicionaTexto(tipoTexto,idTexto, texto)
{
    let inputP = document.createElement(tipoTexto);
    inputP.id = idTexto;
    if(tipoTexto === 'p')
    {
        inputP.className = "texto__paragrafo";
    }
    inputP.textContent = texto;
    document.getElementById('divTextos').appendChild(inputP);
}
//////////////////////////////////////////////////////
function limpaTexto(idTexto)
{
    let removeTexto = document.getElementById(idTexto);
    removeTexto.parentNode.removeChild(removeTexto);
}
//////////////////////////////////////////////////////
function rodada(mensagemH1, mensagemP, caminhoImg, limpacampo)
{
    adicionaTexto('h1','titulo', mensagemH1)
    //substituirNoHtml('titulo', mensagemH1);
    adicionaTexto('p','paragrafo', mensagemP);
    //substituirNoHtml('paragrafo', mensagemP);
    trocaimagem(caminhoImg);
    limpaCampo(limpacampo);
}
//////////////////////////////////////////////////////
function rodada2(mensagemH1, mensagemP, caminhoImg)
{
    adicionaTexto('h1','titulo', mensagemH1)
    adicionaTexto('p','paragrafo', mensagemP);
    //substituirNoHtml('titulo', mensagemH1);
    //substituirNoHtml('paragrafo', mensagemP);
    trocaimagem(caminhoImg);
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
    adicionaTexto('h1','titulo', titulo);
    //substituirNoHtml('titulo', titulo); // Na função 'substituirNoHtml', onde tem 'tag' é substituído por 'h1' e onde tem 'texto' é substituído por 'Jogo do Índio'
    //substituirNoHtml('paragrafo', paragrafo);
    adicionaTexto('p','paragrafo', paragrafo);
    substituirNoHtml('idBotaoEsq', botaoesq);
    substituirNoHtml('idBotaoDir', botaodir);
}
//////////////////////////////////////////////////////
function inputCaixa(tipo, idInput, mensagem)
{
    let input = document.createElement("input");
    input.type = tipo;
    input.id = idInput
    input.placeholder = mensagem;
    input.className = "container__input";
    document.getElementById('input').appendChild(input);
}
//////////////////////////////////////////////////////
function removeCaixa(idInput)
{
    let removeCaixa = document.getElementById(idInput);
    removeCaixa.parentNode.removeChild(removeCaixa);
}
//////////////////////////////////////////////////////
function adicionaBotao(nomeFuncaoBotao, botaoId, textoBotao,idHtml)
{
    let botao = document.createElement("button");
    botao.onclick = nomeFuncaoBotao;
    botao.className = "container__botao";
    botao.id = botaoId;
    botao.textContent = textoBotao;
    document.getElementById(idHtml).appendChild(botao);
}
//////////////////////////////////////////////////////
function removeBotao(idBotao)
{
    let removerBotao = document.getElementById(idBotao);
    removerBotao.parentNode.removeChild(removerBotao);
}
//////////////////////////////////////////////////////
function apresentacao(aba,tituloH1,paragrafo,botaoesq,botaodir,tipoInput,idInput,mensagemInput,caminhoSrc)
{
    textos(aba,tituloH1,paragrafo,botaoesq,botaodir);
    inputCaixa(tipoInput,idInput,mensagemInput);
    trocaimagem(caminhoSrc);
}
//////////////////////////////////////////////////////
function numerosAleatorios(min, max, quantidade)
{
    if (quantidade > (max - min + 1))
    {
    return [];
    }
    let numeros = new Set();
    while (numeros.size < quantidade)
    {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    numeros.add(numero);
    }
    return Array.from(numeros);
}
//////////////////////////////////////////////////////
function mostrarConfirmacao(mensagemTexto)
{
  mensagem.textContent = mensagemTexto;
  modal.style.display = 'block';
}
//////////////////////////////////////////////////////
function sair()
{    
    window.location.href = '../index.html';
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
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    let chute = document.getElementById('chute').value; //O '.valeu' serve para ser lido APENAS a informação dentro da caixa input
    tentativas++;

    if (chute==numeroSecreto)
    {
    rodada(`Você descobriu o número! ${numeroSecreto}`, `Precisou de ${tentativas} tentativas.`,'img/indiosorrindo.png','chute');
    inverteBotoes(2);
    removeCaixa('chute');
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
        limpaTexto('titulo');
        limpaTexto('paragrafo');
        rodada('O índio está ficando BRAVO',`O NÚMERO É MENOOOR QUE ${chute}!`,'/img/indiomuitobravocolorido.png','chute');
        }
        if (tentativas>=3 && chute<numeroSecreto)
        {
        limpaTexto('titulo');
        limpaTexto('paragrafo');
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
    substituirNoHtml('titulo', `Jogo do Índio, agora nível ${nivel}!`);
    substituirNoHtml('paragrafo', `Qual é o número indígena? 1 a ${dificuldade}`);
    trocaimagem('/img/indioserio.png');
    inverteBotoes(1);
    inputCaixa('number','chute','Insira um número')
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
    limpaTexto('titulo');
    limpaTexto('paragrafo');
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
    removeCaixa('campo');
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
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    apertouBotao = 0;
    textos('Ferramenta do Índio','Índio Matemático!','Insira dois números e o índio dirá qual é o maior!','Inserir','Reset');
    inverteBotoes(1);
    trocaimagem('img/indioserio.png');
    inputCaixa('number','campo','Insira o número');
}

//****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Sistema que tira média dos números
/*
apresentacao('Ferramenta do Índio','O Índio Calculista!','Deseja calcular a média de quantos números?','Próximo','Reset','number', 'campo', 'Insira o número','img/indioserio.png');
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
        trocaimagem('img/indiosorrindo.png');
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
    trocaimagem('img/indioserio.png');
}
//****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Função que calcula fatorial
/*
apresentacao('Fatorial','Índio Matemático!','Digite um número para o índio calcular o seu fatorial!','Calcular','Reset','number','caixa','Digite o número:','img/indioserio.png');
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
    rodada2(`Resultado é ${resultado}`,`O Índio calculou o fatorial de ${numeroNaCaixa}`,'img/indiosorrindo.png');
    removeCaixa('caixa');
    inverteBotoes(2);
}
function botaoDir()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    rodada2('Índio Matemático!','Digite o número para o índio calcular o seu fatorial!','img/indioserio.png','caixa');
    inputCaixa('number','caixa','Digite o número:');
    inverteBotoes(1);
}
/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Sistema de cálculo IMC
/*
apresentacao('Calculo IMC', 'Índio Trainer', 'Insira as informações para o índio calcular o seu IMC', 'Calcular', 'Reset','text','altura','Altura em cm','img/indiomalhado.png');
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
        rodada('MAGREZA', `Seu IMC é ${imc.toFixed(2)}`,'img/indiomagro.png','altura');
        removeCaixa('altura');
        removeCaixa('peso');
        inverteBotoes(2);
    }
    if (imc>18.5 && imc<24.9)//normal
    {
        rodada('NORMAL', `Seu IMC é ${imc.toFixed(2)}`,'img/indiosorrindo.png','altura');
        removeCaixa('altura');
        removeCaixa('peso');
        inverteBotoes(2);
    }
    if (imc>24.9)//obesidade
    {
        rodada('OBESIDADE', `Seu IMC é ${imc.toFixed(2)}`,'img/indiogordo.png','altura');
        removeCaixa('altura');
        removeCaixa('peso');
        inverteBotoes(2);
    }
}
function botaoDir()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    rodada2('Índio Trainer', 'Insira as informações para o índio calcular o seu IMC','img/indiomalhado.png');
    inputCaixa('number','altura','Altura em cm');
    inputCaixa('number','peso','Peso em Kg');
    inverteBotoes(1);
}

/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Sistema de conversão REAL->Dolar->REAL
/*
apresentacao('Dólar Real','Converter para dólar','Digite o valor em reais:','Converter','Nova cotação','number','caixaReal','R$:','img/indiorico.png');

function botaoEsq()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    let reais = parseFloat(document.getElementById('caixaReal').value);
    let dolar = reais / 4.8;
    let palavraDolar = dolar==1 ? 'Dólar' : 'Dólares';
    rodada(`${dolar.toFixed(2)} ${palavraDolar}`,'Faça uma nova cotação','img/indioricosorrindo.png','caixaReal');
    inverteBotoes('2');
    removeCaixa('caixaReal');
}
function botaoDir()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    inputCaixa('number','caixaReal','R$');
    rodada('Converter para dólar','Digite o valor em reais:','img/indiorico.png','caixaReal');
    inverteBotoes(1);
}

/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Índio construtor
/*
textos('Índio Engenheiro','Cálculo de área e perímetro','Deseja calcular a área de um retângulo ou um circulo?','Retângulo','Circulo');
trocaimagem('img/indioengenheiro.png');
inverteBotoes(3);
let etapaRetangulo = 0;
let etapaCirculo = 0;
function botaoEsq()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    etapaRetangulo++
    if (etapaRetangulo==1 && etapaCirculo!=1)
    {
        apresentacao('Índio Engenheiro','Área e perímetro do RETÂNGULO!','Preencha as informações em METROS:','Calcular','Voltar','number','largura','Largura:','img/indioengenheiro.png');
        inputCaixa('number','comprimento','Comprimento:');
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if (etapaRetangulo==2)
    {
    inverteBotoes(2);
    let largura = parseFloat(document.getElementById('largura').value);
    let comprimento = parseFloat(document.getElementById('comprimento').value);
    let perimetro = (2*largura)+(2*comprimento);
    let area = (largura*comprimento);
    removeCaixa('largura');
    removeCaixa('comprimento');
    substituirNoHtml('idBotaoDir', 'Reiniciar');
    rodada2(`São ${area}m² de área e ${perimetro}m de perímetro!`,'Pressione reiniciar','img/indioengenheirosorrindo.png')
    console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if(etapaRetangulo==1 && etapaCirculo==1)
    {
        inverteBotoes(2);
        let raio = parseFloat(document.getElementById('raio').value);
        let perimetro = (6.28*raio);
        let area = 3.14*(raio*raio);
        rodada2(`Seu círculo tem ${area}m² de área e ${perimetro}m de perímetro!`,'Pressione reiniciar','img/indioengenheirosorrindo.png')
        removeCaixa('raio');
        etapaRetangulo = 3;
        console.log(raio,perimetro,area);
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
}
function botaoDir()
{
    limpaTexto('titulo');
    limpaTexto('paragrafo');
    etapaCirculo++
    console.log('ret/cir', etapaRetangulo, etapaCirculo);
    if(etapaRetangulo==1)
    {
        textos('Índio Engenheiro','Cálculo de área e perímetro','Deseja calcular a área de um retângulo ou um circulo?','Retângulo','Circulo');
        trocaimagem('img/indioengenheiro.png');
        inverteBotoes(3);
        removeCaixa('largura');
        removeCaixa('comprimento');
        etapaRetangulo=0;
        etapaCirculo=0;
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if(etapaRetangulo==2)
    {
        textos('Índio Engenheiro','Cálculo de área e perímetro','Deseja calcular a área de um retângulo ou um circulo?','Retângulo','Circulo');
        trocaimagem('img/indioengenheiro.png');
        inverteBotoes(3);
        etapaRetangulo=0;
        etapaCirculo=0;
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if(etapaRetangulo==0 && etapaCirculo==1)
    {
        apresentacao('Índio Engenheiro','Área e perímetro do CIRCULO!','Informe o RAIO do círculo em METROS:','Calcular','Voltar','number','raio','Raio:','img/indioengenheiro.png');
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if(etapaRetangulo==3)
    {
        textos('Índio Engenheiro','Cálculo de área e perímetro','Deseja calcular a área de um retângulo ou um circulo?','Retângulo','Circulo');
        trocaimagem('img/indioengenheiro.png');
        inverteBotoes(3);
        etapaRetangulo=0;
        etapaCirculo=0;
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if(etapaCirculo==2)
    {
        textos('Índio Engenheiro','Cálculo de área e perímetro','Deseja calcular a área de um retângulo ou um circulo?','Retângulo','Circulo');
        trocaimagem('img/indioengenheiro.png');
        inverteBotoes(3);
        removeCaixa('raio');
        etapaRetangulo=0;
        etapaCirculo=0;
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
}

/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
//Tabuada do Índio
/*
apresentacao('Tabuada','Tabuada do Índio!','Insira o número que deseja a tabuada','Calcular','Reset','number','caixa','Digite aqui','img/indioserio.png');
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
    trocaimagem('img/indiosorrindo.png');
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
    rodada2('Tabuada do Índio','Insira o número que deseja a tabuada','img/indioserio.png');
    inputCaixa('number','caixa','Digite aqui');
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

