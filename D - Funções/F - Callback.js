//EXEMPLO COM "FOREACH"

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${++indice}, ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
/* "forEach" é um tipo de callback que retornará ao Array repetindo 
 * a operação até que todos os elementos tenham sido impressos
 * conforme o comando expresso na função "imprimir"
*/

//EXEMPLO COM "FILTER" - Onde o callback é do tipo que volta e filtra as informações designadas pela função
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8]

//exemplo sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log('Notas Baixas 1 - ', notasBaixas1)

// Exemplo com callback 1

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log('Notas Baixas 2 - ', notasBaixas2)

// Refinando o código
const notasBaixas3 = notas.filter(nota=> nota <7) 

console.log('Notas Baixas 3 - ', notasBaixas3)