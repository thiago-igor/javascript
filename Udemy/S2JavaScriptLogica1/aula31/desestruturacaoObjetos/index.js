const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco:{
        rua: 'Av Brasil',
        numero: 1087
    }
};

//Atribuição por desestruturação:
const{nome, sobrenome} = pessoa; // Criando consts com o valor de nome e sobrenome 
console.log(nome, sobrenome)

// Ou para mudar o nome da const:
const{nome: teste1, sobrenome: teste2} = pessoa
console.log(teste1, teste2)

//Atribuição por desestruturação:
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero)

//Atribuição por desestruturação:
const{nome: nom, ...resto} = pessoa // resto do objeto
console.log(resto)