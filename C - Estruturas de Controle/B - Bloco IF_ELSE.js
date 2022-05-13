const imprimirResultado = function(nota) {
    if(nota>=7){
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }
}

imprimirResultado (8)
imprimirResultado (6.9)
imprimirResultado ('uepa!') //devido ao JS ser uma linguagem fracamente tipada, ao colocar uma string ali o sistema irá bater lá na validação e considerar "false" trazendo o resultado falso ("reprovado") no exemplo
imprimirResultado ('8') // o exemplo acima só funciona caso a string seja palavra