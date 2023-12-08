//defineProperty -> Getter (Obter Valor) And Setters (Configurar valor)

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // estoque vai aparecer no console
        configurable: false, // permissao de apagar variavel e reconfigurar
        get: function(){
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                console.log('Erro, Valor invalido')
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa', 20, 3);
//console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque);