// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const maiorPalavra = (frase) => {
  const palavra = frase.split(' ');
  let maiorPalavra = 0;
  let resultado = '';


  for (let index of palavra){
    if (index.length > maiorPalavra){
      maiorPalavra = index.length;
      resultado = index;
    }
  }
  return resultado;
}
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))