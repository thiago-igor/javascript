function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}
 
const pessoa1 = criaPessoa('Thiago', 'Igor', 22);
const pessoa2 = criaPessoa('Sabrina', 'Barros', 23);
console.log(pessoa1)
console.log(pessoa2)


console.log('=-=-=-=-=-=-=-=-==-=-=-')

const pessoa3 = {
    nome: 'Jose',
    sobrenome: 'Maia',
    idade: 25,

    fala (){ // Função
        console.log(`${this.nome} ${this.sobrenome} Esta falando Olá!`); // referenciando
        console.log(`Minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}
pessoa3.fala();
pessoa3.incrementaIdade();
console.log('=-=-=-=-=-=-=-=-=-=-=-')
pessoa3.fala();