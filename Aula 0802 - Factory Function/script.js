// function createButton(text){
//     const secreto = 'asaidjaisda'
//     function element(){
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = text;
//         return buttonElement;
//     }
//     return Object.freeze({
//         text,
//         element
//     })
// }
// const btnComprar = createButton('Comprar');
// btnComprar.text = "Novo Texto";
// const btnVender = createButton('Vender');

// console.log(btnComprar)
// console.log(btnVender)

//////////////////////////////////////////////////////////////////

// function Pessoa(nome){
//     // if(!(this instanceof Pessoa))
//     if(!new.target)
//         return new Pessoa(nome);
//     this.nome = nome;
// }

// Pessoa.prototype.andar = function() {
//     return `${this.nome} andou`;
// }

// const designer = Pessoa('Aryane');


//////////////////////////////////////////////////////////////////