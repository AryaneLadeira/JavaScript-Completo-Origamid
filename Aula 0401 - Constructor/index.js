// function Dom(seletor){
//     this.element = function(){
//         return console.log(document.querySelector(seletor))
//     }
//     this.ativar = function(){
//         this.element().classList.add('ativar')
//     }
// }

// const li = new Dom('li')
// const lastLi = new Dom('li:last-child')

// li.element()
// li.ativar()
// lastLi.ativar()

//EXERCICIOS

// EXERCICIO 1 
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou')
    }
}

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.andar = function(){
        console.log(this.nome + ' andou')
    }
}

const joao = new Pessoa('joao', 20)
console.log(joao)
joao.andar()

const maria = new Pessoa('maria', 25)

const bruno = new Pessoa('bruno', 15)

// EXERCICIO 2

function Dom(seletor, classe){
    this.elements = document.querySelectorAll(seletor)
    this.addClass = function(classe){
        this.elements.forEach((item)=>{
            item.classList.add(classe)
        })
    }
    this.removeClass = function(classe){
        this.elements.forEach((item)=>{
            item.classList.remove(classe)
        })
    }
}

const lista = new Dom('li')
lista.addClass('listaAtiva')