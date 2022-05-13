Number.prototype.entre = function (inicio, fim) {
    return this>= inicio && this <=fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log("Laureado")
    } else if (nota.entre(6, 8,99)) {
        console.log("Aprovado")
    } else if (nota.entre(4, 5,99)) {
        console.log("Recuperação")
    } else if (nota.entre (0, 3,99)) {
        console.log("Reprovado")
    } else { console.log('Nota Inválida')}
    
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(3)
imprimirResultado(11)
