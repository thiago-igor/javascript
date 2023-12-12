// Descrição de propótipo:
// Prototipo é o termo para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para frutas produções.

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // Dessa forma sempre que chamamos new 'Pessoa' estamos criando um novo metodo na memoria, tirando a eficiencia do pc.
}

//Sendo assim usamos o prototypes para guardar esses metodos que desejamos criar:

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};
// dessa forma chamamos nome completo quando queremos

const pessoa1 = new Pessoa('Luiz', 'Henrrique.');

console.log(pessoa1.nomeCompleto());

//OBS:
// Pessoa.prototype === pessoa1._proto_