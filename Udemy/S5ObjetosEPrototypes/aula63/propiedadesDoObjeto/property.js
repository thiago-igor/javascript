//defineProperty:

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // estoque vai aparecer no console
        value: estoque,  // Valor que estoque vai receber
        writable: false, // permissao para alterar a variavel estoque
        configurable: false // permissao de apagar variavel e reconfigurar
    });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 50; // nao altera por conta da função acima
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave)
}
