/* IIFE - Immediately Invoked Function Expression
 * Serve para invocar funções de forma imediata e isoladas do escopo global
 * com os () você "protege" a função do restante do código.
 */
(function(){
    console.log("Note o parenteses envolvendo a função desde o início")
    console.log('isso faz com que ela seja executada de forma imediata')
    console.log('sem ligação com o restante do projeto, permitindo criar diversas questões internas')
})
() //preciso chamar a função para que ela seja executada.