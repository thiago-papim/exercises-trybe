// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// [2, 3, 6, 7, 10, 1]

// Valor esperado no retorno da função: 4.

function maiorNumero(array){
  let maior = 0;
  for (let key in array){
    if (array[maior] < array[key]){
      maior = key;
    }
  }
  return maior;

}
console.log(maiorNumero([2, 3, 6, 7, 10, 1]));