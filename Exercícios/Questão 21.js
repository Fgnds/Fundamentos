/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
 * considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
 * de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
 * idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function valorPlano(idadeBeneficiário){
    if (idadeBeneficiário <= 10){
        console.log(`Beneficiário criança, valor do plano R$ 180,00 por mês`)
    } else if (idadeBeneficiário <= 30) {
        console.log(`Beneficiário jovem, valor do plano R$ 150,00 por mês`)
    } else if (idadeBeneficiário <= 60){
        console.log(`Beneficiário regular, valor do plano R$ 195,00 por mês`)
    } else if (idadeBeneficiário > 60){
        console.log(`Beneficiário idoso, valor do plano R$ 230,00 por mês`)
    } else {
        console.log("idade não identificada")
    }
}
    valorPlano(8)
    valorPlano(15)
    valorPlano(35)
    valorPlano(52)
    valorPlano(80)
    valorPlano('d')