// Função Factory - Como o nome já diz, é uma função utilizada para criar objetos, bem similar ao conceito de Função Construtora, visto anteriormente.

//Factory simples
function criarPessoa() {
    return {
        Nome: 'Jéssica',
        Sobrenome: "Cantini"
    }
}

console.log(criarPessoa())

// Factory 2

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        deconto: 0.1
}
}

console.log(criarProduto("Notebook", 2199.99))
console.log(criarProduto("TV Smart 50'", 3899.99))
console.log(criarProduto("Celular S", 1998.99))