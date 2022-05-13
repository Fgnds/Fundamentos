/* 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
 * possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
 * comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
 * que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
 * “Não trabalhamos com este tipo de automóvel aqui”.
*/

function revenda (veiculos){
    switch(veiculos){
        case 'Hatch':
            console.log("Parabéns, é uma excelente compra!")
            break
        case 'Sedan':
        case 'Motocicleta':
        case 'SUV':
            console.log("Tem certeza de que não prefere outro modelo?")
            break
        default:
            console.log("Desculpe, não trabalhamos com este tipo de veículo.")
    }
}

revenda('Sedan')
revenda('Motocicleta')
revenda('SUV')
revenda('Lancha')
revenda('Hatch')