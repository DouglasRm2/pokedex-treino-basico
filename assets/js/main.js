

const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

fetch(url)




/* posso usar dessa forma para melhorar a visibilidade do código
.then (function (response){
    return response.json()
})
.then (function(jsonbody){
    console.log(jsonbody)
})
*/

/* e para melhorar ainda mais posso usar  arrow function, para situação de callback uma sintax reduzida*/
.then ((response) => response.json())
.then ((jsonbody) =>    console.log(jsonbody))
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


