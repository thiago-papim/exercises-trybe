// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n

let n = 3;
let ast = ''

for(i = 1; i <= n; i += 1){
    ast += '*' 
}
for(i = 1; i <= n; i+= 1){
    console.log(ast);
}