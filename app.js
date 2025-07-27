//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function participantes() {
  let nome = document.querySelector("input").value;
  if (nome == "") {
    alert("Por favor, insira um nome válido!");
  } else {
    nomes.push(nome);
    mostrarParticipantes();
    limparInput();
  }
}

function mostrarParticipantes() {
  let elementUl = document.getElementById("listaAmigos");
  let criaLi = document.createElement("li");
  elementUl.appendChild(criaLi);
  for (let i = 0; i < nomes.length; i++) {
    const element = nomes[i];
    criaLi.innerText = element;
  }
}

function limparInput() {
  let limpar = document.getElementById("amigo");
  limpar.value = "";
}

function adicionarAmigo() {
  participantes();
}

// Sortear Amigo
function sortearAmigo() {
  if (nomes.length == 0) {
    alert("A lista está vazia!!");
  } else {
    desabilitarUl();
    resultado();
    nomes = [];
  }
}

function escolhido() {
  let indice = parseInt(Math.random() * nomes.length);
  return indice;
}

function resultado() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo secreto sorteado é: ${nomes[escolhido()]}`;
}

function desabilitarUl() {
  let elementUl = document.getElementById("listaAmigos");
  elementUl.style.display = "none";
}
