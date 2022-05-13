//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

//Resposta:

function calcularOperacoes(a, b) {
    console.log(a + b, a - b, a * b, a / b)
}

calcularOperacoes(5, 10)

// Resposta pensada inicialmente
// A resposta chega no mesmo resultado, porém de uma forma muito mais extensa e engessada, 
// pois futuramente se eu precisar definir outros parâmetros para a mesma operação (soma, subtração, multiplicação e divisão)
// eu teria que novamente definir as variáveis, quando no modelo acima é apenas invocar a função "calcularOperacoes" e definir os parâmetros.

let a = 5
let b = 10

console.log(a+b)
console.log(a-b) 
console.log(a*b) 
console.log(a/b)