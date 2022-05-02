const nome = "Jéssica"
const saudacao = "Olá "
const aviso = texto => texto.toUpperCase() 
console.log(saudacao + nome + "!") // Escrita em linha

/*
 *Escrita com quebras de linha através de uma constante que chama uma variável (neste caso sempre usar crase, que é o delimitador de um template string)
 *Para chamar a variável externa à constante, usar "${variável desejada}" 
 */

const quebralinha = `
Olá

${nome}

Tudo bem com você?`; 

console.log(quebralinha); 

//expressões

console.log(`1+1 é igual a ${1+1}`);

// ou

console.log(`Ei Jéssica...${aviso("cuidado")} !`)