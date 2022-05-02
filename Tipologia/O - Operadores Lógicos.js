/*
 * V e V -> V
 * V e F -> F
 * F e ? -> F
 * - DISJUNÇÃO INCLUSIVA (PERMITE MAIS DE UM RESULTADO VERDADEIRO)
 * V ou ? -> V
 * F ou V -> V
 * F ou F -> F
 * - DISJUNÇÃO EXCLUSIVA (PERMITE APENAS UM RESULTADO VERDADEIRO EX.: Promessa de presente da mãe)
 * V xor V -> F
 * V xor F -> V
 * F xor V -> V
 * F xor F -> F
 *  - NEGAÇÃO LÓGICA
 * !V -> F
 * !F -> V
*/

function compras (trab1, trab2) {
    const comprarSorvete = trab1 || trab2 // operador "ou" ||
    const comprarTv50 = trab1 && trab2 // operador "e" &&
  //const comprarTv32 = !!(trab1 || trab2) // operador "ou exclusivo" é um bitwise porque em JS não existe "xor"
    const comprarTv32 = trab1 != trab2 // Diferença "!=" também pode ser usado como "ou exclusivo"
    const manterSaudavel = !comprarSorvete //operador unário
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log (compras(true, true))
console.log (compras(true, false))
console.log (compras(false, true))
console.log (compras(false, false))