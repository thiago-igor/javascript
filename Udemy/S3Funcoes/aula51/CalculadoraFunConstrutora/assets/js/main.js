function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.inicia = () => { // Usando Arrow function
        this.capturaCliques();
        this.capturaEnter();
        this.display.focus(); // Quando inicia o curso vai para o display
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => { //keyup: soltando a tecla
            if(e.keyCode === 13){
                this.realizaConta();
            }
        })
    }
    
    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);

            if (el.classList.contains('btn-clear')) this.clear()

            if (el.classList.contains('btn-del')) this.del()

            if (el.classList.contains('btn-eq')) this.realizaConta()
        });

    };

    this.addNumDisplay = (el) => {
     this.display.value += el.innerText;
     this.display.focus(); // voltando foco para o display
    }
    
    this.clear = () => this.display.value = this.display.value = ''; // Arrow function sem "{}" pois temos so uma linha 
    
    this.del = () => this.display.value = this.display.value.slice(0, -1); // String - 1

    this.realizaConta = () => {

        try {
            const conta = eval(this.display.value); // verifica se da para fazer uma operação com JS

            if(!conta){ // se conta = NaN
                alert('conta invalida');
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta Invalida');
            return;
        }
    }


}

const calculadora = new Calculadora();
calculadora.inicia();