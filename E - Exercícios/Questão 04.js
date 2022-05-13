/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
*/

//Resposta

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`) //Restante (Remainder - as vezes chamado de modulo)	
    //Retorna o resto da divisão em números inteiros do número da esquerda pelo número da direita.
    // no exemplo 11 % 5 (retorna 2; como cinco cabe duas vezes em 11, deixando 1 como resto.)
}

divisao(11, 5)

/* Resposta pensada inicialmente
 *
 * function divisão (dividendo, divisor){
 *    return console.log(divisão(dividendo/divisor))
 * }
 *
 * divisão(10,7)
 */