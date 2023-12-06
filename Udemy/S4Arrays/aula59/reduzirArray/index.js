// Reduce: reduzir o array 

/*
Retorne:
A soma dos numero:(reduce)
um arrey com os pares (filter)
retorne um array com o dobro dos valores (map)
*/
const numeros = [5, 50, 80, 1, 2, 3, 5,8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador
}, 0) // 0 = valor inicial para Acumulador 
console.log(total); // reduzi o array a um unico elemento


// Retorne a pessoa mais velha:

const pessoas = [ // array de obj
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor; // se nao entrar no if
});
console.log(maisVelha);