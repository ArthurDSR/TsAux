let personagemSelecionado = null;
let divEquipamentos = document.getElementById("equipamentos");
let divPersonagem = document.getElementById("div-personagem");
let divOculos = document.getElementById("div-oculos");
let divJaleco = document.getElementById("div-jaleco");
let divLuva = document.getElementById("div-luva");
let oculosImg = document.getElementById("oculos");
let jalecoImg = document.getElementById("jaleco");
let luvaImg = document.getElementById("luva");
let personagemImg = document.getElementById("personagem");
let divSoprador = document.getElementById("div-soprador");
let sopradorImg = document.getElementById("soprador");
let divPlaca = document.getElementById("div-placa");
let placaImg = document.getElementById("placa");
let divAlicate = document.getElementById("div-alicate");
let alicateImg = document.getElementById("alicate");
let divTesoura = document.getElementById("div-tesoura");
let tesouraImg = document.getElementById("tesoura");
let botaoFase2 = document.getElementById("btnRedirect");
let sectionFerramenta = document.getElementById("fase1");

divJaleco.style.animation = "piscando-verde 2.5s infinite";
divJaleco.style.border = "2px solid transparent";

// Função para selecionar um personagem
function selecaoPersonagem(genero) {
  // Remove destaque dos personagens previamente selecionados
  document.getElementById("personagemF").classList.remove("selecionado");
  document.getElementById("personagemM").classList.remove("selecionado");

  // Destaque o personagem selecionado
  if (genero === "F") {
    personagemSelecionado = "feminino";
    document.getElementById("personagemF").classList.add("selecionado");
  } else if (genero === "M") {
    personagemSelecionado = "masculino";
    document.getElementById("personagemM").classList.add("selecionado");
  }

  // Torna visível o botão de continuar
  document.getElementById("btn-start").classList.remove("invisible");
}

// Função para salvar a seleção do personagem
function salvarSelecao() {
  if (personagemSelecionado) {
    // Lógica para redirecionar ou inicializar próxima etapa
    document.getElementById("seletor-personagem").classList.add("invisible");
    document.getElementById("fase-epi").classList.remove("invisible");

    // Atualiza a imagem do personagem na próxima fase
    divEquipamentos.style.display = "block";
    const personagemImg = document.getElementById("personagem");
    personagemImg.src =
      personagemSelecionado === "feminino"
        ? "../images/personagemF.png"
        : "../images/personagemM.png";
  } else {
    alert("Por favor, selecione um personagem antes de continuar.");
  }
}

// Eventos de dragstart nos equipamentos
divLuva.addEventListener("dragstart", (e) => {
  dragImg(e);
  e.dataTransfer.setData("draggedElement", "luva");
});

divJaleco.addEventListener("dragstart", (e) => {
  dragImg(e);
  e.dataTransfer.setData("draggedElement", "jaleco");
});

divOculos.addEventListener("dragstart", (e) => {
  dragImg(e);
  e.dataTransfer.setData("draggedElement", "oculos");
});

divSoprador.addEventListener("dragstart", (e) => {
  dragImg(e);
  e.dataTransfer.setData("draggedElement", "soprador");
});

divPlaca.addEventListener("dragstart", (e) => {
  dragImg(e);
  e.dataTransfer.setData("draggedElement", "placa");
});

divAlicate.addEventListener("dragstart", (e) => {
  dragImg(e);
  e.dataTransfer.setData("draggedElement", "alicate");
});

divTesoura.addEventListener("dragstart", (e) => {
  dragImg(e);
  e.dataTransfer.setData("draggedElement", "tesoura");
});

// Eventos de dragover nos containers de equipamentos (permitir o arrasto)
divLuva.addEventListener("dragover", (e) => {
  dragImg(e);
  e.preventDefault();
});

divJaleco.addEventListener("dragover", (e) => {
  dragImg(e);
  e.preventDefault();
});

divOculos.addEventListener("dragover", (e) => {
  dragImg(e);
  e.preventDefault();
});

divSoprador.addEventListener("dragover", (e) => {
  dragImg(e);
  e.preventDefault();
});

