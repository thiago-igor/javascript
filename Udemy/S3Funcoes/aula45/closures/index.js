// Closures é  a habilidade que a função tem de acessar seus vizinhos 

// Global
function retornaFuncao(nome) {
    return function(){
        return nome; // retornando 'nome' da função a cimma
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');

console.dir(funcao)
console.dir(funcao2) // dir: diz que é uma função anonima

console.log(funcao(), funcao2());