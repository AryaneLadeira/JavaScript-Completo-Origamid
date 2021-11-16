// EXERCICIO 1

    const transacoes = [
        {
            descricao: 'Taxa do Pão',
            valor: 'R$ 39',
        },
        {
            descricao: 'Taxa do Mercado',
            valor: 'R$ 129',
        },
        {
            descricao: 'Recebimento de Cliente',
            valor: 'R$ 99',
        },
        {
            descricao: 'Taxa do Banco',
            valor: 'R$ 129',
        },
        {
            descricao: 'Recebimento de Cliente',
            valor: 'R$ 49',
        },
    ]

let totalTaxa = 0;
let totalRecebimento = 0;

transacoes.forEach((item)=>{
    let valorSemCifrao = +item.valor.replace('R$ ', '')
    
    console.log("Valor convertido: "+valorSemCifrao + "     Descrição: "+ item.descricao)

    if(item.descricao.includes('Taxa')){
        totalTaxa += valorSemCifrao
    }
    if(item.descricao.includes('Recebimento')){
        totalRecebimento += valorSemCifrao
    }

    console.log("Taxa: "+totalTaxa)
    console.log("Recebimento: "+totalRecebimento)
    
})

// Outras opções:
// item.descricao.substr(0,4) === 'Taxa'
// item.descricao.slice(0,4) === 'Taxa'



// EXERCÍCIO 2
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'

const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)


// EXERCICIO 3
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`

const htmlSemSpan = html.split('span')
console.log(htmlSemSpan)

const htmlComA = htmlSemSpan.join('a')
console.log(htmlComA)


// EXERCICIO 4

function ultimoCaractere(){
    const frase = 'Melhor do ano!'

    return frase.charAt(frase.length - 1)
}

console.log(ultimoCaractere())


// EXERCICIO 5

const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '    taxa do mercado', 'depósito bancário', 'TARIFA especial']

let totalTaxas = 0

transacoes2.forEach((item)=>{
    item = item.toLowerCase().trim()
    console.log(item)

    if(item.includes('taxa')){
        totalTaxas++
    }
})

console.log(totalTaxas)