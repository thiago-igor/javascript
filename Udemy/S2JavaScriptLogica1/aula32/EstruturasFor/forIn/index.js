const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas){ // percorre os indices
    console.log(frutas[i])
}

console.log('-=-=-=-=-=-=-=-=-=-=-=')

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);  // chave: O que tem no index   pessoa[chave]: O que tem dentro do index
}
