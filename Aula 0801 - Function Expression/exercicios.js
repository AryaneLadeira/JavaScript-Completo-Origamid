// EXERCICIO 1
//Remova o erro:
// priceNumber('R$99,99');
// const priceNumber = n => +n.replace('R$', '').replace(',', '.');

const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$99,99');


// EXERCICIO 2
// Crie uma IIFE e isole o escopo de qualquer codigo JS.
console.log(priceNumber);

(() => {
    const priceNumber = 58;
    console.log(priceNumber)
})();


// EXERCICIO 3
// Como podemos utilizar a função abaixo
// const active = callback => callback();

const active = callback => callback();

active(()=> console.log("callback ativado"));