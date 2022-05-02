{//blocos
    {//fakes
        {// para exemplos
            {
                var sera = 'A variável "var" é identificada de forma global, sem distinção de bloco (como neste exemplo, que ela se encontra em um bloco aleatório)'
            }
        }
    }
}
console.log(sera);

function teste () {
    var local = 'A única situação em que "var" não é global, é dentro de uma função, se você a chamar de fora da função, ela não retornará'
    console.log(local)
}

teste()

 console.log('VAR em loop')
/* usando a estrutura de controle "for"
 * que cria um looping de execução até que a condição pré definida seja atendida
 */ 

for (var i = 0; i <10; i++) 
/*
 * o "for" exige 3 condições 
 * 1ª é a declaração de uma variável (no exemplo, variável "i")
 * 2ª é a condição para o looping deixe de repetir (no exemplo, será até "i" atingi o valor de 10)
 * 3ª é o tamanho da evolução da contagem (no exemplo, "i" aumentará de valor de 1 em 1)
 */
{console.log(i)} //e por último, finaliza-se com um implemento

console.log("i é ",i) //no exemplo, ao buscar "i" fora do laço de looping, teremos o valor que "i" assumiria ao sair do laço

