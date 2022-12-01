const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.

const ex1 = books.filter((element) => {
  if ( element.genre === 'Ficção Científica' || element.genre === 'Fantasia'){
    return element.genre;
  }
  return undefined;
});

// 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

const ex2 = books.filter((element) => 2022 - element.releaseYear > 60 ? element.genre : undefined)
  .sort((a, b) => a.releaseYear > b.releaseYear ? 1 : -1);

// console.log(ex2);

// 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const booksByAuthorBirthYear = (birthYear) => {
  // Método 1:

  const metodo1 = books.filter((element) => (element.author.birthYear === birthYear))
    .map((element) => `${element.name}`);

  // Método 2:

  const novo = books.filter((element) => element.author.birthYear === birthYear);
  const metodo2 = novo.map((element) => `${element.name}`)

  return metodo1;
}

// console.log(booksByAuthorBirthYear(1920));

// 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

const nomesCientificos = books.map((element) => element.author.name).sort();

// console.log(nomesCientificos);

// 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = (biblioteca) => {
  return biblioteca
  .filter((element) => 2022 - element.releaseYear > 60)
  .map((element) => element.name);
}

// console.log(oldBooks(books));

// 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

const authorWith3DotsOnName = (biblioteca) => {
  const nome = biblioteca
  .map((element) => element.author.name ).find((element) => element[1, 4, 7] === '.')
  return biblioteca.filter((element) => element.author.name === nome ? element : undefined).map((element) => element.name).toString();
};

// console.log(authorWith3DotsOnName(books));