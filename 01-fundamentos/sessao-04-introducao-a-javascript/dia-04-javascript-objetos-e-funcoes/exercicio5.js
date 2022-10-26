// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

function menorValor(array){
  let menorIndice = 0;
  for(let key in array){
    if(array[menorIndice] > array[key])
    menorIndice = key
  }
  return menorIndice
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))