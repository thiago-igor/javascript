//Map: parecido com a filter, porem vamos receber um valor exatamente do tamanho do array, ou seja, podemos alterar o array, mas o tamanho continua igual

//Dobrar os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5,8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2); // valor retorna valor x 2
//console.log(numerosEmDobro)


/*
Para cada elemento:
Retorne apenas uma string com o nome da pessoa
Remova apenas a chave 'nome' do obj
Adicione uma chave id em cada objeto
*/
const pessoas = [ // array de obj
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);



const dellNome = pessoas.map((obj) => {
    delete obj.nome;
    return obj;
})
console.log(dellNome);

const comIds = pessoas.map(function(obj, indice){
    obj.id = indice + 1; // fazendo um for e adicionando um id para cada indice
    return obj;
});
console.log(comIds);

console.log(pessoas);
// Aqui percebemos que mudamos todo nosso obj original