const escola = "Cod3r";

console.log(escola.charAt(3)); // Com a função "charAt" você traz o elemento da String posicionado no critério determinado, porém note que a contagem inicia de 0.
console.log(escola.charAt(7)); // Se você colocar um índice fora do tamanho da String, o retorno será em branco.

console.log(escola.charCodeAt(3)); // A função "charCodeAt" traz o resultado daquele caractere na tabela Unicode
console.log(escola.indexOf('d')); // "indexOf" serve para trazer qual a posição na String do elemento procurado, no exemplo "d" é o 3º elemento da String (0,1,2...)
console.log(escola.substring(2)); // Com a função "substring" você determina a partir de qual elemento da string quer que inicie a impressão
console.log(escola.substring(0,3)); // em uma variação de "substring" é possível escolher qual parte será impressa
console.log('Escola '.concat(escola).concat('!')); // A função "concat" serve para concatenação de informações
console.log('Escola ' + escola.concat('!')); 
/* Uma variação da função "concat" é o simbolo de adição e ambas podem trabalhar simultaneamente
 * Porém é preciso ficar atento caso a string seja um número ex:"3" + 2 o sistema não realizará a soma e sim a concatenação, mostrando o número 32
 */
console.log(escola.replace(3, "E")); // Com a função "replace" é possível substituir elementos da string por outros

// Macetezinho de Regex para substituir "d" (dígitos) "w" (letras) e todas as letras ou números com "g" (global)
console.log(escola.replace(/\d/, "E"));
console.log(escola.replace(/\w/, "E"));
console.log(escola.replace(/\w/g, "E"));

console.log("Ana,Maria,Pedro".split(",")) // Função "split" serve para você criar uma Array a partir de um caractere na String (função "texto x tabela do excel")