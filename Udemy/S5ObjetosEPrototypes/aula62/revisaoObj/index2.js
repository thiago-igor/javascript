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

// O que 'new' faz: { } <- this   (_cria o obj e atrela palavra this a ele. Nesse caso this = p2)
const p2 = new Pessoa('Thiago', 'Igor');

//Já aqui, this se refere a p3, e assim por diante
const p3 = new Pessoa('Sabrina', 'Ellyza');
console.log(p2);
console.log(p3);



// Classes
