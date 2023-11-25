function criaCalculadora() {
    return {
        //Atributos:
        display: document.querySelector('.display'), // display esta dentro do atributo do objeto 

        // Metodos 
        inicia(){
            
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', function(e) {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText); // enviando texto do butao
                }
            }.bind(this))
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
