var frase = "Feliz Dia das Mães! Mãe, todos os dias agradeço pela vida que você me deu, mas hoje quero agradecer pelo exemplo que você é! Com toda a gratidão e amor que aprendi com você, quero desejar um Feliz Dia das Mães! Deus escolheu a melhor pessoa do mundo para ser a minha mãe!";

function gerarFrase(){
    var texto  = document.getElementById("frase");
    texto.innerHTML = frase ;         
}

function lerFrase(){ 
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso); 
}