// EXERCICIO 1
// setInterval(()=>{
//     changeColor()
// },2000)

// function changeColor(){
//     document.body.classList.toggle('vermelho')
// }

// EXERCICIO 2 

const btnPlay = document.querySelector('[data-button="play"]')
const btnPause = document.querySelector('[data-button="pause"]')
const cronometro = document.querySelector('[data-tempo]')
let interval


console.log(document.body.classList)
btnPlay.addEventListener('click', iniciarContagem)
btnPause.addEventListener('click', pararContagem)
btnPause.addEventListener('dblclick', resetarContagem)


function iniciarContagem(){
    cronometro.innerHTML = 1
    let i = 2
    interval = setInterval(()=>{
        cronometro.innerHTML = i
        i++
    },1000)
}

function pararContagem(){
    clearInterval(interval)
}

function resetarContagem(){
    cronometro.innerHTML = 0
}