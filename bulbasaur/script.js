async function obtenerDetallePokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
}
async function mostrarPokemon() {
  const datos = await obtenerDetallePokemon("bulbasaur");
}
const containerPokemon = document.getElementById("container-pokemon");
containerPokemon.innerHTML;
s;
