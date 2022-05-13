/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
 * aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
 * aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
 * "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function aluno(codigo, nota1, nota2, nota3) {
    let mediaFinal = ((nota1 * 4 + nota2 * 3 + nota3 * 3) / 10).toFixed(2)
    if(mediaFinal >= 5){
        console.log(`Aluno código ${codigo} com as notas ${nota1}, ${nota2}, ${nota3} e média final ${mediaFinal} foi APROVADO`)
    } else {
        console.log(`Aluno código ${codigo} com as notas ${nota1}, ${nota2}, ${nota3} e média final ${mediaFinal} infelizmente foi REPROVADO`)
    }
}

aluno(15201126, 7.5, 5.2, 5.5)
aluno(15201119, 4.5, 3.5, 2.75)