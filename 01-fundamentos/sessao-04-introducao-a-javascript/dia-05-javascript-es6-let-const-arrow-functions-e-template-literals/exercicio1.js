// Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

// Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

//  Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
 let pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa = {
  nome: 'Luna',
  idade: 19
} // Altere essa estrutura para corrigir o erro.
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);