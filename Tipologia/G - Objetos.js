// Objetos serão sempre uma coleção de pares chave e valor

const produto1 = {}
produto1.nome = 'Celular Ultra Mega'
produto1.preco = 4998.90
produto1['Desconto Top'] = 0.40 // Evitar atributos com espaços

console.log(produto1)

// Existe também o modelo JSON para a criação de objetos em forma textual, serve para a comunicação entre sistemas