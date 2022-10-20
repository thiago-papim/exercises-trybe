// Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)


// const a = 10;
// const b = 4;

// let adicao = a + b;
// let subtracao = a - b;
// let mult = a * b;
// let divsao = a / b;
// let modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(mult);
// console.log(divsao);
// console.log(modulo);


// Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// const valor1 = 7;
// const valor2 = 5;

// if (valor1 > valor2){
//     console.log(valor1);
// }
// else {
//     console.log(valor2)
// }

// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// const valor1 = 17;
// const valor2 = 15;
// const valor3 = 10;

// if (valor1 > valor2 && valor1 > valor3){
//     console.log(valor1);
// }
// else if (valor2 > valor3){
//     console.log(valor2);
// } else {
//     console.log(valor3);
// }

// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// let number = 0;

// if (number > 0){
//     console.log('positive');
// } 
// else if (number < 0){
//     console.log('negative');
// } else {
//     console.log('zero');
// }

// Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo

// const triang1 = 100;
// const triang2 = 10;
// const triang3 = 70;

// if (triang1 + triang2 + triang3 == 180){
//     console.log(true);
// } else {
//     console.log(false);
// }

// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

// let pecaDeXadrez = 'TorRe';

// switch (pecaDeXadrez.toLowerCase()) {
//     case 'rei':
//         console.log('mover-se em qualquer direção, porém apenas uma casa por vez');
//         break;
//     case 'rainha':
//         console.log('vertical, horizontal e diagonal');
//         break;
//     case 'bispo':
//         console.log('vertical');
//         break;
//     case 'cavalo':
//         console.log('duas casas em sentido horizontal e mais uma na vertical ou vice-versa');
//         break;
//     case 'torre':
//         console.log('vertical e horizontal');
//         break;
//     case 'peao':
//         console.log('vertical e horizontal, porém uma por vez');
//         break;
//     default:
//         console.log('peça invalida')
// }

// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// let nota = -50;

// if (nota >= 90 && nota <= 100){
//     console.log('Nota A');
// }
// else if (nota >= 80 && nota < 90){
//     console.log ('Nota B');
// }
// else if (nota >= 70 && nota < 80){
//     console.log ('Nota C');
// }
// else if (nota >= 60 && nota < 70){
//     console.log ('Nota D');
// }
// else if (nota >= 50 && nota < 60){
//     console.log ('Nota E');
// }
// else if (nota >= 0 && nota < 50){
//     console.log ('Nota F');
// }
// else {
//     console.log("Erro, tente novamente")
// }

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const num1 = 10;
// const num2 = 11;
// const num3 = 21;
// let result = false;

// if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
//     result = true;
// }
// console.log(result);

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const num1 = 10;
// const num2 = 11;
// const num3 = 20;
// let result = false;

// if (num1 % 2 > 0 || num2 % 2 > 0 || num3 % 2 > 0){
//     result = true;
// }
// console.log(result);

// Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

const custo = 100;
const venda = 145;

let imposto = custo * 0.2;
let valorCusto = custo + imposto;
let lucro = venda - valorCusto;
console.log(lucro * 1000);