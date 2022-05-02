let isAtivo = true;
console.log(isAtivo);

//para testes
console.log("Os verdadeiros:");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(`
Falsos:`);
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(`
Aplicação:`);
console.log(!!(''|| 0 || null || "teste")); // Neste exemplo ele mostra que há um teste verdadeiro pois "||" é simbolo para "ou"
console.log(''|| 0 || null || "teste" || 123 ); // Neste exemplo ele traz o primeiro teste positivo pois foram retiradas as "!!" que fazem do código um teste lógico de verdadeiro ou falso

// Por exemplo, se você quer que o usuário preencha o nome no formulário, mas ele não preenceu

let nome = ''
console.log(nome || 'Desconhecido')