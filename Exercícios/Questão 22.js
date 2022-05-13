/* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
 * parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
 * anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
 * compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function mesQuitacao(mesPgto) {
    anuidade = 100
    juros = 0.05
    if (mesPgto > 0 && mesPgto < 13) {
        console.log(`Devido ao seu mês de pagamento a anuidade ficará em R$ ` + (anuidade*(1+juros)**(mesPgto-1)).toFixed(2))
    } else {
        console.log("Mês Inválido")
    }
}

mesQuitacao(1)
mesQuitacao(2)
mesQuitacao(3)
mesQuitacao(4)
mesQuitacao(5)
mesQuitacao(6)
mesQuitacao(7)
mesQuitacao(8)
mesQuitacao(9)
mesQuitacao(10)
mesQuitacao(11)
mesQuitacao(12)
mesQuitacao(20)