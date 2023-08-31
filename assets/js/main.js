

const offset = 0
const limit = 2
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

fetch(url)
.then (function (response){
    console.log(response)
})

.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log('Requesição concluída')
})