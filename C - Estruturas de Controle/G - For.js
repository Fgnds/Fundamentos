//aqui vamos tentar simular um while de repetições controladas
let numero = 1
while (numero <= 3) {
    console.log(`O número é ${numero}`)
    numero++
}

/* Porém, utilizando-se dos mesmos elementos informados no "while" 
 * é possível criar um laço "for" com uma sintaxe mais otimizada
 * ELEMENTOS DE UM LAÇO "FOR"
 * CONTADOR - Variável que irá controlar o laço
 * EXPRESSÃO - Que determinará até quando o laço se repete
 * INCREMENTO - Cadência em que o controlador irá aumentar
*/

for (let i = 1; i <= 3; i++) {
    console.log(`i é ${i}`)
}

/* Neste exemplo criaremos um laço "for"
 * que acessa todos os elementos de uma array
*/

const contagemRegressiva = [3, 2, 1, 0]
for(let i = 0; i < contagemRegressiva.length; i++) {
    console.log(`Regressiva ${contagemRegressiva[i]}`)
}
