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

function criaBotaoApagar(li) { // criando botao apagar ao lado da lista li
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    // botaoApagar.classList.add('apagar') // cria classe
    botaoApagar.setAttribute('class', 'apagar'); // outro jeito de criar classe para o botao
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // texto criado quando passa o mpuse em cima do botao apagar
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput
    tarefas.appendChild(li);
    limparInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return; // se inputTarefa === ''
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const el = e.target; // captura onde esta sendo clicado com o mouse 
    if(el.classList.contains('apagar')){ // se esse botao contem a classe 'apagar'
    el.parentElement.remove(); // // Apagando o pai do botao 'apagar':
    salvarTarefas();
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')// seleciona todos 'li' de da Ul 'tarefas'
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText; // colocando as tarefas em um array
        tarefaTexto = tarefaTexto
        .replace('Apagar', '').trim(); // substitui 'Apagar' por '' e trim() tira espaços np final da string 
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas) // transformando array em String
    localStorage.setItem('tarefas', tarefasJSON); // Salvar no navegador as tarefas
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas) // volta a ser um array
    console.log(listaDeTarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa); 
    }
}

adicionaTarefasSalvas();