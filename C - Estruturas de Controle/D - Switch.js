/*
* Switch é um modelo de seleção multipla
* não é uma expressão relacional que retorna verdadeiro ou falso, você pode passar tipos e valores para ele
* por padrão é necessário usar o "break" para que ele saia do bloco, do contrário o switch executará todos os cases seguintes ao que ele validar
* "default" não precisa ser o último item
*/
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Laureado')
            break
        case 8:
        case 7:
        case 6:
            console.log("Aprovado")
            break
        case 5:
        case 4:
            console.log('Rec')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log("Nota Inválida")
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(10)
imprimirResultado(10)