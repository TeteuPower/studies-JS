//Índio construtor

textos('Índio Engenheiro','Cálculo de área e perímetro','Deseja calcular a área de um retângulo ou um circulo?','Retângulo','Circulo');
trocaimagem('../img/indioengenheiro.png');
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
        apresentacao('Índio Engenheiro','Área e perímetro do RETÂNGULO!','Preencha as informações em METROS:','Calcular','Voltar','number','largura','Largura:','../img/indioengenheiro.png');
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
    rodada2(`São ${area}m² de área e ${perimetro}m de perímetro!`,'Pressione reiniciar','../img/indioengenheirosorrindo.png')
    console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if(etapaRetangulo==1 && etapaCirculo==1)
    {
        inverteBotoes(2);
        let raio = parseFloat(document.getElementById('raio').value);
        let perimetro = (6.28*raio);
        let area = 3.14*(raio*raio);
        rodada2(`Seu círculo tem ${area}m² de área e ${perimetro}m de perímetro!`,'Pressione reiniciar','../img/indioengenheirosorrindo.png')
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
        trocaimagem('../img/indioengenheiro.png');
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
        trocaimagem('../img/indioengenheiro.png');
        inverteBotoes(3);
        etapaRetangulo=0;
        etapaCirculo=0;
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if(etapaRetangulo==0 && etapaCirculo==1)
    {
        apresentacao('Índio Engenheiro','Área e perímetro do CIRCULO!','Informe o RAIO do círculo em METROS:','Calcular','Voltar','number','raio','Raio:','../img/indioengenheiro.png');
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if(etapaRetangulo==3)
    {
        textos('Índio Engenheiro','Cálculo de área e perímetro','Deseja calcular a área de um retângulo ou um circulo?','Retângulo','Circulo');
        trocaimagem('../img/indioengenheiro.png');
        inverteBotoes(3);
        etapaRetangulo=0;
        etapaCirculo=0;
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
    if(etapaCirculo==2)
    {
        textos('Índio Engenheiro','Cálculo de área e perímetro','Deseja calcular a área de um retângulo ou um circulo?','Retângulo','Circulo');
        trocaimagem('../img/indioengenheiro.png');
        inverteBotoes(3);
        removeCaixa('raio');
        etapaRetangulo=0;
        etapaCirculo=0;
        console.log('ret/cir', etapaRetangulo, etapaCirculo);
    }
}
function sair()
{    
    window.location.href = '../index.html';
}