// EXERCICIO 1

function verificarTipo(dado){
    let tipo = Object.prototype.toString.call(dado)
    return tipo.replace('[object','').replace(']','').trim()
}

console.log(verificarTipo([]))


// EXERCICIO 2

const quadrado = {
    
}

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true,
    }
})

console.log(quadrado)


// EXERCICIO 3

const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao)


// EXERCICIO 4
console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))
