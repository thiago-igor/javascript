// Referencias:
let a = [1,2,3]
let b = [...a] // copiando 'a'
let c = b; // aponta para 'b'

const d = {
    nome: 'Luiz',
    idade: 22
};

const e = d; // referencia
const f = {...d};// copia

d.nome = 'Joao';
console.log(e) // fica joao pois esta sendo referenciado 
console.log(f) // nao muda pois e uma copia 