const paragrafos = document.querySelector('.paragrafos')
//criando NodeList
const ps = paragrafos.querySelectorAll('p') // pega todos os p do 'Paragrafos'

const estilosBody = getComputedStyle(document.body) // pegando todos os Style do body
const backgroundColorBody = estilosBody.backgroundColor; // pegando o backgroundColor

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#fff'
}