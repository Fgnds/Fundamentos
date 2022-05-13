//Função é a presidente do país JavaScript
/*
 * Função é o verbo na receita de bolo "aqueça o forno a 180 graus"
 * Algoritmo é o fluxo grama de ações
 * Os Dados são os "ingredientes"
 */

console.log(typeof Object);

class produto { } // Qualquer classe que você criar, será uma função
console.log(typeof produto);

//Exemplo de função que recebe um dado e não retorna nada

function funcaoSemRetorno(a, b) {
    console.log(a + b)
}

funcaoSemRetorno(2, 3) // Você pode definir aqui os dois números a serem somados
funcaoSemRetorno(2) // se você pede dois elementos na função, mas coloca um só, ele considera o outro "undefined" e traz o erro "NaN"
funcaoSemRetorno(2, 3, 4, 5, 6, 7) // Neste exemplo com mais elementos do que o necessário na função, ele irá considerar apenas os dois primeiros elementos e ignorar o restante
funcaoSemRetorno() //se não fornecer nenhum parâmetro, também não gerará erro para o JavaScript

// Função com retorno

function funcaoComRetorno(a, b = 1) // Diferente do exemplo acima, onde você colocou na função o objeto "console.log", aqui o objeto da função é a ordem de retornar a soma e determinou um valor para "b"
{
    return (a + b)
}
// o que muda na prática?
console.log(funcaoComRetorno(2, 3)); //você pode determinar um valor para "a" e outro para "b"
console.log(funcaoComRetorno(2)); // ao determinar um valor para a variável na função, você pode colocar um valor apenas para "a" pois "b" já foi determinado na função
console.log(funcaoComRetorno()); // como no modelo acima, sem nada de valo, o JavaScript tbm não gera erro

// Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável

const soma = (a,b) => {
    return a + b
}
console.log (soma(2,3))

// Retorno Implícito

const soma2 = (a,b) => a+b
console.log(soma2(2,3))
// nestes últimos exemplos foram mostradas diferentes formas de se chegar ao mesmo resultado, porém melhorando a sintaxe
