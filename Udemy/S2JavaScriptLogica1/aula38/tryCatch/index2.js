try {
    // executado quando nao a erros
} catch (error) {
    //executado quando a erros
} finally{
    //Sempre
}

function retornaHora(data) {
    if(data && !(data instanceof Date)){ // Se a data foi enviada e é uma instancia de Date
        throw new TypeError('Esperando instância de Date')
    }

    if(!data){ // se a data n for enviada
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit', // por 2 digitos (zero na frente por exemplo)
        minute: '2-digit',
        second: '2-digit',
        hour12: false // para a hora nao ficar de 1 a 12 (AM/PM) , e sim de 00:00 as 23:59
    });
}

try{
    const data = new Date('01-01-1970 12:50:00')
    const hora = retornaHora(data);
    console.log(hora);
}catch{
    // Trata erro
}finally{
    console.log('tenha um bom dia')
}