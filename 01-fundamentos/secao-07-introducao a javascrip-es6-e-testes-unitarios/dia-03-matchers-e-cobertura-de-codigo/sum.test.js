const { sum, info, printMessage } = require('./sum')

describe('Teste function sum', () => {
    test('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    test('Teste se o retorno de sum(0, 0) é 0.', () => {
        expect(sum(0, 0)).toBe(0);
    })
    test('Teste se a função sum lança um erro quando os parâmetros são number 4 e string 5', () => {
        expect(() => { sum() }).toThrow();
    })
    test('Teste se a função sum lança um erro quando os parâmetros são number 4 e string 5', () => {
        expect(() => { sum() }).toThrow(new Error('parameters must be numbers'));
    })
})

describe('Teste function printMessage', () => {
    test('Teste que verifica o objeto passado como parâmetro possui a propriedade personagem', () => {
        expect(info).toHaveProperty('personagem');
    })
    test('Verifique se a resposta contém a informação Boas vindas,, antes de chamar o nome da personagem', () => {
        const mensagem = printMessage(info);
        expect(mensagem).toMatch('Boas vindas');
    })
})