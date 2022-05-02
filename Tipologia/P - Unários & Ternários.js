// Unários - Operações com apenas uma variável

let num1 = 6
++num1
console.log(num1)
--num1
console.log(num1)

// Ternários - Operações com 3 variáveis

const resultado = nota => nota>=7 ? "Aprovado" : "Reprovado" // esta função pode ser feita também com "if/else"

console.log(resultado(++num1))

console.log(resultado(--num1))