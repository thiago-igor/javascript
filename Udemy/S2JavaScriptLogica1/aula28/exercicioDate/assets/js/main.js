const dat = document.querySelector('.dataH1');

function diaAtual(dat) {
    const data = new Date();
    const dia = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    
    switch (dia) {
        case 0:
            dat.innerHTML = `Domingo, ${dia}`
            break;
        case 1:
            dat.innerHTML = `Segunda-Feira, ${dia}`
            break;
        case 2:
            dat.innerHTML = `Terça-Feira, ${dia} de`
            break;
    
        default:
            break;
    }

    switch (mes) {
        case 9:
            dat.innerHTML += `Outubro de ${ano}  ${hora}:${min}`
            break;
    
        default:
            break;
    }
}

diaAtual(dat);




 