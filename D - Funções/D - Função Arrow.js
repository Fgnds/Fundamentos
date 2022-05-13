let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

console.log(dobro(5))

//exemplo de função sem parametro, para sintaxe mais objetiva

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // este é o exemplo mais enxuto de sintaxe, porém note que "_" é considerado um parâmetro, mas o JS permite

console.log(ola())