//Capturar evento de submit do formulario

const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e){ // nao recarrega a pag quando enviamos o formulario e sim guarda as informações 
    e.preventDefault(); // nao deixa o formulario ser enviado
    const inputPeso = e.target.querySelector('#peso') //'e.target' = Da onde esta vindo esse evento
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value); // transformando string em Number
    const altura = Number(inputAltura.value);

    if (!peso) { // se peso nao for verdadeiro
        setResultado('Peso invalido', false)
        return;
    }

    if (!altura) { // se altura nao for verdadeiro
        setResultado('Altura invalido', false)
        return;
    }   

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)
    
    const msg = `Seu IMC é ${imc}  (${nivelImc})`;
    
    setResultado(msg, true);
})

function criaParagrafo() {
    const p = document.createElement('p'); // criando um elemento
    return p;
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) {
        return nivel[5]
    }
    if (imc >= 34.9) {
        return nivel[4]
    }
    if (imc >= 29.9) {
        return nivel[3]
    }
    if (imc >= 24.9) {
        return nivel[2]
    }
    if (imc >= 18.5) {
        return nivel[1]
    }
    if (imc < 18.5) {
        return nivel[0]
    }
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaParagrafo();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);// adcionando p em resultado

}