function verificar() {
    var num = window.document.querySelector('input#num')
    var tab = window.document.querySelector('select#tab')

    
    if(num.value.length == 0){ // verificando se esta vazio
        window.alert('[Erro!] Por favor digite um numero')
    }else{

        num = Number(num.value)
    
        tab.innerHTML =" "
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')// criando um objeto html no javaScript
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item) // adiciona um elemento filho "item" dentro do "select"
        }
    }
    
}