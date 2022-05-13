function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: "Celular S21",
    preco: 2999.21,
    desconto: 0.20,
    getPreco
}

console.log(produto.getPreco()) //este exemplo serve para mostrar a forma normal de invocar um item criado

const carro = { preco: 149990, desconto: 0.15 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
/* Olhando assim as duas funções, "apply" e "call" não possuem diferenças
 * Porém, é possível alterar os parâmetros do objeto através da invocação
 * e é aí que ambas se diferenciam, onde call aceita a definição apenas separando por virgulas
 * "apply" necessita da criação de uma array.
 */
console.log(getPreco.call(carro, desconto = 0.55, moeda = "$")) //alterei através da função call os parâmetros de imposto e moeda
console.log(getPreco.apply(carro, [0.17,"$"]))//alterei através da função apply os parâmetros de imposto e moeda
