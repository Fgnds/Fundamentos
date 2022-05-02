/* DIFERENÇA ENTRE VAR X LET
 * VAR - Escopo global e escopo de função
 * LET - Escopo global, de função e de bloco;
 */
let numero = 1
{
    let numero = 2
    console.log('Dentro =',numero)
}
console.log('Fora =', numero) // diferente do "var" o "let" respeita a hierarquia dos blocos, quando você refencia a variável em um "escopo menor ou profundo" ele prioriza aquela variável, caso não haja uma variável condizente ele vai "subindo o bloco" até encontrar a variável chamada

console.log('LET em loop')
/* usando a estrutura de controle "for"
 * que cria um looping de execução até que a condição pré definida seja atendida
 */ 

for (let i = 0; i <10; i++) 
/*
 * o "for" exige 3 condições 
 * 1ª é a declaração de uma variável (no exemplo, variável "i")
 * 2ª é a condição para o looping deixe de repetir (no exemplo, será até "i" atingi o valor de 10)
 * 3ª é o tamanho da evolução da contagem (no exemplo, "i" aumentará de valor de 1 em 1)
 */
{console.log(i)} //e por último, finaliza-se com um implemento

console.log("i é ",i) //no exemplo, ao buscar "i" fora do laço de looping, teremos o valor que "i" assumiria ao sair do laço, mas como foi utilizada a variável LET, ele retornou um erro, pois let delimita seu valor dentro do bloco