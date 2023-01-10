function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h`
    
    if (hora >=0 && hora<=12) {
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = "#FDCE2D"
    }
    else if (hora >12 && hora < 18) {
        // boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = "#D96236"
    }
    else{
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = "#246473"
    }
}