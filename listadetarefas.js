var nivel = 1;
var tarefaConcluida = 0;
var tarefasPorNivel = 3;
var diasProgramando = 0;

function adicionartarefas(){
    var tarefaInput = document.getElementById("tarefa");
    var tarefa = tarefaInput.value;
    var lista = document.getElementById("listaTarefas");
    var novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = `
    <span class="tarefa2">${tarefa}</span>
    <button onclick="concluirTarefa(this)">Em andamento</button>
    <button onclick="excluirTarefa(this)">Excluir</button>
    `;
    lista.appendChild(novaTarefa);

    tarefaInput.value = "";
    atualizarBarraNivel();
}

function concluirTarefa(botao){
    var li = botao.parentElement;
    if(li.style.backgroundColor === 'green'){
        li.style.backgroundColor = '';
        botao.textContent = 'Em Andamento';
        tarefaConcluida--;
    } else {
        li.style.backgroundColor = 'green';
        botao.textContent = 'Concluída';
        tarefaConcluida++;
        if(tarefaConcluida >= tarefasPorNivel){
            subirDeNivel();
        }
    }
    atualizarBarraNivel();
}

function excluirTarefa(botao){
    var li = botao.parentElement;
    var ul = li.parentElement;
    ul.removeChild(li);
    if(li.style.backgroundColor === 'green'){
        tarefaConcluida--;
    }
    atualizarBarraNivel();
}

function subirDeNivel(){
    nivel++;
    tarefaConcluida = 0;
    alert("Parabéns! Você subiu para o nível " + nivel);
    atualizarBarraNivel();
}

function atualizarBarraNivel(){
    var barraNivel = document.getElementById("barraNivel");
    var nivelPreenchido = document.getElementById("nivelPreenchido");
    var nivelAtual = document.getElementById("nivelAtual");

    var progresso = (tarefaConcluida / tarefasPorNivel) * 100;
    nivelPreenchido.style.width = progresso + "%";
    nivelAtual.textContent = "Nível " + nivel;
}
