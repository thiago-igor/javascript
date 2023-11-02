const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'}
];

const container = document.querySelector('.container')
const div = document.createElement('div'); // Criando um elemento

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]; // desestruturação do objeto
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div)