const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const caixa1 = document.getElementById("tech");
const caixa2 = document.getElementById("second-li");
const caixa3 = document.getElementById("third-li");
const textoCaixa1 = document.getElementById("first-li")

caixa2.addEventListener("click", addTech1);
caixa3.addEventListener("click", addTech2);

function addTech1(){
  caixa2.className = "tech";
}
function addTech2(){
  caixa3.className = "tech";
}


// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

const inputTexto = document.querySelector("#input");

function alteraTexto () {
  textoCaixa1.innerText = inputTexto.value;
  }

inputTexto.addEventListener("change", alteraTexto)


// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

let top3 = document.getElementById('my-spotrybefy');
let link = "http://www.google.com"

function abreLink () {
  window.open(link, "_blank")
}

top3.addEventListener('dblclick', abreLink);

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

top3.addEventListener("mouseover", mouseEmCima);
top3.addEventListener("mouseleave", mouseFora);

function mouseEmCima(){
  top3.style.color = "green";
}

function mouseFora(){
  top3.style.color = "white";
}

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.