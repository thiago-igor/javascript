// Usar Factory functions 

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Miranda')
console.log(p1.nomeCompleto())

// Usar Constructor functions 

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
} 

const p2 = new Pessoa('Thiago', 'Igor');
console.log(p2);



// Classes
