function soBoaNoticia(nota) {
    if (nota >= 70) {
        console.log('Aprovado abestado!')
    }
}


soBoaNoticia(81) // a função "if" - traz uma condicional "se", se a nota for = ou maior que 7 ele executará o restante do código
soBoaNoticia(55)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade esse bilete: ' + valor)
    }
}
/*
* note que neste exemplo, não foi determinada a condição para "if" determinar o que é verdadeiro ou falso
* logo ele assume "verdadeiro ou falso" para o valor se baseando em boolean
*/
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2,3])
seForVerdadeEuFalo({})