const produtos = [
  {
    nome: "Tênis de Corrida",
    categoria: "Tênis",
    descricao: "Tênis leve e confortável ideal para correr e treinar.",
    preco: 299.9,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAh-suEQClHaCI0k6NPid4vj7FX1yBLHwzthFs2A7yxw&s=10",
  },
  {
    nome: "Bola de Futebol",
    categoria: "Bolas",
    descricao: "Bola oficial com boa aderência e resistência para treino.",
    preco: 149.9,
    imagem:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSMsQtAICuEOYC5WzGQ3fcr1nP8Rn29ZGQiv6108zMI16OwDXEek9aqKltvrhQEE_Ynw_zDPzWj5_yk4Z8OJpmg8IN-wfAw_11FUvHXgs8wAI-153XSwwHuiw",
  },
  {
    nome: "Bola de Basquete",
    categoria: "Bolas",
    descricao: "Bola de alto desempenho para quadra e prática esportiva.",
    preco: 179.9,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJVm4J9eti8JtNjA51We5tsNq25EYmfixuto9wfZgsA&s=10",
  },
  {
    nome: "Bola de Vôlei",
    categoria: "Bolas",
    descricao: "Bola macia e resistente para jogos recreativos e treinamentos.",
    preco: 129.0,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEWYHi3ZGXR_ZNtV7S2waGiA-8m7xdMnwQV5yh5Qipw&s=10",
  },
  {
    nome: "Tênis de Basquete",
    categoria: "Tênis",
    descricao: "Tênis com ótimo suporte e conforto para movimentos intensos.",
    preco: 349.9,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2_6rjWcz0wGMQxMDkaD184ksPnNzXlJemdAX90lvmw&s=10",
  },
  {
    nome: "Rede de Vôlei",
    categoria: "Acessórios",
    descricao: "Rede resistente para prática esportiva em casa ou na praia.",
    preco: 219.0,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqhXj-jrGkW4ewyKmzPIeJa1038xoZJqR89JSQShZlA&s=10",
  },
  {
    nome: "Chuteira de Futebol",
    categoria: "Calçados",
    descricao: "Chuteira leve e com boa tração para partidas e treinos.",
    preco: 259.9,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtFRmj8vAH9XoxciVT-XHmM3SuqnRw7Ko1BPTMn5kCg&s=10",
  },
  {
    nome: "Bola de Tênis",
    categoria: "Bolas",
    descricao: "Bola de tênis com ótimo desempenho para treino e prática.",
    preco: 99.9,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojUv9cyBdEUl_d5ee5FTgqSPx5C3anvkEiQPYf1kzPg&s=10",
  },
  {
    nome: "Mochila",
    categoria: "Acessórios",
    descricao:
      "Mochila prática para levar água, toalha e acessórios esportivos.",
    preco: 169.9,
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaHqPiLch_VgiHpUuXFfyAfcBVOJxVQMA6QaXu-uSBA&s=10",
  },
];

const listaProdutos = document.getElementById("listaProdutos");
const searchInput = document.getElementById("searchInput");

function mostrarProdutos(produtosFiltrados) {
  listaProdutos.innerHTML = "";

  if (produtosFiltrados.length === 0) {
    listaProdutos.innerHTML =
      '<p class="nenhum">Nenhum produto encontrado.</p>';
    return;
  }

  produtosFiltrados.forEach(function (produto) {
    const card = document.createElement("article");
    card.classList.add("produto");

    card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="imagem-produto">
            <h2>${produto.nome}</h2>
            <p class="categoria">${produto.categoria}</p>
            <p class="descricao">${produto.descricao}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
        `;

    listaProdutos.appendChild(card);
  });
}

function pesquisarProdutos() {
  const textoDigitado = searchInput.value.toLowerCase();

  const resultado = produtos.filter(function (produto) {
    const nome = produto.nome.toLowerCase();
    const descricao = produto.descricao.toLowerCase();
    const categoria = produto.categoria.toLowerCase();

    return (
      nome.includes(textoDigitado) ||
      descricao.includes(textoDigitado) ||
      categoria.includes(textoDigitado)
    );
  });

  mostrarProdutos(resultado);
}

searchInput.addEventListener("input", pesquisarProdutos);

mostrarProdutos(produtos);
