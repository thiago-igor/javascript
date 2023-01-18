function verificar() {
    var num = window.document.querySelector('input#num')
    var res = window.document.querySelector('div#res')

    num = Number(num.value)

    for (let index = 1; index <= 10; index++) {
        var mult = num * index
        res += res.innerHTML =`${num} x ${index} = ${mult}`
        
    }
}