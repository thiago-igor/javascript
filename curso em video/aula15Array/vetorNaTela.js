let num = [9,4,7,8,7,0]
num.sort()

for(let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

console.log("--------------")

for(let pos in num){ // for simplificado. (para cada "posição" dentro de "num", execute:)
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
} // obs so funciona com array e objetos

