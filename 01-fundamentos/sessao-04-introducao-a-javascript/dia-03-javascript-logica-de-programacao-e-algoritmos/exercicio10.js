// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let number = 18;
let result = true;

for(let i=0; i <= number; i += 1){
    if (number % number[i] === 0 && number % i == 0){
        console.log('é numero primo')
    } else {
        console.log('nao e primo')
    }
}