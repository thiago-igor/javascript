//               -5       -4       -3       -2          -1
//                0        1        2        3           4         
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia', 'thiago', 'Sabrina', 'Caio'];

// onde quero remover / qual quero remover / adicionando elementos
//nome.splice(índice, delete, elem1, elem2, elem3)

const removidos = nomes.splice(3,2) // removendo 2 do indice 3 para frente
console.log(nomes, removidos)

//Simula POP:
//removidos = nomes.splice(-1, 1)

//Simula shift
// removidos = nomes.splice(0, 1)

//Simula Push:
// nomes.splice(nomes.length, 0, 'Luiz') 


console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

const removidos2 = nomes.splice(-2, 2) // removendo 2 do indice -2 para frente
console.log(nomes, removidos2)

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

const removidos3 = nomes.splice(3, 1, 'Luiz') // remove do indice 3 e adiciona la Luiz
console.log(nomes, removidos3)
