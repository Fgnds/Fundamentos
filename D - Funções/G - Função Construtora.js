/* Função Construtora é uma função que tem diversos atributos 
 * e serve como base para a construção de diversos outros objetos
 * a partir dela
*/

function carro(velocidadeMaxima = 200, delta = 5) { // "delta" é a graduação em que a velocidade irá progredir
    // "let" aqui é um atributo privado, interno da função
    let velocidadeAtual = 0
    // "this" é um método público, para ser acessado de fora da função "carro"
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // método público dentro da estrutura "carro"
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro //aqui não foram passados nenhum parametro, logo serão usados os originais da função
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20) // aqui já foram alterados os parametros e a função usará estes citados.
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

//aqui apenas uma brincadeira para fazer a ferrari chegar a velocidade máxima
for (velocidadeAtual = 0, velocidadeMaxima = 350, delta = 20; velocidadeAtual <= velocidadeMaxima; velocidadeAtual+=delta) {
    console.log(velocidadeAtual)
}