function meuEscopo() {
    const form = document.querySelector('.form'); // selecionando formulario do html
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault(); // previne o comportamento padrao do navegador (Para nao Atualizar a pag)

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({ // criando objetos no array
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<p> Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Peso: ${peso.value}, Altura: ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();