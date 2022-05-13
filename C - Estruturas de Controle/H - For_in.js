const numeros = [1,2,3,4]
/* neste exemplo a função "in" serve para percorrer todos os elementos da array 
 * e apresenta quantos elementos possuem
*/
for(let i in numeros) { 
    console.log('o elemento ', i, ' da array, corresponde um número ') 
    console.log('o número é o ', numeros[i]) // para saber qual é o número indexado à array, é necessário chamar
}

const pessoa = {
    nome: "Jéssica",
    sobrenome:"Cantini",
    altura:"1,70",
    peso: "55"
}
// Neste exemplo, usamos a função "in" para acessar os elementos de um objeto
for (let i in pessoa){
    console.log(i, pessoa[i])
}