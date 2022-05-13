// Estratégias para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return (a + b + c)
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) //note que neste último exemplo há um bug, pois ele considera 0 como "falso" e sendo falso o sistema assume o valor padrão definido (que no caso foi 1)

// estratégia 2, 3 e 4  para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // "?" serve para "se não" - se "a" não for "undefined" seu valor é 1
    b = 1 in arguments ? b : 1 // esse é o método mais complexo
    c = isNaN(c) ? 1 : c // Dentre os métodos antigos, este é o mais seguro, pois verifica se a variável é um número (zero é um número)
    return (a + b + c)
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015 - que é o jeito mais moderno e objetivo de escrever o código
function soma3(a = 1, b = 1, c = 1){
    return (a+b+c)
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))