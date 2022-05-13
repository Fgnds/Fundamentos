function rand(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = rand(-01, 15)
    console.log(`opção escolhida foi ${opcao}`)
}

console.log('Até a próxima')
/*
 * "while" é um tipo de laço infinito
 * que se repete até atender o critério designado para sair do bloco.
 * Atenção - O Critério inicial no caso aqui "opção" não pode ser igual ao valor buscado pelo "while"
 * caso contrário ele já considerará o laço atendido 
*/