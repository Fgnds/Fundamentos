const Peso1 = 1.0;
const Peso2 = 2.0;
const Peso3 = 7.7;

console.log(Peso1,Peso2,Peso3); // é possível imprimir todos os elementos apenas os separando por vírgula.

console.log(Peso1, Number.isInteger(Peso1,), Peso2, Number.isInteger(Peso2), Peso3, Number.isInteger(Peso3));
// com o comando "Number.isInteger" é possível saber se o número é inteiro


// EXERCÍCIO PARA OPERAÇÕES ENTRE VARIÁVEIS
const avaliacaoP1 = 9.83156;
const avaliacaoP2 = 5.124235;

const total = avaliacaoP1*Peso1 + avaliacaoP2*Peso2;
const media = total / (Peso1 + Peso2);

console.log(media.toFixed(2)); //"to.Fixed serve para definir o número de casas decimais após a vírgula"
console.log(Math.PI.toFixed(100)); // o ponto serve para invocar uma função ao item relacionado

console.log(media.toString()); //"to.String" serve para transformar o número em texto, note que o número de casas segue o original"
console.log(media.toFixed(2).toString()) // Neste exemplo combinei os comandos para a média sair com apenas 2 casas decimais
console.log(media.toString(2)); //"to.String (2)" com uma descrição de número no parenteses, transforma o número em binário

// Math é uma função (objeto), enquanto media é um número
console.log(typeof(media));
console.log(typeof(Math));

console.log(0.1+0.7) // tomar cuidado ao somar dois número com vírgula, pois o JS não arredonda
console.log((0.1+0.7).toFixed(2)); // exemplo de soma com arredondamento