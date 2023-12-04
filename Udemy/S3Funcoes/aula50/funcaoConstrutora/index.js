// Função fabrica: fabrica objetos
// Função costrutora: Cria novos objetos

// Construtora: criar função com primeira letra Maiúscula
// Pessoa (new)

function Pessoa (nome, sobrenome){
    //Pessoa.nome = nome
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um metodo');
    }

    const metodoInterno = function(){
        // so consigo usar esse metodo dentro da função
    }
    const ID = 1234; //Variavel interna da função
}

// Atributos e Metodos Publicos
// Precisamos chamar com 'new'
const p1 = new Pessoa('Luiz', 'Otavio')
const p2 = new Pessoa('Sabrina', 'Ellyza')

console.log(p1.nome)
p2.metodo();