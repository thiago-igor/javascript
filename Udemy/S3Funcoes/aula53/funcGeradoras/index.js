// Funções Geradoras:

// A primeira vez que chamo a função me retorna a resposta 1
// 2 vez me retorna a resposta 2 e assim por diante ate acabar

/*
function* geradora1(){
    //Qualquer codigo
    yield 'Valor 1';

    //Qualquer codigo
    yield 'Valor 2';

    //Qualquer codigo
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value) // Tenho q por .next em funções geradoras
console.log(g1.next().value)
console.log(g1.next().value)

*/

function* gerador2(){
    let i = 0;

    while(true){ // while infinito
       yield i;
       i++; 
    }
}

const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* gerador3(){ 
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4 (){
    yield* gerador3(); // chamando uma função geradora dentro de outra
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor)
}

function* geradora5(){
    yield function(){
        console.log('Vim do y1')
    };

    //...

    yield function(){
        console.log('Vim do y2')
    }
}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();