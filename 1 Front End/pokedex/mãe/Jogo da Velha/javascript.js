var jogador="x";

function jogar(celula){ 
    //alert("funcionou!");

    if(celula){ 

        celula.innerHTML=jogador;

        if(jogador=="x" ){ 
            jogador="o";

        }else{ 
            jogador="x";

        }

    }
}

//função recarrega partida
function reiniciar(){
    window.location.reload();
}

//fulano = 0, ciclano = 1, deltrano =2, beltrano =3
const nomes = ['fulano','ciclano','deltrano','beltrano'];

function gerarBatalha(){
    //sorteia um nome da lista, "Math.random vai sortear os itens", "math.floor arredonda o numero da lista"
    const nome1 = nomes[Math.floor(Math.random() * nomes.length)];
    const nome2 = nomes[Math.floor(Math.random() * nomes.length)];
    const nome3 = nomes[Math.floor(Math.random() * nomes.length)];
    const nome4 = nomes[Math.floor(Math.random() * nomes.length)];

//enquanto nome1 = nome2, sorteia novamente
while(nome1 === nome2){
gerarBatalha();
}

//escreva na tela
    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;
    document.getElementById('jogador3').textContent = nome3;
    document.getElementById('jogador4').textContent = nome4;

}

function adicionar(){ 
var nome =document.getElementById("nome").value;
nomes.push(nome) 

listar()



}

function listar(){ 
    var listagem= document.getElementById("lista");
    listagem.innerHTML= "";          //limpa a lista em tela 

    for(var i =0; i <nomes.length; i++){          //percorre os itens da lista

     var item = document.createElement("li");       //cria elemento <li> PARA O HTML
     var nomeitem = nomes[i]                        //guarda na variável Nomeitem o nome específico da lista
      item.innerHTML= nomeitem;                    //colocar valor dentro do <li> 
      listagem.appendChild(item)                   //adiciona o <li> na lista do html, centro do <ul>
     

    }
} 
