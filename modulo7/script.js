let curtidas = [];

// Recuperar curtidas salvas no localStorage ao carregar a página
window.onload = () => {
  const armazenado = localStorage.getItem("curtidas");
  if (armazenado) {
    curtidas = JSON.parse(armazenado);
  }
  atualizarMensagem();
};

document.getElementById("btnCurtir").addEventListener("click", adicionarCurtida);
document.getElementById("btnLimpar").addEventListener("click", limparCurtidas);

function adicionarCurtida() {
  const input = document.getElementById("inputNome");
  const nome = input.value.trim();

  if (nome !== "" && !curtidas.includes(nome)) {
    curtidas.push(nome);
    salvarNoLocalStorage();
    input.value = "";
    atualizarMensagem();
  }
}

function limparCurtidas() {
  curtidas = [];
  localStorage.removeItem("curtidas");
  atualizarMensagem();
}

function salvarNoLocalStorage() {
  localStorage.setItem("curtidas", JSON.stringify(curtidas));
}

function atualizarMensagem() {
  const mensagem = document.getElementById("mensagem");

  if (curtidas.length === 0) {
    mensagem.textContent = "Ninguém curtiu";
  } else if (curtidas.length === 1) {
    mensagem.textContent = `${curtidas[0]} curtiu`;
  } else if (curtidas.length === 2) {
    mensagem.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } else {
    mensagem.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} pessoas curtiram`;
  }
}