let num1 = 10;
let num2 = 2.5213;
let num3 = 0.7;
let num4 = 0.1;

// transformando num1 em string para fazer uma concatenação
console.log(num1.toString() + num2) 

//Definir casas decimais:
console.log(num2.toFixed(2))

// Representação binaria de num:
console.log(num1.toString(2))

//Retornar se o number é inteiro:(Boolean)
console.log(Number.isInteger(num1))

//Resolver imprecisao do JS
let soma = num3 + num4

console.log(soma) // imprecisao

soma = parseFloat(soma.toFixed(2)) // conta precisa 
console.log(soma) 


