//EXERCICIO 1

const listaP = document.querySelectorAll('p')


const array = Array.prototype.reduce.call(listaP, ((acumulador, p)=>{
    return acumulador + p.innerText.length
}), 0)


console.log('total:',array)


// EXERCICIO 2 

function elementoDom(tag, classe, conteudo){
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerHTML = conteudo : null

    return elemento
}

console.log(elementoDom('ul', 'lista', '<li>item</li>'))


//EXERCICIO 3

const criarH1 = elementoDom.bind(null, 'h1', 'titulo')

console.log(criarH1('conteudo'))