var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar rebatedor
var raqueteAltura = 6;
var raqueteLargura = 65;
var raqueteX = (canvas.width - raqueteLargura) / 2;
var velocidadeRaquete = 8;
 

//configurar a bola
var bolaRadius = 8;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;
var bolaDY = -2;

var tijolosPorLinha = 10;
var tijolosPorColuna = 10;
var tijoloLargura = 46;
var tijoloAltura = 15;
var tijoloespacamento = 10;
var espacamentoSuperiorQuadro = 10;
var espacamentoEsquerdoQuadro = 10;
var tijolos = [];

var totalPontuacao = tijolosPorLinha * tijolosPorColuna * 180;
var pontuacao = 0;

function facil(){
    raqueteLargura = 70;
    tijolosPorLinha = 5;
tijolosPorColuna = 9;
tijoloLargura = 50;
tijoloAltura = 20;
bolaRadius = 15;
bolaDX = 1;
bolaDY = -2; 
totalPontuacao = tijolosPorColuna * tijolosPorColuna * 180;
pontuacao = 0; 
bolaX = canvas.width / 2;
bolaY = canvas.height - 30;
iniciarTijolos(); 
}



function medio(){
    raqueteLargura = 70;
    tijolosPorLinha = 5;
tijolosPorColuna = 9;
tijoloLargura = 50;
tijoloAltura = 20;
bolaRadius = 15;
bolaDX = 6;
bolaDY = -7; 
totalPontuacao = tijolosPorColuna * tijolosPorColuna * 180;
pontuacao = 0; 
bolaX = canvas.width / 2;
bolaY = canvas.height - 30;
iniciarTijolos(); 
}


function dificil(){
    raqueteLargura = 70;
    tijolosPorLinha = 5;
tijolosPorColuna = 9;
tijoloLargura = 50;
tijoloAltura = 20;
bolaRadius = 15;
bolaDX = 10;
bolaDY = -9; 
totalPontuacao = tijolosPorColuna * tijolosPorColuna * 180;
pontuacao = 0; 
bolaX = canvas.width / 2;
bolaY = canvas.height - 30;
iniciarTijolos(); 
}


function impossivel(){
    raqueteLargura = 70;
    tijolosPorLinha = 5;
tijolosPorColuna = 9;
tijoloLargura = 50;
tijoloAltura = 20;
bolaRadius = 15;
bolaDX = 12;
bolaDY = -11; 
totalPontuacao = tijolosPorColuna * tijolosPorColuna * 180;
pontuacao = 0; 
bolaX = canvas.width / 2;
bolaY = canvas.height - 30;
iniciarTijolos(); 
}

function iniciarTijolos(){



for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
    tijolos[coluna] = []

    for (var linha = 0; linha < tijolosPorLinha; linha++){

        tijolos[coluna][linha] = {x: 5, y: 5, ativo: 1}
    }
    
}
}
 iniciarTijolos();
 
var setaDireita = false;
var setaEsquerda = false;
 
document.addEventListener("keydown", descerDaTecla);                                                                          
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla){
    if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
        setaDireita = true;
     }else if(tecla.key === "Left" || tecla.key === "ArrowLeft"){
        setaEsquerda = true;
        }

    }
    function subirDaTecla(tecla){
        if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
            setaDireita = false;
         }else if(tecla.key === "Left" || tecla.key === "ArrowLeft"){
            setaEsquerda = false;
         }
    }


function desenharRaquete(){
    desenho.beginPath();
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "";
    desenho.fill();
    desenho.closePath();
}
function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "redlack";
    desenho.fill();
    desenho.closePath();

}

function desenhartijolos(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha++){
            if(tijolos[coluna][linha].ativo == 1){
              var tijoloX = (coluna * (tijoloLargura + tijoloespacamento)+ espacamentoEsquerdoQuadro);
              var tijoloY = (linha * (tijoloAltura + tijoloespacamento) + espacamentoSuperiorQuadro);
             
              tijolos[coluna][linha].x = tijoloX;
              tijolos[coluna][linha].y = tijoloY;  
     
              desenho.beginPath();
              desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura);
              desenho.fillStyle = " black";
              desenho.fill();
              desenho.closePath();



            }
        }
    }
}

function detectarColisao(){
    for (var coluna=0; coluna < tijolosPorColuna; coluna++){
        for (var linha = 0; linha < tijolosPorLinha; linha++){

        var tijolo = tijolos[coluna][linha];

        if(tijolo.ativo === 1){

            if(  bolaX + bolaRadius > tijolo.x
                && bolaX - bolaRadius < tijolo.x + tijoloLargura
                && bolaY + bolaRadius > tijolo.y 
                && bolaY - bolaRadius < tijolo.y + tijoloAltura){
                    bolaDY =  -bolaDY;
                tijolo.ativo = 0;
                tela = document.getElementById("ponto");
                pontuacao = pontuacao + 180;
                tela.innerHTML = "Score: "+ pontuacao;
                gerarEfeitoSonoro('moeda.mp3')
                if(pontuacao === totalPontuacao){
                     window.location.reload();
                     if (pontuacao === totalPontuacao){
                        vitoria();
                     }
                    }
                }
            }
        }
    }
}
function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
    gerarEfeitoSonoro('gameover.mp3')
}
function reiniciar(){
    //window.open('index.html');
    window.location.reload();
    gerarEfeitoSonoro('spaw.mp3')
}
function gerarEfeitoSonoro(som){
    var contexto = new (windowAudioContext) ();
    var requisicao = new XMLhttpRequest
}
function vitoria(){
    var mensagem = document.getElementById("vitoria");
    mensagem.style.display = "block";
    gerarEfeitoSonoro('vitoria.mp3')
}
function gerarEfeitoSonoro(som){
    var contexto = new (window.AudioContext) ();
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET', som, true);
    requisicao.responseType = 'arraybuffer';
   
    requisicao.onload = function(){
        contexto.decodeAudioData(requisicao.response, function(buffer){
        var fonte = contexto.createBufferSource();
        fonte.buffer = buffer;
        fonte.connect(contexto.destination);
     fonte.start(0);
    });
    }
    requisicao.send();
}

function desenhar(){
    desenho.clearRect(0 ,0, canvas.width, canvas.height);
    desenharRaquete();
    desenharBola();
    desenhartijolos();
    detectarColisao();

    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        bolaDX = -bolaDX;
        gerarEfeitoSonoro('bordas.mp3')

    }

    if(bolaY + bolaDY < bolaRadius){
        bolaDY = -bolaDY;
        gerarEfeitoSonoro('bordas.mp3')

    } else if(bolaY + bolaRadius > canvas.height - bolaRadius){

        if(bolaX > raqueteX && bolaX < raqueteX+raqueteLargura){

            bolaDY = -bolaDY;

            }else{

                //document.location.reload();
                gameover();
            }
        }

        if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
            raqueteX = raqueteX + velocidadeRaquete;
   
        }
        else if(setaEsquerda === true && raqueteX > 0){
            raqueteX = raqueteX - velocidadeRaquete;
        }
        bolaX = bolaX + bolaDX;
        bolaY = bolaY + bolaDY;

        requestAnimationFrame(desenhar)

    }

 desenhar();
