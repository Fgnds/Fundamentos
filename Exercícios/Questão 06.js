/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
*/

//Juro Simples

function juroSimples (capital, i, n){
    console.log('Valor total na operação de Juro Simples R$ ' + (capital +(capital*i*n)))
    console.log('Valor dos juros na operação de Juro Simples R$ ' + (capital*i*n))
}

juroSimples(10000,0.1,5)

// Juro Composto

function juroComposto (capital, i, n){
    console.log('Valor total na operação de Juros Compostos R$ ' + (capital +(capital*(1+i)**n)).toFixed(2))
    console.log('Valor dos juros na operação de Juros Compostos R$ ' + (capital*(1+i)**n).toFixed(2))
}

juroComposto(10000,0.1,5)