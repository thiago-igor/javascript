function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false // hora nao tem 12h e sim 24h
    });
}

const timer = setInterval(function(){ // executa a função em um determinado intervalo pre-definido
    console.log(mostraHora());
}, 1000) // intervalo de 1000 milisegundous = 1seg mostra a hora

setTimeout(function(){
    clearInterval(timer);  // função para parar 
}, 4000) // timer para depois de 4 seg

setTimeout(function () {
    console.log('Ola Mundo') 
}, 5000) // mostra o 'ola mundo' com 5 seg