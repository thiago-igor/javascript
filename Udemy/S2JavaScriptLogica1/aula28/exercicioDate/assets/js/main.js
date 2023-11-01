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
        case 3:
            dat.innerHTML = `Quarta-Feira, ${dia} de`
            break;
        case 4:
            dat.innerHTML = `Quinta-Feira, ${dia} de`
            break;
        case 5:
            dat.innerHTML = `Sexta-Feira, ${dia} de`
            break;
        case 6:
            dat.innerHTML = `Sábado, ${dia} de`
            break;
        default:
            break;
    }

    switch (mes) {
        case 0:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 0:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 1:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 2:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
            case 0:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
                break;
            case 3:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 4:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 5:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 6:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 7:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 8:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 9:
            dat.innerHTML += `Outubro de ${ano}  ${hora}:${min}`
            break;
        case 10:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
        case 11:
            dat.innerHTML += ` de ${ano}  ${hora}:${min}`
            break;
    
        default:
            break;
    }
}

diaAtual(dat);




 