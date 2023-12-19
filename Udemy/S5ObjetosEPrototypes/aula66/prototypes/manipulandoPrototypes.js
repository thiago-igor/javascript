/*
// Exemplo de manipulação
const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
    //__proto__: objA
}
Object.setPrototypeOf(objB, objA); // estou recebendo os objetos de objA em objB como herança 
console.log(objB.chaveA);  
*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//Metodos:
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(100); // equivalente a 100%
console.log(p1);

const produto2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(produto2, Produto.prototype) // assim, herda de Produto os metodos 'desconto' e 'aumento'

produto2.aumento(100) 
console.log(produto2)


const produto3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable:true,
        value: 'sapato'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable:true,
        value: 100
    }
})

produto3.desconto(50);
console.log(produto3);