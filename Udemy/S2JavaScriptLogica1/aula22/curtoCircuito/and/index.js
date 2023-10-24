/*
FALSY (Valores que voltam false):
- false
- 0
- '' ""
- null / undefined
- NaN

TRUE:
- Todo o resto
*/

//Curto circuito:
console.log('Luiz' && 0 && 'Thiago') // para no 0 pois representa false

console.log('Sabrina' && 1 && 'Maria') // para no ultimo pois é tudo verdadeiro

function falaoi () {
    return 'oii!';
}

const vaiExecutar = 'Thiago';

console.log(vaiExecutar && falaoi());// fala 'oii!' pois temos true && true
