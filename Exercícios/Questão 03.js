//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

//Resposta:
function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))

// Resposta pensada inicialmente

/*function elevar(a){ - faltou definir os critérios
 *   console.log(Math.pow(elevar,2)) - aqui para baixo tudo errado
 *}
 *
 * elevar(2)
*/

//Refazendo porque ficou muito errado 

function elevar (base, expoente){
    let resultado = math.pow (base,expoente)
    resultado = base ** expoente
    return resultado
}

console.log(expoente(5, 2))