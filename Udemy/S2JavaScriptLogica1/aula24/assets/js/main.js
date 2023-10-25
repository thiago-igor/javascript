//Capturar evento de submit do formulario

const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e){ // nao recarrega a pag quando enviamos o formulario e sim guarda as informações 
    e.preventDefault();
    console.log('Evento enviado');
})