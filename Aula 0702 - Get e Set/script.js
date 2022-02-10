const button = {
    get tamanho() {
        return this._numero || 100;
    },
    set tamanho(numero) {
        this._numero = numero * 200;
    }
}

const frutas = {
    lista: [],
    set nova(fruta){
        this.lista.push(fruta);
    }
}

frutas.nova = 'Banana';
frutas.nova = 'Morango';


//////////////////////////////////////////////////////

class Button {
    constructor(text){
        this.text = text;
        this.color = color;
    }

    get element(){
        const elementType = this._elementType || 'button';
        const buttonElement = document.createElement(elementType);
        buttonElement.innerText = this.text;
        return buttonElement;
    }
    set element(type){
        this._elementType = type;
    }
}

const blueButton = new Button('Comprar');