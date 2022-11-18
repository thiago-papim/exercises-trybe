// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const num1 = 10;
const num2 = 11;
const num3 = 20;
let result = false;

if (num1 % 2 > 0 || num2 % 2 > 0 || num3 % 2 > 0){
    result = true;
}
console.log(result);