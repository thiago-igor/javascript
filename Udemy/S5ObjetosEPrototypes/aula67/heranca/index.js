// Produto -> aumento, desconto
// Camiseta = cor, caneta = material
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};


function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); // chamando a funcao produto
    this.cor = cor; // adicionando atributo diferente de 'Produto'
};

Camiseta.prototype = Object.create(Produto.prototype)
//criando um obj vazio e passando o Produto
Camiseta.prototype.constructor = Camiseta;
//voltando o __Proto__ para camiseta 

const produto = new Produto('short', 10)
const camiseta = new Camiseta('Regata', 7.8, 'Preta');
camiseta.aumento(10);
console.log(camiseta);
console.log(produto)
