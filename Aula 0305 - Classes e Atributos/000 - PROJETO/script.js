// EXERCÍCIO 1

const itensMenu = document.querySelectorAll(".menu a")

console.log(itensMenu)

itensMenu.forEach((item) => {
    item.classList.add('ativo')
    console.log(item.classList)
})

console.log(itensMenu)

// EXERCÍCIO 2

itensMenu.forEach((item, index) => {
        item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')

console.log(itensMenu)

// EXERCÍCIO 3

const imgs = document.querySelectorAll("img")
imgs.forEach((item, index) => {
    if(item.hasAttribute("alt")){
        console.log("Tem alt")
    }else {
        console.log("Não tem alt")
    }
})

// EXERCÍCIO 4

const linkExterno = document.querySelector('.menu a[href^="http"]')

console.log(linkExterno)

linkExterno.setAttribute("href", "www.google.com")

console.log(linkExterno.attributes)