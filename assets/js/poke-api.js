

/* centralizar tudo em um objeto */

const pokeApi = {}

pokeApi.getpokemons = (offset = 0, limit = 10) => {
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

return fetch(url)
.then ((response) => response.json())
.then ((jsonbody) =>   jsonbody.results)
.catch((error) => console.log(error))
}