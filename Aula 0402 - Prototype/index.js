// function Pessoa(nome, idade){
//     this.nome = nome
//     this.idade = idade
// }

// Pessoa.prototype.andar = function(){
//     console.log(this.nome + " andou")
// }

// const pedro = new Pessoa('pedro', 23)

// EXERCICIOS

// EXERCICIO 1

function Pessoas(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoas.prototype.nomeCompleto= function(){
    return `${this.nome} ${this.sobrenome}`
}

const joao = new Pessoas('joao', 'jose', 25)
console.log(joao.nomeCompleto())

// EXERCICIO 2

console.log(Object.getOwnPropertyNames(NodeList))
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document))
console.log(Object.getOwnPropertyNames(Document.prototype))

// EXERCICIO 3

const li = document.querySelector('li')

console.log(li.constructor.name) //HTMLLIElement
console.log(li.click.constructor.name) //Function
console.log(li.innerText.constructor.name) //String
console.log(li.value.constructor.name) //Number
console.log(li.hidden.constructor.name) //Boolean
console.log(li.offsetLeft.constructor.name) //Number
console.log(li.click().constructor.name) //Undefined


// EXERCICIO 4

console.log(li.hidden.constructor.name)
// retorna uma String