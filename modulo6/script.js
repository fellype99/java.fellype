let tarefas = [];

document.getElementById("btnAdicionar").addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
  const input = document.getElementById("inputTarefa");
  const descricao = input.value.trim();
  
  if (descricao !== "") {
    tarefas.push({ descricao: descricao, status: false });
    input.value = "";
    renderizarLista();
  }
}

function alternarStatus(index) {
  tarefas[index].status = !tarefas[index].status;
  renderizarLista();
}

function renderizarLista() {
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";
  
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;
    checkbox.onchange = () => alternarStatus(index);
    
    const span = document.createElement("span");
    span.textContent = tarefa.descricao;
    span.className = tarefa.status ? "concluida" : "nao-concluida";
    
    li.appendChild(checkbox);
    li.appendChild(span);
    lista.appendChild(li);
  });
}