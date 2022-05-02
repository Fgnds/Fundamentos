// uma forma de resolver é criando uma 3ª variável:
let a = 7;
let b = 94;

let temp = a // aqui o valor atribuído à "temp" foi o valo de "a" antes de "a" receber o comando para trocar de valor com "b"
a=b; // aqui "a" deixa de valer 7 e troca de valor com "b"
b=temp; // "b" recebe o novo valor, que por sua vez é o valor antigo de "a" que foi armazenado na variável "temp" antes de "a" trocar de valor.


console.log(a);
console.log(b);

// A forma  mais técnica para resolver é:

[a,b] = [b,a]
console.log(a);
console.log(b);
