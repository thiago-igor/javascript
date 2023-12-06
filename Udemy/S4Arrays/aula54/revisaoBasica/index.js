const nomes = ['Eduardo', 'Maria', 'Joana', 'Thiago'];
//valores por referencia:
const novo = [...nomes]; // em vez de referenciar para 'novo', estou fazendo uma copia
novo.pop(); // remove o ultimo obj
novo.shift(); // remove o primeiro
novo.push('Alex') // adiciona no final do array
nomes.unshift('Maia') // Adiciona no inicio do array
console.log(novo);
console.log(nomes);
console.log(nomes.length)// tamanho do array

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

//slice:
const novo2 = nomes.slice(1,3); // me da o array do indice 1 ao 2 (desconsidera o ultimo, nesse casa 3)
console.log(novo2)

const novo3 = nomes.slice(0, -2) // ,ostra tudo, menos os 2 ultimos
console.log(novo3);

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

// split:
const nome = 'Luiz Otavio Miranda'
const nomeSplit = nome.split(' ') // separando String por espaço
console.log(nomeSplit)

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

// join
const nome2 = ['Luiz', 'Otavio', 'Miranda'];
const nomeJoin = nome2.join(' ') // junta o arry com o espaçamento passado (' ')
console.log(nomeJoin);