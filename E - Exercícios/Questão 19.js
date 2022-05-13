/* 19) O cardápio de uma lanchonete é o seguinte:
 * Código Descrição do Produto Preço
 * 100 Cachorro Quente R$ 3,00
 * 200 Hambúrguer Simples R$ 4,00
 * 300 Cheeseburguer R$ 5,50
 * 400 Bauru R$ 7,50
 * 500 Refrigerante R$ 3,50
 * 600 Suco R$ 2,80
* Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
* a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
* comando switch. Crie um caso default para produto não existente.
*/
const cachorroQuente = 3.00
const hamburgerSimpels = 4.00
const cheesburger = 5.50
const bauru = 7.50
const refrigerante = 3.50
const suco = 2.80

function comanda(codigoDoItem, quantidade) {
    switch (codigoDoItem) {
        case 100:
            return`O seu pedido de Cachorro Quente é de R$ ${(quantidade * cachorroQuente).toFixed(2).toString().replace(".", ",")}`
            
        case 200:
            return`O seu pedido de Hambúrger Simples é de R$ ${(quantidade * hamburgerSimpels).toFixed(2).toString().replace(".", ",")}`
            
        case 300:
            return`O seu pedido de Cheeseburger é de R$ ${(quantidade * cheesburger).toFixed(2).toString().replace(".", ",")}`
            
        case 400:
            return`O seu pedido de Bauru é de R$ ${(quantidade * bauru).toFixed(2).toString().replace(".", ",")}`
            
        case 500:
            return`O seu pedido de Refrigerante é de R$ ${(quantidade * refrigerante).toFixed(2).toString().replace(".", ",")}`
            
        case 600:
            return`O seu pedido de Suco é de R$ ${(quantidade * suco).toFixed(2).toString().replace(".", ",")}`
            
        default:
            return'Item não registrado no cardápio'
    }
}
//eu estava usando o "break" na sequência, mas não preciso usar se usar o "return"
console.log(comanda(100, 4))
console.log(comanda(200, 2))
console.log(comanda(300, 2))
console.log(comanda(400, 4))
console.log(comanda(500, 10))
console.log(comanda(600, 2))
console.log(comanda(800, 4))