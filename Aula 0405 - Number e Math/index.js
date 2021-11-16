// EXERCÍCIO 1

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050

console.log(aleatorio)


// EXERCICIO 2

const numeros = '4, 5, 20, 8, 9'

const numerosArray = numeros.split(', ')

const numeroMaximo = Math.max(...numerosArray)
console.log(numeroMaximo)


// EXERCICIO 3

function limparPreco(preco){
    let precoLimpo = +preco.toLowerCase().replace(',', '.').replace('r$ ', '').trim()
    precoLimpo = +precoLimpo.toFixed(2)
    console.log(precoLimpo)
    return precoLimpo
}

const listaPrecos = ['R$ 59,99','R$ 100,222', 'R$ 230', 'r$  200']

let somaTotal = 0
listaPrecos.forEach((item)=>{
    somaTotal += limparPreco(item)
})


console.log("Soma total: "+ somaTotal)