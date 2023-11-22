function rand(min = 1000, max = 3000) { // função que gera numeros radomicos
    const num = Math.random() * (max-min) + min;
    return Math.floor(num)
}

function f1(callback) { // esse parametro recebe uma função 
    setTimeout(function(){
        console.log('f1')
        if (callback) callback(); // callback para esperar a função executar
    }, rand()); // setTimeout para simular um tempo de espera aleatorio como na web buscando um dado
}

function f2(callback) {
    setTimeout(function(){
        console.log('f2')
        if (callback) callback();
    }, rand()); 
}

function f3(callback){ 
    setTimeout(function(){
        console.log('f3')
        if (callback) callback();
    }, rand());
}

f1 (f1Callback);

function f1Callback(){
    f2(f2Callback); // f2 e executado logo dps de f1
}

function f2Callback() {
    f3(f3Callback); // f3 e executado logo dps de f2
}

function f3Callback(){ // console.log é executado logo dps de f3
    console.log('FIM')
}





