let curtidas = [];

document.getElementById("btnCurtir").addEventListener("click", adicionarCurtida);

function adicionarCurtida() {
  const input = document.getElementById("inputNome");
  const nome = input.value.trim();

  if (nome !== "") {
    curtidas.push(nome);
    input.value = "";
    atualizarMensagem();
  }
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