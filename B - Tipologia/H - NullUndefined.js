let valor // não inicializada, "undefined" é quando a variável não recebe um valor
console.log(valor); // Diferente de eu tentar buscar uma variável que não existe, ex.: console.log(valor2), o retorno será "is not defined"
valor = null; // ausência de valor, quando você desejar zerar uma variável, é boa prática utilizar "null"
console.log(valor);

const produto = {}
console.log(produto.preco)// Como exemplo aqui, é tentear acessar o preço de um produto que ainda não foi definido
console.log(produto) // como esperado, quando chamo o produto, ele traz um conjunto vazio, pois ainda não foi definido nada sobre o produto.
produto.preco = 3.50 //aqui defino um preço para o produto e chamo novamente.
console.log(produto)// agora o produto possui um atributo, o preço