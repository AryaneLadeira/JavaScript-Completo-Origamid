// EXERCICIO 1

var personalData = {
    name: "ary",
    surname: "smith",
    age: 19,
    favoriteColor: "purple",
    fullname(){ console.log(`${this.name} ${this.surname}`)}
}

// EXERCICIO 2

var car = {
    price: 1000,
    doors: 4,
    model: 'Jetta'
}

car.price = 4000

// EXERCICIO 3
var woman = {
    name: "rachel",
    sex: "female"
}

var man = {
    name: "vini",
    sex: "man"
}


var dog = {
    breed: "labrador",
    color: "black",
    age: 10,
    bark(human){
        if(human.sex == "man"){
            console.log("au")
        }else{
            console.log("...")
        }
    }
}