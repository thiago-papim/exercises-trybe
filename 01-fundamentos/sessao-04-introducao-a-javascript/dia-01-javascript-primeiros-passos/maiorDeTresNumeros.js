// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const valor1 = 17;
const valor2 = 15;
const valor3 = 10;

if (valor1 > valor2 && valor1 > valor3){
    console.log(valor1);
}
else if (valor2 > valor3){
    console.log(valor2);
} else {
    console.log(valor3);
}