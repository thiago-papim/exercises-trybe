const cabecalho = document.getElementById("header-container");
cabecalho.style.backgroundColor = "rgb(0, 176, 105)";

const urgente = document.querySelectorAll(".emergency-tasks")[0];
urgente.style.backgroundColor = "rgb(255, 159, 132)";

const urgenteTop = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < urgenteTop.length; index +=1 ){
  urgenteTop[index].style.backgroundColor = "rgb(165, 0, 243)"
}

const naoUrgente = document.querySelectorAll(".no-emergency-tasks")[0];
naoUrgente.style.backgroundColor = "rgb(249, 219, 94)";

const naoUrgenteTop = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < naoUrgenteTop.length; index +=1 ){
  naoUrgenteTop[index].style.backgroundColor = "rgb(35, 37, 37)"
}

const rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "rgb(0, 53, 51)"