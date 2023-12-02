function criaCalculadora() {
    return{
        //Atributos:
        display:document.querySelector('.display'),// display esta dentro do atributo do objeto
        
        //Metodos:
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){ // keyCode === 13 (numero 13 é o codigo do botao 'Enter')
                    this.realizaConta();
                }
            })
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1); // o tamanho da string menos um
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta); // JS analiza e tenta executar o que ta escrito

                if(!conta){ // se conta == NaN
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = String(conta); // mostra a conta
            }

            catch(e){
                alert('Conta Inválida')
            }
        },


        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){ // contains (Verifica se contem a classe 'btn-num')
                    this.btnParaDisplay(el.innerText);  // enviando texto do butao
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
                
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();