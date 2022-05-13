// Exemplos de funções anônimas
const soma = function (x,y) {
    return x + y
}

const imprimirResultado = function(a,b, operacao = soma) {
    console.log(operacao(a,b)) // aqui conectamos as duas funções determinado que "operação" seja igual a "soma"
}

// aqui determinamos os critérios para a função
imprimirResultado(3,4)
imprimirResultado(3, 4, soma)
imprimirResultado(3,4, function(x,y){ //note que é possível colocar uma função dentro da chamada
    return x-y
})
imprimirResultado(3,4, (x,y) => x*y) //até mesmo uma função arrow


// neste exemplo colocamos uma função dentro de um objeto
const pessoa = {
    falar: function(){
        console.log('dale!')
    }
}

pessoa.falar()