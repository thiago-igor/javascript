const pessoas = ['Thiago', 'Sabrina' , 'Claudio']

//for In
for (let valor of pessoas){
    console.log(valor)
}

console.log('=-=-=-=-=-=')

// forEach
pessoas.forEach(function (valor, indice) {
    console.log(valor, indice);
});