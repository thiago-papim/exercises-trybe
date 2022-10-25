// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let number = 10;

for(let i = number -1; i >= 1; i -= 1){
    number *= i;
}
console.log(number);