// definePropetis
function Produto(nome, preco, estoque){
   
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // estoque vai aparecer no console
        value: estoque,  // Valor que estoque vai receber
        writable: false, // permissao para alterar a variavel estoque
        configurable: false // permissao de apagar variavel e reconfigurar
    });

    Object.defineProperties(this, { // Praticamente a unica mudança é que configuramos mais de um
        nome: {
            enumerable: true,
            value: nome,  
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true,
            value: preco,  
            writable: true, 
            configurable: true 
        }
    })
}

const p1 = new Produto('Camisa', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave)
}
