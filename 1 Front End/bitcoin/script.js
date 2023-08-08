function buscar(){
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado');

    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')
    .then(response => response.json())
    .then(data => {
var preco = data[seletor].brl;
resultado.textContent = formatar(preco);
mudarImagem(seletor);
    }).catch(error => resultado.textContent = error);
}

function mudarImagem(seletor){
    var moeda = document.getElementById('imagem');

if(seletor == "bitcoin"){
    moeda.innerHTML = '<img width="200" src="https://o.remove.bg/downloads/710a74e7-54d2-40e9-b1ad-4b3cd7ab5790/bitcoin-moeda-dourada-do-cryptocurrency-s%C3%ADmbolo-dinheiro-da-finan%C3%A7a-eletr%C3%B4nica-%C3%ADcone-isolado-de-blockchain-125254443-removebg-preview.png" alt="">'
}else if(seletor = "ethereum"){
    moeda.innerHTML = '<img width="200" src="https://o.remove.bg/downloads/33f1d0a4-9c0f-4916-8b75-c07bedc5b319/crypto-ethereum-valuta-il-simbolo-d-oro-ka9ce4-removebg-preview.png" alt="">'
}else if(seletor = "litecoin"){
    moeda.innerHTML = '<img width="200" src="https://o.remove.bg/downloads/a7f46dbb-22a1-4225-8fa0-bdd530970a9c/dba80fc5-53e5-4afd-99b6-61c6c6fe7f5f_1.a63f77760eb786e4e52f1672e3723daa-removebg-preview.png" alt="">'
}else if(seletor = "dogecoin"){
    moeda.innerHTML = '<img width="200" src="https://o.remove.bg/downloads/79b0dbf7-a694-4bd3-8e05-d824eef2f978/1000_F_196642769_IeVCHzJ4t8pocLXtCYgBw4Y3Su3kdCml-removebg-preview.png" alt="">'
}
}


function formatar(valor){
    valor = Number(valor).toFixed(2).replace('.' , ',')
valor = "R$ "+valor;
return valor;
}
