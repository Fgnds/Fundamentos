// Criando pessoa com classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome não é ${this.nome}`)
    }
}

const p1 = new Pessoa('Jhonny')
p1.falar()

// Criando pessoa com Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`pode me chamar de ${nome}`)
    }
}

const p2 = criarPessoa ('Jorge')
p2.falar()

/* Criando pessoa com Construtora
 * Possui estrutura similar a função "class", porém mais curta
*/

function outraPessoa (nome) { 
    this.nome = nome
        this.falar = function () {
            console.log(`Mas my name is ${this.nome}`)
        }
    }

const p3 = new outraPessoa ('Slim Shade')
p3.falar()