const numero = Number(window.prompt('Digite um Numero:')) // convertendo para Number
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto') 

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Seu numero mais 2 é ${numero + 2} </p>`;
texto.innerHTML += `<p> ${numero} é um numero inteiro? ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> ${numero} é um numero NaN? ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p> Raiz quadrada de ${numero} é: ${numero**0.5} </p>`
texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`