const alunos = ['Maria', 'Joao', 'Sabrina' ,'Andre', 'jose' ,'Mario']
console.log(alunos.length)
alunos.push('Thiago')
alunos.unshift('Leo')// add no inicio do array 
alunos.pop(); // remove o ultimo
const removido = alunos.pop() // remove e salva em uma variavel
const removido2 = alunos.shift(); // remove o primeiro e salva em uma variavel
delete alunos[1]; // remove elemento e espaço fica vazio
console.log(alunos)
console.log(removido)
console.log(alunos.slice(0,3)); // ler a lista de 0 A 2 
console.log(alunos.slice(0, -1)) // todos menos o ultimo
console.log(alunos instanceof Array); // verifica se é um array
