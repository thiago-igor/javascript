function radom(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = radom(min, max);

while(rand !== 10){ // equanto o numero for diferente de 10
    rand = radom(min, max)
    console.log(rand)
}

console.log('=-=-=-=-=-=-=-=-=')

do{ // executa e so dps checa a condição
    rand = radom(min, max);
    console.log(rand)
} while(rand !== 10)