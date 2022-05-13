/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
 * Plano Aumento
 * A 10%
 * B 15%
 * C 20%
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
 * novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function folhaSalarial (salario,plano){
    switch(plano){
        case "A":
            console.log(`Parabéns!! Seu salário foi reajustado para R$ ${salario*1.10}`)
            break
        case "B":
            console.log(`Parabéns!! Seu salário foi reajustado para R$ ${salario*1.15}`)
            break
        case "C":
            console.log(`Parabéns!! Seu salário foi reajustado para R$ ${salario*1.20}`)
            break
        default:
            console.log("Opção Não Disponível para Negociar Salário")
    }
}

folhaSalarial(1000,"A")
folhaSalarial(1000,"B")
folhaSalarial(1000,"C")
folhaSalarial(1000,"D")