var pessoa = {
    nome: 'aaaa',
    idade: 10,
}

var quadrado = {
    lados: 4,
    perimetro: function(lado){return lado*4},
    area: function(lado){return lado * lado}
}

var quadradoThis = {
    lados: 4,
    perimetro: function(lado){
        return this.lados * lado
    },
    area: function(){
        return this.lados * this.lados
    }
}

// forma reduzida:

var quadradoReduzido = {
    lados: 4,
    perimetro(){
        return this.lados
    }
}