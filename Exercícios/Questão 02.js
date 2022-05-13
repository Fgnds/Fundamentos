/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
*/

//Resposta:
function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

/* Resposta pensada inicialmente
 * function classificarTriangulo(lado1, lado2, lado3) {
 * if (lado1 && lado2 == lado3) { - Aqui coloquei apenas lado 1 e 2 iguais ao lado 3 e não lado 1 igual ao 2 que é igual ao 3
 *    return 'Equilátero'
 *  } else (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){ - Aqui não adicionei a função "if" para dar continuidade ao chicote
 *  //    return 'Isóceles'
 *   //} else (lado1 != lado 2 && lado2 != lado3 && lado1 != lado3){
 *   //    return "Escaleno" // comentei estas duas linhas para demonstrar como foi pensado inicialmente, porém para "else" eu não preciso colocar critério algum, pois o critério já foi validado nas funções "if"
 *   }
 *}
 *console.log(classificarTriangulo(1,2,3))
 *console.log(classificarTriangulo(2,1,2))
 *console.log(classificarTriangulo(3,3,3))
 */