// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindrono(palavra) {
  let word = palavra;
  let resultado = '';

  for (let i = word.length - 1; i >= 0; i -= 1) {
    resultado += palavra[i];
  }
  if(resultado == palavra){
    return true;
  } else {
    return false
  }
}
console.log(palindrono('subinoonibus'))