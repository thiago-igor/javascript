// A função é invocada assim que é criada

(function(nome, idade){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
})('Thiago', 22)

// essa função esta fora do meu escorpo global e é executada assim que criada sem precisar chamar a função