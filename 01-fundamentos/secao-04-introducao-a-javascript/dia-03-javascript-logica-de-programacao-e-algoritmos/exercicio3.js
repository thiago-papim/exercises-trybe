// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = 'o'
let menor = 'oooooooooooooo'

for (let i = 0; i < array.length; i += 1) {
  if (maior.length < array[i].length)
    maior = array[i];
}
for (let i = 0; i < array.length; i += 1) {
  if (menor.length > array[i].length) {
    menor = array[i];
  }
}
console.log(maior);
console.log(menor);