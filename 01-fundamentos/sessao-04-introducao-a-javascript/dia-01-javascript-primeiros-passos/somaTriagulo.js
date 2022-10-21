// Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo

const triang1 = 100;
const triang2 = 10;
const triang3 = 70;

if (triang1 + triang2 + triang3 == 180){
    console.log(true);
} else {
    console.log(false);
}
