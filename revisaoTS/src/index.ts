// Tipos Básicos
let age:number = 5
const fristName: string = 'Felipe'
const isValid: boolean = true
let idk: any = 5

const ids: number[] = [1,2,3,4,5]
const boolean: boolean[] = [true,false,true]
const names: string[] = ['Felipe', 'Andre']

console.log(age);


//TUPULAS

const person: [number, string] = [50, 'Andre'] //tem que por na ordem predeterminada

const people: [number, string] [] =  
[[50, 'Andre'],
[45, 'Thiago'],
[24, 'Sabrina'],
[30, 'Leo']]



//INTERSECTION:

const productId: string | number | boolean = false // a variavel pode ser qualquer das opçoes, nesse caso "false"



//Enum:

enum Direction{
    up = 1,
    down =2
}

const direction = Direction.up
//console.log(Direction)



//Type Assertions

const productName: any = 'Bone'

let itemId = productName as string // Transforma o que for em string