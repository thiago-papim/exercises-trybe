// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaDeXadrez = 'TorRe';

switch (pecaDeXadrez.toLowerCase()) {
    case 'rei':
        console.log('mover-se em qualquer direção, porém apenas uma casa por vez');
        break;
    case 'rainha':
        console.log('vertical, horizontal e diagonal');
        break;
    case 'bispo':
        console.log('vertical');
        break;
    case 'cavalo':
        console.log('duas casas em sentido horizontal e mais uma na vertical ou vice-versa');
        break;
    case 'torre':
        console.log('vertical e horizontal');
        break;
    case 'peao':
        console.log('vertical e horizontal, porém uma por vez');
        break;
    default:
        console.log('peça invalida')
}
