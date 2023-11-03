// ver se a imagem esta no modo retrato
function ePaisagem(largura, altura) {
  return largura > altura;
}
console.log(ePaisagem(1900, 1820))

// Usando arrow function
const epaisagem2 = (largura, altura) => largura > altura;

console.log(epaisagem2(2000, 2400));

