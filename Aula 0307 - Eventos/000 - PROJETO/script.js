// EXERCÍCIO 1

const linksInternos = document.querySelectorAll('a[href^="#"')

function handleLinkInterno(event){
    event.preventDefault()
    linksInternos.forEach((item)=>{
        if(item.classList.contains = 'ativo'){
            item.classList.remove('ativo')
        }
    })
    event.currentTarget.classList.toggle('ativo')
    console.log(event.currentTarget.classList)
    console.log(linksInternos)
}

linksInternos.forEach((item) =>{
    item.addEventListener('click', handleLinkInterno)
})

// EXERCÍCIO 2

// function mostrarElemento(event){
//     console.log(event.target)
// }

// const elementos = document.querySelectorAll('body *')

// elementos.forEach((item)=>{
//     item.addEventListener('click', mostrarElemento)
// })


//EXERCÍCIO 3 

const elementos = document.querySelectorAll('body *')

function removerElemento(event){
    event.currentTarget.remove()
}

elementos.forEach((item)=>{
    item.addEventListener('click', removerElemento)
})

// EXERCÍCIO 4

function handleKeyBoard(event) {
    if(event.key === 't'){
        document.documentElement.classList.toggle('aumentada')
    }
}

window.addEventListener('keydown', handleKeyBoard)