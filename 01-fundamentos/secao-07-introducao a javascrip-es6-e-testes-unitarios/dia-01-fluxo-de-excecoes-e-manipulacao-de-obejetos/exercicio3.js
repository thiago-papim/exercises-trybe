// Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

let horario = 'turno';
const turno = 'noite'

const noturno = (objeto, novaKey, valor) => {
  objeto[novaKey] = valor;
}

noturno(lesson2, horario, turno);

// console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listaKeys (objeto) {
  // console.log(Object.keys(objeto));
}

listaKeys (lesson1);

// Crie uma função para mostrar o tamanho de um objeto.

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function listaValues (objeto) {
  // console.log(Object.values(objeto));
}

listaValues (lesson1);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons)

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function somaEstudante () {
  const turma1 = allLessons.lesson1.numeroEstudantes;
  const turma2 = allLessons.lesson2.numeroEstudantes;
  const turma3 = allLessons.lesson3.numeroEstudantes;
  return turma1 + turma2 + turma3
}

// console.log(somaEstudante());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

function valorChave (lesson, position) {
  return Object.values(lesson)[position]  
}

// console.log(valorChave(lesson1, 0));


// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo:

// function verificaPar () {

// }

function verificaPar (lesson, key, value) {
  const chaveValor = Object.entries(lesson);
  let result = false;
  for (let index in chaveValor){
    if (chaveValor[index][0] === key && chaveValor[index][1] === value)
    result = true;
  }
  return result
};

console.log(verificaPar(lesson1, 'materia', 'Matemática'));