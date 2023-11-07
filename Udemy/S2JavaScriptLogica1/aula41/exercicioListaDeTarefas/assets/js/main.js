const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress',function(e){
    if (e.keyCode === 13){// console.log(e) para ver o codigo da tecla enter
        if(!inputTarefa.value) return; // se inputTarefa === ''
        criaTarefa(inputTarefa.value)
    }
})

function limparInput() {
    inputTarefa.value = ''; // apaga o que foi escrito antes 
    inputTarefa.focus(); // volta para o lable depois de apertar enter
}

function criaBotaoApagar(li) {
    
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput
    tarefas.appendChild(li);
    limparInput();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return; // se inputTarefa === ''
    criaTarefa(inputTarefa.value)
})