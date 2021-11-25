//EXERCICIO 1

const cursos = document.querySelectorAll('.curso')

cursosArray = Array.from(cursos)

const cursosObj = cursosArray.map((curso)=>{
    return {
        titulo: curso.querySelector('h1').innerText,
        descricao: curso.querySelector('p').innerText,
        aulas: curso.querySelector('.aulas').innerText,
        horas: curso.querySelector('.horas').innerText,
    }
})

console.log(cursosObj)


//EXERCICIO 2

const numeros = [3, 44, 333, 23, 122, 322, 33]

const maioresQue100 = numeros.filter(x => x > 100)

console.log(maioresQue100)


//EXERCICIO 3

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

console.log("Tem baixo? ",(encontrarBaixo(instrumentos))? 'Sim' : 'Não')

function encontrarBaixo(array){
    return array.some((item)=>{
        return item == 'Baixo'
    })
}

//EXERCICIO 4

const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
]

const valoresCompras = compras.reduce((acumulador, item)=>{

    let precoConvertido = +item.preco.replace('R$ ', '').replace(',', '.')

    return acumulador + precoConvertido
}, 0)

console.log('Valor Total: R$',valoresCompras)