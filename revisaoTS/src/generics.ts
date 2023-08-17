const returnValue = <T>(value: T) => value // na arrow function temos o <T> que representa um Typer generico

const menssage = returnValue<string>('Hello Word') // passamos aqui o Typer
const count = returnValue<number>(5);


function getFristValueFromArray<Typer>(array: Typer[]) {
    return array[0] // retorna primeiro valor do array
}

const firstValueFromStringArray = getFristValueFromArray<string>(['1','2','3']);
const firstValueFromNumberArray = getFristValueFromArray<number>([10, 20]);

 