// Acesse o elemento elementoOndeVoceEsta.

const ondeEsta = document.getElementById("elementoOndeVoceEsta");

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = ondeEsta.parentElement;
pai.style.color = "red"

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const filhoPrimeiroPrimeiro = document.getElementById("primeiroFilhoDoFilho");
filhoPrimeiroPrimeiro.innerText = "Texto";

// Acesse o primeiroFilho a partir de pai.

console.log(pai.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(ondeEsta.previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(ondeEsta.parentElement.innerText);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(ondeEsta.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.

console.log(pai.lastElementChild.previousElementSibling);

// Crie um irmão para elementoOndeVoceEsta.

const irmaoOndeVoceEsta = document.createElement("section");

irmaoOndeVoceEsta.tagName = 'irmaoElementoOndeVoceEsta';

const textoIrmao = document.createElement("p");

textoIrmao.innerText = "Testando";

irmaoOndeVoceEsta.appendChild(textoIrmao);

pai.appendChild(irmaoOndeVoceEsta);

console.log(document);

// Crie um filho para elementoOndeVoceEsta.

const filhoElementoOnde = document.createElement("div");

ondeEsta.appendChild(filhoElementoOnde);

// Crie um filho para primeiroFilhoDoFilho.

const filho3geracao = document.createElement("span");

filhoPrimeiroPrimeiro.appendChild(filho3geracao);

// A partir desse filho criado, acesse terceiroFilho.

const filhoTerceiro = filho3geracao.parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling;
