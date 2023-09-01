

/* centralizar tudo em um objeto */

const pokeApi = {}



pokeApi.getpokemonsDetail = (pokemon) => {
    return fetch(pokemon.url).then((response)=> response.json())
}




pokeApi.getpokemons = (offset = 0, limit = 4) => {
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

return fetch(url)
.then ((response) => response.json())
.then ((jsonbody) =>   jsonbody.results)
.catch((error) => console.log(error))
.then((pokemons) => pokemons.map(pokeApi.getpokemonsDetail))
.then((detailrequest) => Promise.all(detailrequest))

}





/*
como solicitar uma nova requisição
*/
Promise.all([ 
    fetch('https://pokeapi.co/api/v2/pokemon/1/'),
    fetch('https://pokeapi.co/api/v2/pokemon/2/'),
    fetch('https://pokeapi.co/api/v2/pokemon/3/'),
    fetch('https://pokeapi.co/api/v2/pokemon/4/'),
    fetch('https://pokeapi.co/api/v2/pokemon/5/'),
]).then((results) =>{
    console.log(results)
})
    

