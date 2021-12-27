async function puxarDados(){
    try{
        const promiseDados = fetch('./dados.json')
        const responseClientes = fetch('./clientes.json')
        //Acontecendo de forma assíncrona ^
        
        const jsonDados = await (await promiseDados).json()
        const jsonClientes = await(await responseClientes).json()
    
        document.body.innerText += jsonDados.aula
        document.body.innerText += jsonClientes.nome

        console.log(jsonDados)
        console.log(jsonClientes)
    }
    catch(erro){
        console.log(erro)
    }
    
}

puxarDados()