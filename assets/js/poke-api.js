

/* centralizar tudo em um objeto */

const pokeApi = {}

function convertPokeApiDetailPokemon(pokemonDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokemonDetail.name
    pokemon.number = pokemonDetail.order
    

    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type  = type

    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

    return pokemon
}


pokeApi.getpokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response)=> response.json())
        .then(convertPokeApiDetailPokemon)
}




pokeApi.getpokemons = (offset = 0, limit = 0) => {
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

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
    

