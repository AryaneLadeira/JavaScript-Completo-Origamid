// EXERCÍCIO 1

const primeiraImg = document.querySelector('img')
console.log(primeiraImg.offsetTop)

// EXERCÍCIO 2

window.onload = function() {
    somaLargura();
}

function somaLargura(){
    const imgs = document.querySelectorAll('img')
    let larguras = 0
    
    imgs.forEach(item => {
        larguras += item.offsetWidth
        console.log(larguras)
    });
    
    console.log("Soma total: "+larguras)
}

// EXERCÍCIO 3

    const links = document.querySelectorAll('a')

    links.forEach((item) => {
        if(item.offsetHeight > 48 && item.offsetWidth > 48){
            
            console.log(`Tem o mínimo de 48x48. Altura: ${item.offsetHeight} Largura: ${item.offsetWidth}`) 
        }
        else {
            console.log(`Não tem o mínimo de 48x48. Altura: ${item.offsetHeight} Largura: ${item.offsetWidth}`)
        }
    })

// EXERCÍCIO 4

const menu = document.querySelector('.menu')

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall){
    menu.classList.add('mobile')
}

console.log(menu.classList)

