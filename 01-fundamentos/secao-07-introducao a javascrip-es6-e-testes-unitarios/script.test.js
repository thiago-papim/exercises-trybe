const { myRemove, myFizzBuzz, encode, decode } = require('./script');

describe('Exercicio 1', () => {
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

describe('Exercicio 2', () => {
    test('sendo num um número divisível por 3 e 5, retorne fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    test('sendo num um número divisível apenas por 3, retorne fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })
    test('sendo num um número divisível por 5, retorne buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    })
    test('sendo num um número não divisível por 3 e 5, retorna num', () => {
        expect(myFizzBuzz(7)).toBe(7)
    })
    test('sendo num naõ for number, retorne false', () => {
        expect(myFizzBuzz('3')).toBe(false)
    })
})

describe('Exercicio 3', () => {
    test('Teste se encode e decode são funções', () =>{
        expect(typeof(encode)).toBe('function'); 
        expect(typeof(decode)).toBe('function');
    })
    test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
    })
    test('Para a função decode,  teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
    })
    test('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('b, d, f, g, h')).not.toBe('1, 2, 3, 4, 5')
    })
    test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('palavra').length).toEqual(7)
    })
})