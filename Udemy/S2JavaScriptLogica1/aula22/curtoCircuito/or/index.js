/*  True || False 
Vai retornar verdadeiro

FALSY (Valores que voltam false):
- false
- 0
- '' ""
- null / undefined
- NaN

TRUE:
- Todo o resto
*/

// Ler 'luiz otavio' pois é o primeiro verdadeiro
console.log(0 || false || null || 'luiz Otavio' || true);
// Se for tudo false, retorna o ultimo

//Assim podemos fazer condicionais:

const corUsuario = null;
const corPadrao = corUsuario || 'preto'// ele pega o primeiro verdadeiro

console.log(corPadrao);

