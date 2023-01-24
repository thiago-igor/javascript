let amigo = {nome: 'josé',
sexo: 'M',
peso: '85.5',
engordar(p=0){
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} Engordou ${amigo.peso}Kg`)