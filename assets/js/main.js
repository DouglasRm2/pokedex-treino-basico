

const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

function convertPokemontoHtml (pokemon){
    return   `  
    <li class="pokemon">
    <span class="number"> #001</span>
    <span class="name"> ${pokemon.name} </span>
    
<div class="detail">
<ol class="types">
<li class="type">grass</li>
<li class="type">poison</li>
</ol>

<img src="/assets/img/Bulbasaur.png" alt="${pokemon.name}">
</div>
</li>

`;

}

/* posso usar dessa forma para melhorar a visibilidade do código
.then (function (response){
    return response.json()
})
.then (function(jsonbody){
    console.log(jsonbody)
})
*/

/* e para melhorar ainda mais posso usar  arrow function, para situação de callback uma sintax reduzida*/
const pokemonList = document.getElementById('pokemonList')



pokeApi.getpokemons().then ((pokemons) => {

    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
         pokemonList.innerHTML += convertPokemontoHtml(pokemon)
    

    }
})
.catch((error) => console.log(error))


    /* OU posso utilizar o .then DESSA FORMA!
    .......................
    response
    .json()
    .then(function (responsebody){
        console.log(responsebody)
    })
})
.................................
*/


