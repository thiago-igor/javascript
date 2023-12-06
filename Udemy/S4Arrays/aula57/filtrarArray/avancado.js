// Retorne pessoas que tem o nome com 7 letras ou mais:
// Retorne pessoas com mais de 50 anos 
//retorne as pessoas cujo o nome termina com a 

const pessoas = [ // array de obj
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoasNomeGrande = pessoas.filter((obj) => obj.nome.length >= 7);
console.log(pessoasNomeGrande)

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

const pessoaMais50Anos = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoaMais50Anos);

const pessoaNomeTerminaComA = pessoas.filter((obj) => {
    return obj.nome.toLocaleLowerCase().endsWith('a') // transforma em minusculo e retorna a com 'a' no final
})


//OBS: esse Obj retrata no filter todos os valores, que no caso sao objetos de 'pessoas'