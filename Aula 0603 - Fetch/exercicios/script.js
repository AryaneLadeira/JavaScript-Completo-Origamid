// EXERCICIOS

const btncep = document.querySelector('.btncep')
const btnchuck = document.querySelector('.btnchuck')

function consultarCep(e){
    e.preventDefault()

    document.querySelector('.resultado').classList.add('active')
    const input = document.querySelector(".inputcep")
    const cep = input.value
    if(cep && cep != NaN){
        fetch('https://viacep.com.br/ws/'+cep+'/json')
        .then(res=>res.json()
        .then(body=>{
            changeAddress(body)
        })).catch((reject =>{
            window.alert('Um erro ocorreu!\n'+reject)
        }))
    }
}

function changeAddress(addressObj){
    searchDom('.logradouro').innerHTML = addressObj.logradouro
    searchDom('.complemento').innerHTML = addressObj.complemento
    searchDom('.bairro').innerHTML = addressObj.bairro
    searchDom('.localidade').innerHTML = addressObj.localidade
    searchDom('.uf').innerHTML = addressObj.uf
    searchDom('.ddd').innerHTML = addressObj.ddd
}


function searchDom(element){
    return document.querySelector(element)
}

btncep.addEventListener('click', consultarCep)


function gerarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res=>res.json()
    .then(body=>{
        searchDom('.container-piada').classList.add('active')
        searchDom('.piada').innerHTML = body.value
        const img = searchDom('.chuck-norris-img')
        img.setAttribute('src', body.icon_url)
        console.log(body)
    })
    )
}

btnchuck.addEventListener('click', gerarPiada)

function carregou(){
    consultarBitcoin()

    setInterval(()=>{
        consultarBitcoin()
    },900000)
}

function consultarBitcoin(){
    fetch('https://blockchain.info/ticker')
    .then(res=>res.json()
    .then(body=>{
        console.log(body)
        const preco = ""+body.BRL.buy
        const date = new Date().toLocaleDateString()
        const hour = new Date().getHours()
        const minutes = new Date().getMinutes()
        searchDom('.data-bitcoin').innerHTML = `${date} às ${hour}:${minutes}`
        searchDom('.preco-bitcoin').innerHTML = preco.replace('.', ',')
    }))
    .catch((rej=>{
        console.log("ERRO:"+rej)
    }))
}