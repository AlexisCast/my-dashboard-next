const getPokemons = async (limit = 20, offset = 0) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	);
	const data = response.json();

	return data;
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons();

	return (
		<div>
			<h1>Pokemons Page</h1>
			{JSON.stringify(pokemons)}
		</div>
	);
}
