function soma () {
    let soma = 0
    for (i in arguments) { //"arguments" é um recurso que cria uma "array" dentro da função e ela não precisa estar exressa
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1,2,3))
console.log(soma(1))
console.log(soma(10,9,8,7,6,5,4,3,2,1,0))
console.log(soma('a', 'b', 'c')) //este exemplo é apenas para mostrar que ele concatena em caso de "somar" strings