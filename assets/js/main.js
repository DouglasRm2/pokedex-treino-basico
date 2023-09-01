
/*
function convertpokemontypes(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type"> ${typeSlot.type.name} </li>` )
}
*/
function convertPokemontoHtml (pokemon){
    return    `
       <li class="pokemon ${pokemon.type}">
    <span class="number"> #${pokemon.number}</span>
    <span class="name"> ${pokemon.name} </span>
    
<div class="detail">
<ol class="types">
             ${pokemon.types.map((type) => `<li class="type"> ${type} </li>`).join('')}
</ol>

<img src="${pokemon.photo}" 
alt="${pokemon.name}">
</div>
</li>`

}

/* posso usar dessa forma para melhorar a visibilidade do código
.then (function (response){
    return response.json()
})
.then (function(jsonbody){
    console.log(jsonbody)
})
*/

/* e para melhorar ainda mais posso usar  (( arrow function )), para situação de callback uma sintax reduzida*/
const pokemonList = document.getElementById('pokemonList')



pokeApi.getpokemons().then ((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemontoHtml).join('')
   pokemonList.innerHTML = newHtml
})


    
  /*   POSSO USAR ESSE MODELO TAMBÉM PARA USAR LISTAS
    const listadeItens = []

    
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listadeItens.push(convertPokemontoHtml(pokemon))
   }
   console.log(listadeItens)
})



    OU posso utilizar o .then DESSA FORMA!
    .......................
    response
    .json()
    .then(function (responsebody){
        console.log(responsebody)
    })
})
.................................
*/


