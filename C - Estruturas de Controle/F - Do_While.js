function rand(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

do {
    opcao = rand(-01, 15)
    console.log(`opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima')
/*
 * Diferente "while" o "do" é uma função que irá garantir ao menos uma vez a execução do laço, 
 * para então verificar se o critério foi atendido e sair do bloco
 * Neste caso, "do" permite que o critério inicial "opção" seja o valor buscado ou até mesmo, não haja valor
 * pois somente depois de executado ao menos uma vez o laço é que virá a verificação de "while"
*/