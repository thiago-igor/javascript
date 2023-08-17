"use strict";
// Tipos Básicos
let age = 5;
const fristName = 'Felipe';
const isValid = true;
let idk = 5;
const ids = [1, 2, 3, 4, 5];
const boolean = [true, false, true];
const names = ['Felipe', 'Andre'];
console.log(age);
//TUPULAS
const person = [50, 'Andre']; //tem que por na ordem predeterminada
const people = [[50, 'Andre'],
    [45, 'Thiago'],
    [24, 'Sabrina'],
    [30, 'Leo']];
//INTERSECTION:
const productId = false; // a variavel pode ser qualquer das opçoes, nesse caso "false"
//Enum:
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up;
//console.log(Direction)
//Type Assertions
const productName = 'Bone';
let itemId = productName; // Transforma o que for em string
