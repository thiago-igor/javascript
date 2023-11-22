// Declaração de função (Function hoisting)
// Eleva todas as funçoes para o topo do codigo, ou seja, podemos chamar a função antes dela no codigo

falarOi();
function falarOi() {
    console.log('oi');
}


// First-class objects (objetos de primeira classe)
// variavel que vira uma função:

const souUmDado = function () {
    console.log('Sou um dado')
}

souUmDado();


// com isso uma função pode chamar outra

function executaFuncao(funcao) {
    console.log('Vou executar a função a baixo')
    funcao()
}

executaFuncao(souUmDado);


// Arrow function:
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow();

// Funcao dentro do obj:

const obj = {
    falar(){ // funcao
        console.log('Estou falando...')
    }
};

obj.falar();

