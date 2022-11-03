// Comece criando algumas coisas:

// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;

const body = document.body;

const textoH1 = document.createElement("h1");
textoH1.innerText = "Exercício - JavaScript DOM";
body.appendChild(textoH1);

// Adicione a tag main com a classe main-content como filho da tag body;

const main = document.createElement("main");
main.className = "main-content"
body.appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const centerContent = document.createElement("section");
centerContent.className = "center-content";
main.appendChild(centerContent);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const texto1 = document.createElement("p");
centerContent.appendChild(texto1);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const leftContent = document.createElement("section");
leftContent.className = "left-content";
main.appendChild(leftContent);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const rigthContent = document.createElement("section");
rigthContent.className = "rigth-content";
main.appendChild(rigthContent);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const imagem1 = document.createElement("img");
imagem1.className = "small-image";
imagem1.src = "https://picsum.photos/200"
leftContent.appendChild(imagem1);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const listaNaoOrdenada = document.createElement("ul");
rigthContent.appendChild(listaNaoOrdenada);
let arrayLista = ["um", "dois", "tres", 'quatro', "cinco", "seis", "sete", "oito", "nove", "dez"];
for (let index = 0; index < arrayLista.length; index += 1){
  listaNaoOrdenada.createElement("li")
}

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

console.log(body);