divAlicate.addEventListener("dragover", (e) => {
  dragImg(e);
  e.preventDefault();
});

// Evento de dragover no divPersonagem (permitir o drop)
divPersonagem.addEventListener("dragover", (e) => {
  e.preventDefault(); // Permite o drop
});

divPlaca.addEventListener("dragover", (e) => {
  dragImg(e);
  e.preventDefault();
});

divTesoura.addEventListener("dragover", (e) => {
  dragImg(e);
  e.preventDefault();
});

// Evento de drop no divPersonagem
divPersonagem.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggedElement = e.dataTransfer.getData("draggedElement");

  if (draggedElement == "oculos") {
    personagemImg.src = `../images/lab-virtual/lab-virtual/personagens/${personagemSelecionado}/personagem_jaleco_luva_oculos.png`;
    divOculos.style.animation = "";
    divOculos.style.border = "";
    divSoprador.style.animation = "piscando-verde 2.5s infinite";
    divSoprador.style.border = "2px solid transparent";
    divPlaca.style.animation = "piscando-verde 2.5s infinite";
    divPlaca.style.border = "2px solid transparent";
    divOculos.style.display = "none";
    divLuva.style.display = "none";
    divJaleco.style.display = "none";
    sectionFerramenta.style.display = "flex";
  } else if (draggedElement == "jaleco") {
    divJaleco.style.animation = "";
    divJaleco.style.border = "";
    divLuva.style.animation = "piscando-verde 2.5s infinite";
    divLuva.style.border = "2px solid transparent";
    personagemImg.src = `../images/lab-virtual/lab-virtual/personagens/${personagemSelecionado}/personagem_jaleco.png`;
    divJaleco.style.display = "none";
  } else if (draggedElement == "luva") {
    personagemImg.src = `../images/lab-virtual/lab-virtual/personagens/${personagemSelecionado}/personagem_jaleco_luva.png`;
    divLuva.style.animation = "";
    divLuva.style.border = "";
    divOculos.style.animation = "piscando-verde 2.5s infinite";
    divOculos.style.border = "2px solid transparent";
    divLuva.style.display = "none";
    divJaleco.style.display = "none";
  }
});

divPlaca.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggedElement = e.dataTransfer.getData("draggedElement");

  if (draggedElement === "soprador") {
    // Aplica o filtro para tornar a imagem vermelha
    placaImg.style.filter = "sepia(1) saturate(5) hue-rotate(-50deg)";
    divSoprador.style.animation = "";
    divSoprador.style.border = "";
    divAlicate.style.animation = "piscando-verde 2.5s infinite";
    divAlicate.style.border = "2px solid transparent";
  } else if (draggedElement === "alicate") {
    placaImg.src = `../images/lab-virtual/lab-virtual/placas/placa_nua.png`;
    placaImg.style.filter = "";
    placaImg.classList.add("placa-nua");
    divAlicate.style.animation = "";
    divAlicate.style.border = "";
    divTesoura.style.animation = "piscando-verde 2.5s infinite";
    divTesoura.style.border = "2px solid transparent";
  }
});

divTesoura.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggedElement = e.dataTransfer.getData("draggedElement");

  if (draggedElement === "placa" && placaImg.classList.contains("placa-nua")) {
    placaImg.src = `../images/lab-virtual/lab-virtual/placas/placa_cortada_verticalmente.png`;
    placaImg.classList.remove("placa-nua");
    placaImg.classList.add("placa-cortada");
  } else if (
    draggedElement === "placa" &&
    placaImg.classList.contains("placa-cortada")
  ) {
    placaImg.src = `../images/lab-virtual/lab-virtual/placas/placa_cortada_horizontalmente.png`;
    botaoFase2.style.display = "block";
    divPlaca.style.animation = "";
    divPlaca.style.border = "";
    divTesoura.style.animation = "";
    divTesoura.style.border = "";
    divAlicate.style.animation = "";
    divAlicate.style.border = "";
  }
});

// Função auxiliar para configurar o drag (evitar imagens padrão)
const dragImg = (e) => {
  const emptyImage = new Image();
  e.dataTransfer.setDragImage(emptyImage, 0, 0);
};
