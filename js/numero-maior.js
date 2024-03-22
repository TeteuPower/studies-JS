//Sistema para dizer qual o número maior

apresentacao('Ferramenta do Índio','Índio Matemático!','Insira dois números e o índio dirá qual é o maior!','Inserir','Reset','number','campo','Insira o número','../img/indioserio.png');
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
    trocaimagem('../img/indiosorrindo.png');
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
    trocaimagem('../img/indioserio.png');
    inputCaixa('number','campo','Insira o número');
}
function sair()
{    
    window.location.href = '../index.html';
}
