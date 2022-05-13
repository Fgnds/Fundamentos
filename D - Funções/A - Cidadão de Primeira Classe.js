// Função em JS é First-Class Object (Citizens)
// Higher-Order Function

//Criar uma função de forma literal

function fun1(){} // No caso da função, o bloco sempre precisa aparecer

// Armazenar em uma variável
const fun2 = function() {}

// Armazenar em um Array

const array = [function(a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3)) // posso invocar a função pelo log

// Função é possível armazenar em um atributo de objeto

const obj = {}
obj.falar = function(){return "Opa"}
console.log(obj.falar())//lembrar sempre dos parenteses para ele invocar

// Função como parâmetro
function run (fun) {
    fun()
}
run(function (){console.log ("Executando...")})

// Uma função pode retornar/conter uma outra função

function soma (a,b){
    return function(c) {
        console.log(a+b+c)
    }
}
soma(2,3)(5)
//outra forma de invocar a mesma função
const cincoMais = soma(2,3)
cincoMais(5)