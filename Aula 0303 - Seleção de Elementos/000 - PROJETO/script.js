// EXERCÍCIO 1

console.log(document.querySelectorAll('img'))

// EXERCÍCIO 2

console.log(document.querySelectorAll('img[src*="imagem"]'))
console.log(document.querySelectorAll('img[src^="img/imagem"]'))

//EXERCÍCIO 3

console.log(document.querySelectorAll('a[href^="#"]'))

//EXERCÍCIO 4

const animaisDescricao = document.querySelector('.animais-descricao')

console.log(animaisDescricao)
console.log(animaisDescricao.querySelector('h2'))

//EXERCÍCIO 5
const ps = document.querySelectorAll('p')

console.log(ps[--ps.length])

