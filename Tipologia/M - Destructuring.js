const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}

// exemplo de destructuring que serve para extrair elementos de dentro de um objeto, de forma mais objetiva

const { nome, idade } = pessoa
console.log(nome, idade) // neste exemplo eu extraí da pessoa "Ana" seu nome e idade.

const { nome: n, idade: i } = pessoa
console.log(n,i) // aqui, eu escolho o dado a ser extraído e ainda posso alterar a nomenclatura da constante.
const {endereço: {logradouro, numero, cidade = "pindamonhagaba"} } = pessoa
console.log(logradouro, numero, cidade) 
/* também é possível acessar subníveis de informação da pessoa
 * como por exemplo o nome da rua e o número, que estavam em "endereço" assim como 
 * também é possível atribuir um valor e uma nova variável inexistente
 * Um destructuring também pode ser usado para Array's, o que determinará se ele
 * será usado em um objeto ou uma array, são os [] ou {} usados para criar o seu comando * 
 */

// Outros exemplos para brincar

function rand ([min = 01, max = 60]){
    if (min>max) [min,max] = [max,min] // nesta linha  o objetivo é apenas deixar os números de forma alinhada caso o mínimo sorteado seja maior que o máximo sorteado na ordem do sorteio
    const valor = Math.random () * (max-min)+min // aqui estou dando um range de atuação para a operação
    return Math.floor(valor) // o comando ".floor" faz com que seja arredondado para baixo o número (para arredondamento superior, usar ".ceil")
}

console.log(rand([05,10])); // Posso informar além do range inicial, um range secundário (no exemplo, número entre 5 e 10)
console.log(rand([58]));  // um start, quero números a partir de 58 (ele levará em consideração o máximo já definido no início da operação)
console.log(rand([,10]));// posso definir um teto, quero números abaixo de 10 (ele levará em consideração o mínimo já definido)
console.log(rand([])); // deixar em branco ele trará qualquer valor entre o mínimo e o máximo setado.
