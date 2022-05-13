const valores = [7.7 , 8.9 , 6.3 , 9.2];
console.log(valores[0], valores[3], valores[4]);

valores[4] = 10;
console.log(valores[0], valores[3], valores[4]);
/* Uma array é como se fosse um banco de dados, que separados por virgulas, permitem que sejam buscados por forma de índice (iniciando do 0, 1, 2...)
 * Como exemplo, pedimos para imprimir os itens 0,3 e 4, como no primeiro momento não havia um item 4 ele trouxe "undefined"
 * Ao definir o item 4 e repetir o comando, o mesmo já vem completo
*/
console.log(valores.length) // o comando ".length" apresenta quantos itens existem dentro de uma Array

// o comando ".push" adiciona itens à uma array
valores.push({id: 3}, false, null, 'só alegria');
console.log(valores);

// Maneiras de se retirar um item da arrei
console.log(valores.pop()) //neste comando ele imprime apenas o último elemento
delete valores[0] // neste comando ele elimina o item conforme o índice determinado
console.log(valores)

console.log(typeof(valores))