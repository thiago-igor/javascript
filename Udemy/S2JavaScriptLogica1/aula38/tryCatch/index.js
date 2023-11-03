// Try and Catch

try{ // Tente
    console.log(num)
}catch(err){ // captura o erro
    console.log('Variavel não existe') // msg de erro 
}


console.log('=-=-=-=-=-=-=-=-=-=-=-=')

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('X e y Precisam ser number') // gerando erro
    }

    return x + y // vai pular caso caia no if a cima
}

try{ // tentando
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}catch(error){ // capturando o erro
    console.log('Erro na soma!');
    console.log(error); // qual foi o erro
}