let num = [0, 0, 7, 6, 5]
console.log(num)

num[3] = 7 // adicionando '7' na posição 3
console.log(num)

num.push(5) // adicionando '5' no final do vetor
console.log(num)

console.log(`O Vetor Tem ${num.length} Posições`) // quantos elementos tem no meu vetor

console.log(`primeiro elemento do vetor ${num[0]}`) // lendo um elemento na posição 0

num.sort() // transforma o vetor em ordem crescente 
console.log(`vetor em ordem crescente: ${num}`)

let pos = num.indexOf(7) // busca em que posição esta o valor "7"
if (pos == -1) { // retorna -1 quando nao acha
    console.log("Valor não encontrado")
}else{
    console.log(`o Valor 7 esta na posição ${pos}`)
}
