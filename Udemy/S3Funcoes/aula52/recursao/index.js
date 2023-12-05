//Recursividade: uma função que chama ela mesma:
// OBS: Existe um limite no JS, se for chamado muitas vezes o node da erro. tipo chamando umas 1000 vezes 

function recursiva(max){
    if(max >= 10) return; //limite
    max++;
    console.log(max);
    recursiva(max); // chamando a função dendro da função
}
recursiva(0);