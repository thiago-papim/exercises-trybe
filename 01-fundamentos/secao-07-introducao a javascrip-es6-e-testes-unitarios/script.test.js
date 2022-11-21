const { myRemove, myFizzBuzz, mapString} = require('./script');

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

// describe('Exercicio 3', () => {
//     test('Teste se encode e decode são funções', () => {
//         expect(mapString(typeof).toBe('function'));
//     })
// })