function criaMultiplicador(multiplicador) { // Uma função que retorna outra função
    // Multiplicador
    return function(n){
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2); // assim duplica recebe a function(n) e se transforma em uma função
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5));

