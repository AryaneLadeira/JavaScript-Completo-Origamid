 // EXERCÍCIO 1 // EXERCÍCIO 2

const paragrafos = document.querySelectorAll('p')

paragrafos.forEach((item, index) => {
    console.log(index, item.innerText)
})

 //EXERCÍCIO 3

 const imgs = document.querySelectorAll('img')

imgs.forEach((item, index) => {
    console.log(item, index)
})

 let i = 0

imgs.forEach( () => {
    console.log(i++)
})

imgs.forEach(() => i++)
