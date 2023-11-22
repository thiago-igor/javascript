 // arguments: sustenta todos os argumentos enviados
 function funcao() {
    let total = 0;
    for (let argumento of arguments) { 
        total += argumento;
    }
    console.log(arguments) // arguments: retorna todos parametros de quando chamamos a função, mesmo sem ta declarado.
    console.log(total)
 }
 funcao(1, 2, 3, 4, 5, 6);


 function funcao2({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
 }

 funcao2({nome: 'Luiz', sobrenome: 'Otavio', idade: 20});