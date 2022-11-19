// // Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [6, 10, 4, 20, 70, 72, 10, 28, 30, 20];
let nImpar = 0;

for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        nImpar += 1;
    }
}

if (nImpar == 0){
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log('Numeros impares = ' + nImpar);
}