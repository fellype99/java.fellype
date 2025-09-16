let feed = [];

document.getElementById("btnPostar").addEventListener("click", postar);

async function postar() {
  const texto = document.getElementById("texto").value;
  if (!texto) {
    alert("Digite algo antes de postar!");
    return;
  }

  // Pega imagem aleatória da API
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  let data = await response.json();
  let imagem = data[0].url;

  // Cria objeto da postagem
  let postagem = {
    usuario: "Fellype",
    avatar: "https://i.pravatar.cc/40",
    texto: texto,
    imagem: imagem,
    data: new Date().toLocaleString(),
    likes: 0
  };

  // Adiciona no início do array
  feed.unshift(postagem);

  // Atualiza interface
  renderizar();

  // Limpa textarea
  document.getElementById("texto").value = "";
}

function curtir(index) {
  feed[index].likes++;
  renderizar();
}

function renderizar() {
  const divFeed = document.getElementById("feed");
  divFeed.innerHTML = "";

  feed.forEach((post, index) => {
    divFeed.innerHTML += `
      <div class="post">
        <div class="header">
          <img src="${post.avatar}" class="avatar">
          <strong>${post.usuario}</strong> - <small>${post.data}</small>
        </div>
        <p>${post.texto}</p>
        <img src="${post.imagem}" class="img-post">
        <button onclick="curtir(${index})">Curtir (${post.likes})</button>
      </div>
    `;
  });
}