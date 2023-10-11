// Algumas Regras de Strings:

//               01234567
let umaString = 'Um texto';
console.log(umaString[4])  // pega o caracter da posição 4
console.log(umaString.charAt(5)) // diz qual letra esta na posição 5
console.log(umaString.indexOf('texto')) // qual indice começa a palavra texto (OBS: caso nao exista, retorna '-1')
console.log(umaString.lastIndexOf('m', 3)) // começa de traz para frente, a partir do indice 3 


// Substituir texto:
console.log(umaString.replace('Um', 'Outra')) // troca 'Um' por 'Outra'

console.log(umaString.replace(/t/g, '#')) //troca todos os 't' por '#'

// Tamanho string:
console.log(umaString.length)

//String maiuscula e minuscula:
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase())

// Parte da string:
console.log(umaString.slice(0,2)) // caractere 0 a 2


//Dividir uma String 
console.log(umaString.split(' '))