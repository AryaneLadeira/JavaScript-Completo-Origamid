fetch('./dados.json')
.then(r => r.json())
.then(json =>{
    // console.log(json)
    // console.log(json[0])

    // json.forEach(aula => {
    //     console.log(aula.aula)
    // });
})

const configuracoes =  {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

localStorage.config = JSON.stringify(configuracoes)

console.log(localStorage.config)