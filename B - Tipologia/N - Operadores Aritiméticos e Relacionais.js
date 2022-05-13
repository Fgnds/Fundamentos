// Operadores Aritiméticos
const [a,b,c,d] = [2,4,6,8]

const soma = a+b+c+d
const subtracao = d-c-b-a
const multiplicacao = a*b
const divisao = d/a
const modulo = a%2 // módulo ele divide o valor por 2 e se ímpar ele retorna 1 e se par ele retorna 0
const potencia = a**3 // para elevar um número à potência é possível utilizar a função "math.pow" ou "**"

console.log('Operadores Aritiméticos:', soma, subtracao, multiplicacao, divisao, modulo, potencia);

// Operadores Relacionais - sempre retornam "true" ou "false"
console.log('Operadores Relacionais');
console.log('01)', '1' == 1); // "==" pergunta se os elementos são iguais
console.log('02)', '1' === 1); // "===" pergunta se os elementos são estritamente iguais ("estritamente" leva em consideração também o tipo do elemento, no caso aqui trata-se de uma string e um número)
console.log('03)', 2>3);
console.log('04)', 3<=2);
console.log('05)', 3!=2); //"!=" pergunta se os elementos são diferentes
console.log('06)', 3!==3);// "!==" estritamente diferentes