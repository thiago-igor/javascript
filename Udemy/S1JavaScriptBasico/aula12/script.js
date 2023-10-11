// Mudando a ordem:

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varTemp = varA

varA = varB
varB = varC
varC = varTemp
console.log(varA, varB, varC);


// Outra maneira simples do JS:

[varA, varB, varC] == [varB, varC, varA]
console.log(varA, varB, varC)