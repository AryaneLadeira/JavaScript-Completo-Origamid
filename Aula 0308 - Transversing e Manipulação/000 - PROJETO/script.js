// EXERCÍCIO 1

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const menuDuplicado = menu.cloneNode(true)

copy.appendChild(menuDuplicado)


// EXERCÍCIO 2

const dl = document.querySelector('dl')

const primeirodt =  dl.children[0]

console.log(primeirodt)


// EXERCÍCIO 3

ddreferente = primeirodt.nextElementSibling

console.log(ddreferente)

// EXERCÍCIO 4 

const faq = document.querySelector('.faq')

const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML
