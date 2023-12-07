// OBJ1
const pessoa = {
    nome: 'luiz',
    sobrenome: 'otavio'
}
console.log(pessoa.nome)
//OU
console.log(pessoa['sobrenome']);


//OBJ 2
const pessoa1 = new Object();
pessoa1.nome = 'Thiago';
pessoa1.sobrenome = 'Igor';

delete pessoa1.nome // deletando nome
console.log(pessoa1)


//OBJ 3

const pessoa2 = new Object();
pessoa2.nome = 'Sabrina';
pessoa2.sobrenome = 'Ellyza';
pessoa2.idade = 22;
pessoa2.falarNome = function () {
    return (`${this.nome} esta falando seu nome`)
};
pessoa2.getDataNascimento = function (){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade; // Calculando data de nascimento
};
console.log(pessoa2.getDataNascimento());