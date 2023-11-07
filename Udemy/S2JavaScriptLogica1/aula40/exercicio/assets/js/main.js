
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // (* 1000) pois JS considera milesegundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC', // considerando a hora (01/01/1970) as (00:00:00)
    })
}

function iniciaRelogio() {
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

document.addEventListener('click', function(e){
    const el = e.target // e.targt: captura onde clicamos na pag

    if(el.classList.contains('iniciar')){ // se contem a classe 'iniciar'
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }

    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado')
        clearInterval(timer);
    }

    if(el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado')
        segundos = 0;
    }
})




