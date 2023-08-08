async function buscarClima(){
    var cidade = document.getElementById("cidade").value;
    var chave = "df8c50798d3287aa89547e42809347c0";
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' +cidade+'&appid='+chave+'&units=metric';

try{ 
var resposta = await fetch(url);
var dado = await resposta.json();

var resultado = document.getElementById("resultado");
resultado.innerHTML =
'<h2> Previsão do Tempo para '+dado.name+' </h2>'
+'<p> Temperatura: ' +dado.main.temp+ ' C° </p>'
+'<p> Temperatura máxima: '+dado.main.temp_max+' C° </p>'
+'<p> Temperatura mínima: '+dado.main.temp_min+' C° </p>'
+'<p> Temperatura ambiente: '+dado.main.feels_like+' C° </p>'
+'<p> Humidade: '+dado.main.humidit+' % </p>'
+'<p> Velocidade do vento: '+dado.wind.speed+' Km/h </p>'
+'<p> Nuvens: '+dado.clouds.all+'% </p>'
+'<p> Condição: '+dado.weather[0].description+'</p>'
+'<img class="imgTempo" src="https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@4x.png">'


}catch(error){
var resultado = document.getElementById("resultado");
resultado.innerHTML="<p> erro ao buscar clima: "+error+"</p>";
}
}