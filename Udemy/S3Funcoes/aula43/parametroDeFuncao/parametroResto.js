function conta(operador, acumulador, ...numeros){ // '...numeros' pega todo o resto enviado na chamada da função
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

conta('+', 1, 20, 30, 20) // (20, 30 ,20) isso seria o resto

