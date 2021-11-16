// EXERCÍCIO 1

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']
console.log(comidas)

const primeiraComida = comidas.shift()
console.log(primeiraComida)

const ultimaComida = comidas.pop()
console.log(ultimaComida)

console.log(comidas)

comidas.push('Arroz')
console.log(comidas)

comidas.unshift('Peixe','Batata')
console.log(comidas)


// EXERCÍCIO 2

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

console.log(estudantes)
console.log(estudantes.sort())

console.log(estudantes.reverse())

console.log("Joana faz parte? "+ estudantes.includes('Joana'))

console.log("Juliana faz parte? "+ estudantes.includes('Juliana'))


// EXERCÍCIO 3

let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`

console.log(html)

let htmlSemSection = html.split('section')
console.log(htmlSemSection)

let htmlComUl = htmlSemSection.join('ul')
console.log(htmlComUl)

let htmlSemDiv = htmlComUl.split('div')
console.log(htmlSemDiv)

let htmlComLi = htmlSemDiv.join('li')
console.log(htmlComLi)


// EXERCÍCIO 4

const carros = ['Ford', 'Fiat', 'VW', 'Honda']

const carrosSalvo = carros.slice()

console.log(carros)
console.log(carrosSalvo)

carros.pop()
console.log(carros)
console.log(carrosSalvo)