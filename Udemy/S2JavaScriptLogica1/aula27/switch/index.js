const data = new Date('1987-04-26'); // exemplo de data
const diaSemana = data.getDay();

switch (diaSemana) {
    case 0:
        console.log('Tenha um bom domingo')
        break;
    case 1:
        console.log('Tenha uma boa Segunda-Feira')
        break;
    case 2:
        console.log('Tenha uma boa Terça-Feira')
        break;
    case 3:
        console.log('Tenha uma boa Quarta-Feira')
        break;
    case 4:
        console.log('Tenha uma boa Quinta-Feira')
        break;
    case 5:
        console.log('Tenha uma boa Sexta-Feira')
        break;
    case 6:
        console.log('Tenha um bom Sabado')
        break;
    default:
        console('[Erro]')
        break;
}