var idade = 18
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log(`Nao vota`)
}
else if (idade < 18 || idade >65 ) {
    console.log(`voto opicional`)
}
else if (idade >= 18) {
    console.log(`voto obrigatorio`)
}
