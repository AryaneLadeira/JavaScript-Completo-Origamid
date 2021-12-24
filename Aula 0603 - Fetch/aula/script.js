const cep = fetch('https://viacep.com.br/ws/01001000/json/')
const conteudo = document.querySelector('.conteudo')
cep.then(r => r.text())

.then((body)=>{
    conteudo.innerText = body
})


const css = fetch('./style.css')

css.then(r=> r.text())

.then((body)=>{
    const style = document.createElement('style')

    style.innerHTML = body
    conteudo.appendChild(style)
})


const html = fetch('./sobre.html')
html.then(r=>r.text())
.then((body)=>{
    const bodyhtml = document.createElement('div')

    bodyhtml.innerHTML = body

    conteudo.appendChild(bodyhtml)
})

const img = fetch('./img.png')
img.then(res=>res.blob())
.then((blob)=>{
    const blobUrl = URL.createObjectURL(blob)
    console.log(blobUrl)

    const img = document.createElement('img')

    img.setAttribute('src', blobUrl)

    conteudo.appendChild(img)
})