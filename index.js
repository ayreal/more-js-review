const ROUTE =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

document.addEventListener("DOMContentLoaded", () => {
  fetchPokemon();
});

let test;

const pokemonInput = document.getElementById("pokemon_name");
pokemonInput.addEventListener("submit", function(ev) {
  ev.preventDefault();
  let input = pokemonInput.querySelector("input").value;
  pokeFinder(input);
});

function pokeFinder(input) {
  let result;
  if (parseInt(input)) {
    Pokemon.all().filter(function(elem) {
      return parseInt(elem.num) === parseInt(input);
    });
  } else {
    // maybe send an alert box telling them to put a poke number
    // debugger;
    Pokemon.all().filter(function(elem) {
      return elem.name.toLowerCase() === input.toLowerCase();
    });
  }

  if (!result) {
    window.alert(`Couldn't find any Pokemon named ${input}`);
  }
}

function fetchPokemon(json) {
  fetch(`${ROUTE}`)
    .then(res => res.json())
    .then(json => makePokemon(json.pokemon));
}

function makePokemon(json) {
  console.log(json);
  json.forEach(el => {
    // debugger;
    let pokemon = new Pokemon(el);
  });
}
