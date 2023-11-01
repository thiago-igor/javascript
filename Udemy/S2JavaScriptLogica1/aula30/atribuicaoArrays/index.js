const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const [numero1, numero2, ...resto] = numeros; // atribui consts na ordem do array
console.log(numero1,numero2)
console.log(resto); // pega o resto do array 

console.log('=-=-=-=-=-=-=-=-=-=-')

//                     0           1           2
//                  0  1  2     3  4  5    6  7  8
const numeros2 = [ [1, 2, 3] , [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2])