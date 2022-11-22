function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }
    return a + b;
}

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
    if (!characterInfo || characterInfo.personagem === undefined) {
      throw new Error('objeto inválido');
    }
    return ('Boas vindas, '+ characterInfo.personagem);
  };

module.exports = { sum, info, printMessage };

console.log(typeof(info));
console.log(info);