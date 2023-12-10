// Copiar um objeto:
const produto = { nome:'Caneca', preco: 1.8};
const outraCoisa = {...produto} // copia obj em vez de referenciar
const otraCoisa2 = Object.assign({}, produto) // copiando de outra maneira
outraCoisa.nome = 'outro nome';
outraCoisa.preco = 2.50;
console.log(produto);
console.log(outraCoisa);

console.log('-=-=-==--=-=-=-=-=-=-=-=-=-=-=-=')



