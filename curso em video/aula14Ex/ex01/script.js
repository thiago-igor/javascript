function calcular() {
    let ini = document.querySelector('input#ini') // let em vez de var , quer dizer que sao variaveis apenas para função
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }else{
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            alert("Passo Inválido. Considerando PASSO = 1")
            p = 1
        }
        if(i < f){
            //contagem crescente
            for (let c=i; c <= f; c += p) {
                res.innerHTML += `${c} > `    
            }
            //contagem regressiva
        }else{
            for(let c = i; c>=f ; c -= p){
                res.innerHTML += `${c} > `
            }
        }
        res.innerHTML += `\u{1F3C1}` // codigo que representa um emoji 
        // obs: sempre dentro do "\u{  }"
    } 

}