// Função fabrica:
function criaPessoa(nome, sobrenome, altura, peso) {
    return{
        nome, // obj separado por virgulas
        sobrenome,
        nomeCompleto(){ // função dentro do obj
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter:
       set nomeCompleto2(valor){
            valor = valor.split(' '); // cria um arrey com cada palavra
            this.nome = valor.shift(); // exclui o primeiro do array
            console.log(valor)
       },
        fala(assunto){ // função dentro do obj
            return `${nome} esta falando ${assunto}`;
        },
        altura: altura,
        peso: peso,
        //getter: finje ser um atributo, entao na hr de chamar, chamamos igual atributo
        get imc(){ // função dentro do obj
            const indice = this.peso / (this.altura ** 2); // this chama o que é passado pelo parametro
            return indice.toFixed(2)
        }

    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.77, 80);
console.log(p1.nomeCompleto()) // parenteses por ser função
console.log(p1.imc) // sem parenteses por ta imitando um atributo com o 'get'

const p2 = criaPessoa('Maria', 'Oliva', 2.01, 100);
p2.nomeCompleto2 = 'Luiz Oliveira Maia';



// Função construtoras:
