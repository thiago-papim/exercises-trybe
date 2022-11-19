// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

const textP = document.getElementsByTagName("p")[1];

function alterarTextP(textoNovo) {
  textP.innerText = textoNovo;
}
alterarTextP("Alterando texto");

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

const quadrado = document.getElementsByClassName("main-content")[0];
quadrado.style.backgroundColor = "rgb(76, 164, 109)";

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

const vermelhoBranco = document.getElementsByClassName("center-content")[0];
vermelhoBranco.style.backgroundColor = "white";

// 4. Crie e execute uma função que corrija o texto da tag <h1>.

const correcao = document.getElementsByTagName("h1")[0];
correcao.innerText = "Exercício - JavaScript"

// 5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

const maiusculo = document.querySelector(".center-content p")

function letraMaiuscula () {
  maiusculo.innerText = maiusculo.innerText.toUpperCase()
}

letraMaiuscula()

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

const exibirP = document.getElementsByTagName("p");

function exibir() {
  for(let index = 0; index < exibirP.length; index += 1)
  console.log(exibirP[index].innerText)
}

exibir();
