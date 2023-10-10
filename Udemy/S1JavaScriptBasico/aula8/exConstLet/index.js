const nome = 'Thiago maia';
const sobrenome = 'Barros';
const idade = 22;
const peso = 70;
const altura = 1.79;
let imc;
let anoNascimento;

imc = peso / altura**2;
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu ICM é de ${imc} \n ${nome} nasceu em ${anoNascimento}`)