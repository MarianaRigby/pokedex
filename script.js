async function obtenerPokemonsByType() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/type/water?");
  if (respuesta.ok) {
    const datos = await respuesta.json();
    return datos.results;
  } else {
    return null;
  }
}

async function obtenerPokemons() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
  if (respuesta.ok) {
    const datos = await respuesta.json();
    return datos.results;
  } else {
    return null;
  }
}
const pokemons = await obtenerPokemons();
console.log(pokemons);

async function detallePokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (response.ok) {
    const data = await response.json();
    console.log("datalle pokemn", data);
    return data.sprites.other["official-artwork"].front_default;
  } else {
    return null;
  }
}

const contenedorPokemon = document.getElementById("pokemon-container");
let pokemonHTML = "";

function capitalizarNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

for (let i = 0; i < pokemons.length; i++) {
  const url = pokemons[i].url;
  console.log(url);
  const name = pokemons[i].name;
  console.log(name);
  const imagenPokemonURL = await detallePokemon(pokemons[i].name);
  pokemonHTML += `<div class="border border-blue-500">
  <div>
    <img src="${imagenPokemonURL}" class="h-full w-full"/>
    <h1 class="text-center font-semibold text-orange-200 text-2xl hover:text-orange-300 transition duration-300 ease-in-out">
    <a href="/detalle-de-pokemon?pokemonName=${name}">${capitalizarNombre(
    pokemons[i].name
  )}
    </h1>
    </div>
    </div>`;
}
contenedorPokemon.innerHTML = pokemonHTML;
