//EXERCICIO 1

{
    var cor = 'preto'
    const marca = 'Fiat'
    let portas = 4

    
}

console.log(cor, marca, portas)

//cor, marca e portas não estão no mesmo escopo, mas a var vaza


// EXERCICIO 2
const dois = 2

function somarDois(x){
    return x + dois 
}

function dividirDois(x){
    return x / dois
 
}
somarDois(4)
dividirDois(6)

// EXERCICIO 3

const numero = 50

for(let numero = 0; numero < 10; numero++){
    console.log(numero)
}

const total = 10 * numero;
console.log(total)