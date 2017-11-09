const ROUTE =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

document.addEventListener("DOMContentLoaded", () => {
  fetchPokemon();
});

const pokemonInput = document.getElementById("pokemon_name");
pokemonInput.addEventListener("submit", function(ev) {
  ev.preventDefault();
  let input = pokemonInput.querySelector("input").value;
  let chosenPokemon = pokeFinder(input);
  document.getElementById("show_pokemon").innerHTML = chosenPokemon.render();
});
function fetchPokemon(json) {
  fetch(`${ROUTE}`)
    .then(res => res.json())
    .then(json => makePokemon(json.pokemon));
}

function pokeFinder(input) {
  let result;
  if (parseInt(input)) {
    result = Pokemon.all().filter(function(elem) {
      return parseInt(elem.num) === parseInt(input);
    });
  } else {
    result = Pokemon.all().filter(function(elem) {
      return elem.name.toLowerCase() === input.toLowerCase();
    });
  }

  if (!result.length) {
    window.alert(`Couldn't find any Pokemon named ${input}`);
  } else {
    return result[0];
  }
}

function makePokemon(json) {
  console.log(json);
  json.forEach(el => {
    // debugger;
    let pokemon = new Pokemon(el);
  });
}

function showPokemon(pokemon) {}
