class Veiculo {
    constructor(rodas, combustivel){
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
    acelerar(){
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    constructor(rodas, combustivel, capacete){
        super(rodas, combustivel);
        this.capacete = capacete;
    }
    empinar(){
        console.log('Empinou com ' + this.rodas + ' rodas');
    }
    acelerar(){
        super.acelerar();
        console.log('Acelerou muito');
    }
}

const honda = new Moto(2, 'Gasolina', true);
honda.acelerar();