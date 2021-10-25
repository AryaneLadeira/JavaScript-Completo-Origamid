// EXERCICIO 1

function isTruthy(value){
    if(value){
        return "Truthy"
    }
    else{
        return "Falsy"
    }
}

        // OR

function isTruthy(value){
    return !!value;
}

// EXERCICIO 2

function squadPerimeter(side){
    return side * 4;
}

// EXERCICIO 3

function fullName(name, surname){
    return name + " " + surname;
}

// EXERCICIO 4

function isEven(value){
    if(value % 2 == 0){
        return "Is even!"
    }else{
        return "Is odd!"
    }
}

// EXERCICIO 5

function whatIsTheType(value){
    return typeof(value)
}

// EXERCICIO 6

addEventListener('scroll', fullNameWithConsole)

function fullNameWithConsole(){
    console.log("ary smith")
}

// EXERCICIO 7

var totalContries = 193

function needVisit(countriesVisited){
    return `Missing ${totalContries - countriesVisited} countries yet.`
}

function visited(countriesVisited){
    return `${countriesVisited} countries visited of ${totalContries}.`
}

console.log(needVisit(20))
console.log(visited(20))