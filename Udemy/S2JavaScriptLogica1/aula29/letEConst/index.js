const verdadeira = true;
//let tem escopopo de bloco {... bloco}
//var so tem escorpo de função

let nome = 'Luiz'; //criando let 'nome'
var nome2 = 'Luiz';

if(verdadeira){
    let nome = 'Otavio'; // Estou criando outra let 'nome'
    var nome2 = 'Rogerio' //Redeclarou
    console.log(nome,nome2)
    if(verdadeira){
        let nome = 'outra coisa' // Estou criando outra let 'nome'
        var nome2 = 'Ronaldo'//Redeclarou
    }
}
console.log(nome, nome2)


console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=')

function teste() {
    var sobrenome = 'Miranda' // variavel vizivel so na função
    console.log(nome ,sobrenome) // 'nome': pegamos do codigo global
}
teste();



