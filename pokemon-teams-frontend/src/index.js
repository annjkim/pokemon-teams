const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const pokemonCard = document.getElementById('pokemon-card')
// console.log(pokemonCard)

fetch(TRAINERS_URL)
.then(response => response.json())
.then(trainers => getAllTrainers(trainers))

function getAllTrainers(trainers) {
  trainers.forEach(function findPokemon(trainer) {
    // need to use data- attributes here
    // wasn't able to iterate through the nested array to grab each pokemons id
    pokemonCard.innerHTML += `<div id='trainer-card' class="card" data-id="1"><p>${trainer.name}</p>
                                <button id='add-pokemon-button' data-trainer-id="${trainer.id}">Add Pokemon</button>
                                <ul>
                                  <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
                                </ul>
                              </div>`

    // DELIVERABLE 2
    const addPokemonButton = document.getElementById('add-pokemon-button')
    const trainerCard = document.getElementById('trainer-card')
    addPokemonButton.addEventListener('click', function(event) {
      // need a conditional statement here since each trainer can only have 6 pokemons
      fetch(POKEMONS_URL,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ trainer_id: ${trainer.id}})
        }
    })
  })

  // DELIVERABLE 3
  // need a delete request when there's no more room for a trainer to add a pokemon



}
