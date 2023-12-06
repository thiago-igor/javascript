// Retorne os numeros maiores que 10:
const numeros = [5, 50, 80, 1, 2, 3, 5,8, 7, 11, 15, 22, 27];

//Maneira moderna
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

// Maneira convencional:
const numerosFiltrados2 = numeros.filter( (valor) => { 
    return valor > 10; // em 'valor' a função pega um de cada vez e vai executando como um for 
});
console.log(numerosFiltrados2)

const numerosFiltrados3 = numeros.filter((valor, indice, array) =>{
    // podemos ter os valores, indice e array
})

//Filter recebe uma função de callback que pode ser chamada de fora ou colocada ja na expressão como vemos a cima