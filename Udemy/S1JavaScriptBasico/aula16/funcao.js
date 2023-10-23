function saudacao(nome) {
    console.log(`Bom dia ${nome}`)
    return nome;
}
saudacao('Thiago');
const variavel = saudacao('Luiz');
console.log(variavel)

console.log('=-=-=-=-=-=-=-=')

function soma(x = 0,y = 0) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(5,6))

console.log('=-=-=-=-=-=-=-=-')

const raiz = (n) => { // arrow fuction
    return n**0.5;
};
console.log(raiz(9));

// ou faz assim:

const raiz2 = (n) => n**0.5;
console.log(raiz2(16));
