/*
Filtrar pares
retorna a soma do dobro de todos os pares
reduce, somar tudo
*/
const numeros = [5, 50, 80, 1, 2, 3, 5,8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(function (valor){
    return valor % 2 === 0; // retorna pares 
}).map(function(valores){
    return valores*2 // retorna o dobro
}).reduce(function (acumulador , valores){
    return acumulador += valores;
}, 0)

// ou podemos reduzir para arrow function:

const numerosPares2 = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

console.log(numerosPares)
console.log(numerosPares2)