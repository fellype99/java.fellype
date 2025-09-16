// Recupera do localStorage ou cria um array vazio
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const input = document.getElementById("novaTarefa");
const btnAdicionar = document.getElementById("adicionarBtn");
const lista = document.getElementById("listaTarefas");

// Função para salvar no localStorage
function salvarLocalStorage() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Função para renderizar as tarefas na tela
function renderizarTarefas() {
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;
    checkbox.addEventListener("change", () => {
      tarefas[index].status = checkbox.checked;
      salvarLocalStorage();
      renderizarTarefas();
    });

    // Texto da tarefa
    const span = document.createElement("span");
    span.textContent = tarefa.descricao;
    if (tarefa.status) {
      span.classList.add("concluida");
    }

    // Botão excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", () => {
      tarefas.splice(index, 1);
      salvarLocalStorage();
      renderizarTarefas();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnExcluir);

    lista.appendChild(li);
  });
}

// Adicionar nova tarefa
btnAdicionar.addEventListener("click", () => {
  const descricao = input.value.trim();
  if (descricao) {
    tarefas.push({ descricao: descricao, status: false });
    salvarLocalStorage();
    renderizarTarefas();
    input.value = "";
  }
});

// Renderizar ao carregar a página
renderizarTarefas();