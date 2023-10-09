function adicionartarefas(){
    var tarefa = document.getElementById("tarefa").value;
    var lista = document.getElementById("listaTarefas");
    var novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = `
    <span class="tarefa2">${tarefa}</span>
    <button onclick="concluirTarefa(this)">Concluir</button>
`;
    lista.appendChild(novaTarefa);


}