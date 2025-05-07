const params = new URLSearchParams(window.location.search);

const nombre = params.get("pokemonName");

console.log(nombre);

async function detallePokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}

function capitalizarNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}
const typeColors = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
  normal: "#A8A878",
};

function getPokemonTypes(types) {
  let pokemonTypesHTML = "";
  for (let i = 0; i < types.length; i++) {
    const typeName = types[i].type.name;
    const color = typeColors[typeName];
    pokemonTypesHTML += `<div style="background-color: ${color}"class="rounded-lg h-[40px] w-[120px]">
    <p class="text-center text-lg font-semibold text-white">${capitalizarNombre(
      typeName
    )}</p>
    </div>`;
  }
  return pokemonTypesHTML;
}

const pokemon = await detallePokemon(nombre);
console.log(pokemon);
const imagenPokemon = pokemon.sprites.other["official-artwork"].front_default;
const containerDetallePokemon = document.getElementById(
  "container-detalle-pokemon"
);
const mostrarDetallePokemon = `
 <button class="bg-blue-200 p-2 rounded-lg hover:bg-blue-300 transition duration-300 ease-in-out">
      <a href="../index.html" class="text-white text-center text-2xl font-semibold">Ver todos</a>
</button>
<div class="p-4 grid grid-cols-1 md:grid-cols-2 ">
<div class="flex justify-center items-center">
<img class=""src="${imagenPokemon}"/>
</div>
<div class="">
<h1 class="text-4xl font-semibold text-center text-sky-800">${capitalizarNombre(
  pokemon.name
)}</h1>
<div class="flex justify-between text-center">
  <div class="flex flex-col items-center w-1/2">
    <p class="text-lg font-semibold">Height</p>
    <p class="text-2xl font-bold">${pokemon.height} m</p>
  </div>
  <div class="flex flex-col items-center w-1/2">
    <p class="text-lg font-semibold">Weight</p>
    <p class="text-2xl font-bold">${pokemon.weight} kg</p>
  </div>
</div>
<div class="text-center">
<p class="text-lg font-semibold">Type</p>
<div class="mt-2 flex justify-center gap-4 flex-wrap">
<p>${getPokemonTypes(pokemon.types)}</p>
</div>
</div>
</div>
</div>`;

containerDetallePokemon.innerHTML = mostrarDetallePokemon;
