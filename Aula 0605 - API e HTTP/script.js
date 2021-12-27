// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(r=>r.json())
// .then(pokemon=>{
//     console.log(pokemon)
// })


// const url = 'https://jsonplaceholder.typicode.com/posts'
// const options = {
//     method: 'POST', //GET, POST
//     body: '{"title": "JavaScript"}',
//     headers: {
//         "Content-Type":"application/json; charset=utf-8"
//     }
// }

const url = 'https://jsonplaceholder.typicode.com/posts'
const options = {
    method: 'HEAD', //GET, POST
}

fetch(url, options)
.then(r=> console.log(r.headers.forEach(console.log)))