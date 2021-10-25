// EXERCICIO 1

var anos = [1959, 1962, 1970, 1994, 2002]


//EXERCICIO 2

anos.forEach(function(item){
    console.log(`O brasil ganhou a copa de ${item}`)
})


//EXERCICIO 3
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for(var i = 0; i< frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] == 'Pera'){
        break
    }
}

//EXERCICIO 4

var ultimaFruta = frutas[frutas.length-1]
console.log(ultimaFruta)

